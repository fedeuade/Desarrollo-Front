import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DoctorScreen from '../ui/screens/DoctorScreen';
import ShiftInfoScreen from '../ui/screens/ShiftInfoScreen';
import ShiftHistoryScreen from '../ui/screens/ShiftHistoryScreen';
import InsuranceScreen from '../ui/screens/InsuranceScreen';
import ProfileScreen from '../ui/screens/ProfileScreen';
import DoctorFilterScreen from '../ui/screens/DoctorFilterScreen';
import DoctorListScreen from '../ui/screens/DoctorListScreen';

const Stack = createNativeStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="DoctorList" component={DoctorListScreen} />
      <Stack.Screen name="DoctorFilter" component={DoctorFilterScreen} />


    </Stack.Navigator>
  );
}