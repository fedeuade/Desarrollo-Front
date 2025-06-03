import React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer"
import HomeScreen from "../ui/screens/HomeScreen";
import SettingsScreen from "../ui/screens/SettingsScreen";

const Drawer = createDrawerNavigator()

export default function NavigationDrawer(){
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Login" component={LoginScreen}/>
            <Drawer.Screen name="ForgetPassword" component={ForgetPasswordScreen}/>
        </Drawer.Navigator>
    )
}