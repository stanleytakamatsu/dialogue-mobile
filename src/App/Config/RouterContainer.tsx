import { createAppContainer, createStackNavigator } from 'react-navigation';

import { Login } from '../UI/Login/Login';

const AppNavigator = createStackNavigator(
  {
    Home: { screen: Login }
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
);

const RouterContainer = createAppContainer(AppNavigator);

export { RouterContainer };
