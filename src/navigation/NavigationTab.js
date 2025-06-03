import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import HomeScreen from "../ui/screens/HomeScreen";
import SettingsScreen from "../ui/screens/SettingsScreen";

const Tab = createBottomTabNavigator();

export default function NavigationTab(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Login" component={LoginScreen}/>
            <Tab.Screen name="ForgetPassword" component={ForgetPasswordScreen}/>
        </Tab.Navigator>
    )
}