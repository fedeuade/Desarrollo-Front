import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EmptyShiftScreen from '../ui/screens/EmptyShiftScreen';
import ShiftTypeScreen from '../ui/screens/ShiftTypeScreen';
import ReserveSpecialityScreen from '../ui/screens/ReserveSpecialityScreen';
import ReserveProfessionalScreen from '../ui/screens/ReserveProfessionalScreen';
import ShiftInfoScreen from '../ui/screens/ShiftInfoScreen';

const Stack = createNativeStackNavigator();

export default function EmptyShiftStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="EmptyShiftScreen" component={EmptyShiftScreen} />
      <Stack.Screen name="ShiftType" component={ShiftTypeScreen} />
      <Stack.Screen name="ReserveSpeciality" component={ReserveSpecialityScreen} />
      <Stack.Screen name="ReserveProfessional" component={ReserveProfessionalScreen} />
      <Stack.Screen name="ShiftInfoScreen" component={ShiftInfoScreen} />

    </Stack.Navigator>
  );
}