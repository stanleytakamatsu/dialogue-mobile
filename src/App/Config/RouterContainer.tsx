import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Login } from '../UI/Login/Login';
const AppNavigator = createStackNavigator({
  Home: { screen: Login }
});

const RouterContainer = createAppContainer(AppNavigator);

export { RouterContainer };
