import React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer"
import LoginScreen from "../ui/screens/LoginScreen";
import ForgetPasswordScreen from "../ui/screens/ForgetPasswordScreen";
import EnterCodeScreen from '../ui/screens/EnterCodeScreen';
import CreateNewPasswordScreen from '../ui/screens/CreateNewPasswordScreen';
import PasswordUpdateScreen from '../ui/screens/PasswordUpdateScreen';
import RegisterScreen from '../ui/screens/RegisterScreen';
import EmptyShiftScreen from '../ui/screens/EmptyShiftScreen';
import ShiftHistoryScreen from '../ui/screens/ShiftHistoryScreen';
import DoctorScreen from '../ui/screens/DoctorScreen';
import ProfileScreen from '../ui/screens/ProfileScreen';


const Drawer = createDrawerNavigator()

export default function NavigationDrawer(){
    return(
        <Drawer.Navigator>
            
            <Drawer.Screen name="Login" component={LoginScreen}/>
            <Drawer.Screen name="ForgetPassword" component={ForgetPasswordScreen}/>
            <Drawer.Screen name="EnterCode" component={EnterCodeScreen}/>
            <Drawer.Screen name="CreateNewPassword" component={CreateNewPasswordScreen}/>
            <Drawer.Screen name="PasswordUpdate" component={PasswordUpdateScreen}/>
            <Drawer.Screen name="Register" component={RegisterScreen}/>
            <Drawer.Screen name="EmptyShift" component={EmptyShiftScreen}/>
            <Drawer.Screen name="Profile" component={ProfileScreen}/>
            <Drawer.Screen name="Doctor" component={DoctorScreen}/>
            <Drawer.Screen name="ShiftHistory" component={ShiftHistoryScreen}/>

            
        </Drawer.Navigator>
    )
}