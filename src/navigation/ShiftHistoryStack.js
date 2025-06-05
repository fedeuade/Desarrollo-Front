import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DoctorScreen from '../ui/screens/DoctorScreen';
import ShiftInfoScreen from '../ui/screens/ShiftInfoScreen';
import ShiftHistoryScreen from '../ui/screens/ShiftHistoryScreen';

const Stack = createNativeStackNavigator();

export default function DoctorStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ShiftHistory" component={ShiftHistoryScreen} />
      <Stack.Screen name="ShiftInfoScreen" component={ShiftInfoScreen} />
    </Stack.Navigator>
  );
}