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
import ShiftInfoScreen from  '../ui/screens/ShiftInfoScreen';
import ShiftTypeScreen from '../ui/screens/ShiftTypeScreen';
import ReserveSpecialityScreen from '../ui/screens/ReserveSpecialityScreen';
import ShiftCancelScreen from '../ui/screens/ShiftCancelScreen';
import ReserveProfessionalScreen from '../ui/screens/ReserveProfessionalScreen';
import SuccessfulReservationScreen from '../ui/screens/SuccessfulReservationScreen';
import InsuranceScreen from "../ui/screens/InsuranceScreen";
import DoctorListScreen from "../ui/screens/DoctorListScreen";
import AccountInfoScreen from "../ui/screens/AccountInfoScreen";
import SuccessfulEditProfileScreen from "../ui/screens/SuccessfulEditProfileScreen";

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
            <Drawer.Screen name="ShiftInfo" component={ShiftInfoScreen}/>
            <Drawer.Screen name="ShiftType" component={ShiftTypeScreen} />
            <Drawer.Screen name="ReserveSpeciality" component={ReserveSpecialityScreen} />
            <Drawer.Screen name="ShiftCancel" component={ShiftCancelScreen} />
            <Drawer.Screen name="ReserveProfessional" component={ReserveProfessionalScreen} />
            <Drawer.Screen name="SuccessfulReservation" component={SuccessfulReservationScreen} />
            <Drawer.Screen name="InsuranceScreen" component={InsuranceScreen} />
            <Drawer.Screen name="DoctorList" component={DoctorListScreen}   />
            <Drawer.Screen name="AccountInfo" component={AccountInfoScreen}   />
            <Drawer.Screen name="SuccessfulEditProfile" component={SuccessfulEditProfileScreen}   />

            
        </Drawer.Navigator>
    )
}