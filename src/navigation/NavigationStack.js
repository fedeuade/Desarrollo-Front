import React from 'react'
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import LoginScreen from '../ui/screens/LoginScreen'
import ForgetPasswordScreen from '../ui/screens/ForgetPasswordScreen'
import EnterCodeScreen from '../ui/screens/EnterCodeScreen';
import CreateNewPasswordScreen from '../ui/screens/CreateNewPasswordScreen';


const Stack= createNativeStackNavigator();

export default function NavigationStack(){
  
return(
    <Stack.Navigator initialRouteName="CreateNewPassword">

        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="ForgetPassword" component={ForgetPasswordScreen}/>
        <Stack.Screen name="EnterCode" component={EnterCodeScreen}/>
        <Stack.Screen name="CreateNewPassword" component={CreateNewPasswordScreen}/>



    </Stack.Navigator>
    )
}