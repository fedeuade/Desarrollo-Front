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
import ShiftTypeScreen from '../ui/screens/ShiftTypeScreen';
import ReserveSpecialityScreen from '../ui/screens/ReserveSpecialityScreen';
import ShiftCancelScreen from '../ui/screens/ShiftCancelScreen';
import ReserveProfessionalScreen from '../ui/screens/ReserveProfessionalScreen';
import SuccessfulReservationScreen from '../ui/screens/SuccessfulReservationScreen';
import InsuranceScreen from '../ui/screens/InsuranceScreen';
import DoctorListScreen from '../ui/screens/DoctorListScreen';
import DoctorFilterScreen from '../ui/screens/DoctorFilterScreen';
import AccountInfoScreen from '../ui/screens/AccountInfoScreen';
import SuccessfulEditProfileScreen from '../ui/screens/SuccessfulEditProfileScreen';

const Stack= createNativeStackNavigator();

export default function NavigationStack(){
  
return(
    <Stack.Navigator initialRouteName="Register">

        <Stack.Screen name="Login" component={LoginScreen} options={{ headerTitle: '',headerBackVisible: false}}/>
        <Stack.Screen name="ForgetPassword" component={ForgetPasswordScreen} options={{ headerTitle: ''}}/>
        <Stack.Screen name="EnterCode" component={EnterCodeScreen} options={{ headerTitle: ''}}/>
        <Stack.Screen name="CreateNewPassword" component={CreateNewPasswordScreen} options={{ headerTitle: ''}}/>
        <Stack.Screen name="PasswordUpdate" component={PasswordUpdateScreen} options={{ headerTitle: '',headerBackVisible: false}}/>
        <Stack.Screen name="Register" component={RegisterScreen}  options={{ headerTitle: ''}}/>


        {/* Pantallas con tab */}
      <Stack.Screen name="EmptyShift" component={NavigationTab}  options={{ headerShown: false }}  />
      <Stack.Screen name="Doctor" component={NavigationTab}  options={{ headerShown: false }}  />
      <Stack.Screen name="ShiftHistory" component={NavigationTab}  options={{ headerShown: false }}  />
      <Stack.Screen name="Profile" component={NavigationTab}  options={{ headerShown: false }}  />
      <Stack.Screen name="ShiftInfoScreen" component={ShiftInfoScreen} options={{ headerShown: false }} />
      <Stack.Screen name="DoctorList" component={DoctorListScreen}   />

      <Stack.Screen name="ShiftType" component={ShiftTypeScreen} options={{ headerTitle: ''}} />
      <Stack.Screen name="ReserveSpeciality" component={ReserveSpecialityScreen} />
      <Stack.Screen name="ShiftCancel" component={ShiftCancelScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="ReserveProfessional" component={ReserveProfessionalScreen} />
      <Stack.Screen name="SuccessfulReservation" component={SuccessfulReservationScreen}  options={{ headerShown: false }}/>
      <Stack.Screen name="Insurance" component={InsuranceScreen}   />
      <Stack.Screen name="DoctorFilter" component={DoctorFilterScreen}   />
      <Stack.Screen name="AccountInfo" component={AccountInfoScreen}   />



    </Stack.Navigator>
    )
}