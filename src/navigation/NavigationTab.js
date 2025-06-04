import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import LoginScreen from '../ui/screens/LoginScreen'
import ForgetPasswordScreen from '../ui/screens/ForgetPasswordScreen'
import EnterCodeScreen from '../ui/screens/EnterCodeScreen';
import CreateNewPasswordScreen from '../ui/screens/CreateNewPasswordScreen';


const Tab = createBottomTabNavigator();

export default function NavigationTab(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Login" component={LoginScreen}/>
            <Tab.Screen name="ForgetPassword" component={ForgetPasswordScreen}/>
            <Tab.Screen name="EnterCode" component={EnterCodeScreen}/>
            <Tab.Screen name="CreateNewPassword" component={CreateNewPasswordScreen}/>
            
        </Tab.Navigator>
    )
}