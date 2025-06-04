import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

// Tus pantallas
import EmptyShiftScreen from "../ui/screens/EmptyShiftScreen";
import DoctorScreen from "../ui/screens/DoctorScreen";
import ShiftHistoryScreen from "../ui/screens/ShiftHistoryScreen";
import ProfileScreen from "../ui/screens/ProfileScreen";
import ShiftInfoScreen from  '../ui/screens/ShiftInfoScreen';

const Tab = createBottomTabNavigator();

export default function NavigationTab() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          left: 20,
          right: 20,
          backgroundColor: '#fff',
          height: 70,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'EmptyShift') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Doctor') {
            iconName = focused ? 'medkit' : 'medkit-outline';
          } else if (route.name === 'ShiftHistory') {
            iconName = focused ? 'time' : 'time-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return (
            <Ionicons
              name={iconName}
              size={28}
              color={focused ? '#03045E' : '#A3A3C2'}
            />
          );
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="EmptyShift" component={EmptyShiftScreen} />
      <Tab.Screen name="ShiftHistory" component={ShiftHistoryScreen} />
      <Tab.Screen name="Doctor" component={DoctorScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />

    </Tab.Navigator>
  );
}
