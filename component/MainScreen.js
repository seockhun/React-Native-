import React, { Component } from 'react';
import { StyleSheet, Platform, Text, View } from 'react-native';
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'native-base';

import HomeTab from './AppTabNavigator/HomeTap';
import AddMediaTab from './AppTabNavigator/AddMediaTab';
import SearchTab from './AppTabNavigator/SearchTab';
import LikesTab from './AppTabNavigator/LikesTab';
import ProfileTab from './AppTabNavigator/ProfileTab';

const AppTabNavigator = createBottomTabNavigator({
    HomeTab: { screen: HomeTab },
    SearchTab: { screen: SearchTab },
    AddMediaTab: { screen: AddMediaTab },
    LikesTab: { screen: LikesTab },
    ProfileTab: { screen: ProfileTab },
}, {
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition: "bottom",
    tabBarOptions: {
        style: {
            ...Platform.select({
                ios: {
                    backgroundColor: "white",
                }
            })
        },
        iconStyle: { height: 100 },
        activeTintColor: "#000",
        inactiveTintColor: "#d1cece",
        upperCaseLabel: false,
        showLabel: false,
        showIcon: true,
    }
});



export default class MainScreen extends Component {



    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <AppTabContainet />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});