import React, { useState, useCallback } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { getAllDoctors } from './doctorApi';
import DoctorList from '../components/DoctorList';

export default function DoctorListScreen({ navigation }) {
  const [doctors, setDoctors] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState([]); // guardamos filtro activo

  const fetchAll = async () => {
    try {
      const { data } = await getAllDoctors();
      setDoctors(data);
      // NO tocamos selectedFilter aquí (para no perder filtros)
    } catch (err) {
      console.error('Error obteniendo doctores:', err);
    }
  };

  // Cargar la primera vez y cada vez que volvemos,
  // pero SOLO si no hay un filtro activo
  useFocusEffect(
    useCallback(() => {
      if (selectedFilter.length === 0) {
        fetchAll();
      }
    }, [selectedFilter])
  );

  if (!doctors) {
    return (
      <View style={{marginTop:20}}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0077B6" testID="activity-indicator"/>
      </View>
      </View>
    );
  }

  return (
    <DoctorList
      navigation={navigation}
      doc={doctors}
      refreshDoctors={fetchAll}
      selectedFilter={selectedFilter}
      setDoctors={setDoctors}
      setSelectedFilter={setSelectedFilter}
    />

  );
}