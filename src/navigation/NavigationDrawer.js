import React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer"
import LoginScreen from "../ui/screens/LoginScreen";
import ForgetPasswordScreen from "../ui/screens/ForgetPasswordScreen";
import EnterCodeScreen from '../ui/screens/EnterCodeScreen';
import CreateNewPasswordScreen from '../ui/screens/CreateNewPasswordScreen';


const Drawer = createDrawerNavigator()

export default function NavigationDrawer(){
    return(
        <Drawer.Navigator>
            
            <Drawer.Screen name="Login" component={LoginScreen}/>
            <Drawer.Screen name="ForgetPassword" component={ForgetPasswordScreen}/>
            <Drawer.Screen name="EnterCode" component={EnterCodeScreen}/>
            <Drawer.Screen name="CreateNewPassword" component={CreateNewPasswordScreen}/>
            
        </Drawer.Navigator>
    )
}