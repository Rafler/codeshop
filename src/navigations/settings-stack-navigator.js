import {createStackNavigator} from "react-navigation-stack";
import SettingsScreen from "../pages/SettingsPage/Settings";

const SettingsStack = createStackNavigator({
    Settings: { screen: SettingsScreen },
});

export default SettingsStack;
