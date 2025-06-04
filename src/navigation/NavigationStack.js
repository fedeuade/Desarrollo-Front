import React from 'react'
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import LoginScreen from '../ui/screens/LoginScreen'
import ForgetPasswordScreen from '../ui/screens/ForgetPasswordScreen'
import EnterCodeScreen from '../ui/screens/EnterCodeScreen';
import CreateNewPasswordScreen from '../ui/screens/CreateNewPasswordScreen';
import PasswordUpdateScreen from '../ui/screens/PasswordUpdateScreen';
import RegisterScreen from '../ui/screens/RegisterScreen';
import EmptyShiftScreen from '../ui/screens/EmptyShiftScreen';
import NavigationTab from './NavigationTab'; 
import ShiftHistoryScreen from '../ui/screens/ShiftHistoryScreen';
import DoctorScreen from '../ui/screens/DoctorScreen';
import ProfileScreen from '../ui/screens/ProfileScreen';
import ShiftInfoScreen from  '../ui/screens/ShiftInfoScreen';

const Stack= createNativeStackNavigator();

export default function NavigationStack(){
  
return(
    <Stack.Navigator initialRouteName="EmptyShift">

        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="ForgetPassword" component={ForgetPasswordScreen}/>
        <Stack.Screen name="EnterCode" component={EnterCodeScreen}/>
        <Stack.Screen name="CreateNewPassword" component={CreateNewPasswordScreen}/>
        <Stack.Screen name="PasswordUpdate" component={PasswordUpdateScreen}/>
        <Stack.Screen name="Register" component={RegisterScreen}/>


        {/* Pantallas con tab */}
      <Stack.Screen name="EmptyShift" component={NavigationTab}  options={{ headerShown: false }}  />
      <Stack.Screen name="Doctor" component={NavigationTab}  options={{ headerShown: false }}  />
      <Stack.Screen name="ShiftHistory" component={NavigationTab}  options={{ headerShown: false }}  />
      <Stack.Screen name="Profile" component={NavigationTab}  options={{ headerShown: false }}  />
    <Stack.Screen name="ShiftInfoScreen" component={ShiftInfoScreen} />


    </Stack.Navigator>
    )
}