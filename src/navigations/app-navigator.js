import {createBottomTabNavigator} from "react-navigation-tabs";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import React from "react";
import SettingsStack from "./settings-stack-navigator";
import HomeStack from "./home-stack-navigator";
import {BRAND_COLOR} from "../styles/colors";

const AppNavigator = createBottomTabNavigator(
    {
        Home: { screen: HomeStack },
        Settings: { screen: SettingsStack },
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Home') {
                    iconName = 'barcode-scan';
                } else if (routeName === 'Settings') {
                    iconName = 'settings';
                }

                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons
                return <MaterialCommunityIcons name={iconName} size={25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: BRAND_COLOR,
            inactiveTintColor: 'gray',
        },
    }
);

export default AppNavigator;
