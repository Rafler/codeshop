import {Text, View} from "react-native";
import React from "react";
import {styles} from './styles'

export default class SettingsScreen extends React.Component {
    render() {
        return (
            <View style={styles.main}>
                <Text>Settings screen</Text>
            </View>
        );
    }
}
