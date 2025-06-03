import React from 'react'
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import LoginScreen from '../ui/components/LoginScreen'
import ForgetPasswordScreen from '../ui/components/ForgetPasswordScreen'

const Stack= createNativeStackNavigator();

export default function NavigationStack(){
  
return(
    <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="ForgetPassword" component={ForgetPasswordScreen}/>

    </Stack.Navigator>
    )
}