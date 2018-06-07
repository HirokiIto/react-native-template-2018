import { NavigationNavigator, NavigationActions } from 'react-navigation';
import { observable, action } from 'mobx';

export default class Nav {
  @observable.ref navigation: NavigationActions = null;

  @action setNavigator(navigator: NavigationNavigator): void {
    // navigator is NavigationContainer
    // Store `navigation` in Nav for future use in child components.
    this.navigation = navigator._navigation;
  }
}