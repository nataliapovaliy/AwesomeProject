import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import LoginScreen from '../Screens/LoginScreen';
import RegistrationScreen from '../Screens/RegistrationScreen';

const stackNavigatorOptions = {
    headerShow:false
}

const AppNavigator = createStackNavigator({
    Login: { screen: LoginScreen },
    Register: { screen: RegistrationScreen }
    },
    {
        defaultNavigationOptions: stackNavigatorOptions
    }
);

export default createAppContainer(AppNavigator);