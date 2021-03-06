# Notes

### 環境構築

Nodejs, Expo XDE, React Native Debuggerインストール済み前提

create-react-native-appをインストール

```bash
$ yarn global add create-react-native-app
```

React Nativeプロジェクトを作成

```bash
$ create-react-native-app appName
```

#### Debug

###### Expo XDE でプロジェクトを開く

Open Projectから`$ create-react-native-app appName`で生成されたフォルダを選択、起動したら、歯車アイコンをクリックして、Host -> LAN を選択。Development Modeにチェックが入っていることを確認。
DeviceアイコンからiOSかAndroidのシミュレータを起動。

###### React Native Debugger を起動

Expoはport19001でデバッガを実行するので、React Native Debuggerにportを指定して起動する必要があります。

```bash
$ open "rndebugger://set-debugger-loc?host=localhost&port=19001"
```

シミュレータでExpoアプリの設定画面を開き(command+d),「Debug Remote JS」を押すと、デバッグができるようになります。

#### State

* [MobX](https://mobx.js.org/)

decoratorを使うために`$ yarn add babel-plugin-transform-decorators-legacy -D`

.babelrcに`"plugins": ["transform-decorators-legacy"],`を追加

#### Routing

* ●[react-navigation](https://github.com/react-navigation/react-navigation)
* [react-native-router-flux](https://github.com/aksonov/react-native-router-flux)

#### Design

* ●[react-native-elements](https://github.com/react-native-training/react-native-elements)
* [NativeBase](https://github.com/GeekyAnts/NativeBase)

icon example

```
import { Icon } from 'react-native-elements';

<Icon
  name='sign-out'
  type='font-awesome'
  onPress={this.onPress}
/>
```

* [iconはここから探す](https://oblador.github.io/react-native-vector-icons/)

## Reference

* [Expo + React Native Debugger でデバッグする](http://blosuki.hatenablog.com/entry/2018/01/21/215010)
* [react-native-router-flux v4 の実装7パターンをコードとGIFで眺める](https://qiita.com/vsanna/items/98ad99a5e97876314d09)
* [React Native おすすめコンポーネント一覧v2](https://qiita.com/YutamaKotaro/items/dac047715896dc11e555)
* [React Native / React Navigation を Mobx と使う](http://www.workabroad.jp/posts/2206)