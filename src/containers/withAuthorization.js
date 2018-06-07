import React from 'react';
import { inject, observer } from 'mobx-react';

/*
 * ログインユーザー以外をwithAuthorizationに噛ませたページへアクセスさせない
 */
const withAuthorization = (Component) => {
  @inject('session')
  @observer
  class WithAuthorization extends React.Component {
    // asyncでないとsession.userに物が入る前に下まで実行されてしまう
    async componentDidMount() {
      const { session } = this.props;
      // withAuthenticationは@observerでないから
      // checkLoginは必要
      await session.checkLogin()
      // session.userがないのなら/signinページへ飛ぶ
      if (!session.user) {
        this.props.navigation.navigate('Signin')
      }

    }

    render() {
      return this.props.session.user ? <Component /> : null;
    }
  }

  return (WithAuthorization);
}

export default withAuthorization;