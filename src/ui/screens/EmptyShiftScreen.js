import { Text, StyleSheet, View, TouchableOpacity, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import AppointmentCard from '../components/AppointmentCard';
import { getAppointments} from './appointmentApi';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function EmptyShiftScreen({ navigation }) {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      const token = await AsyncStorage.getItem("token"); // suponiendo que guardás el token así
      try {
        const data = await getAppointments(token);
        setAppointments(data);
      } catch (error) {
        console.error("Error cargando historial de turnos:", error);
      }
    };

    fetchAppointments();
  }, []);

  const renderItem = ({ item }) => (
    <AppointmentCard
      image={require('../images/doctora.png')}
      date={item.date}
      time={item.time}
      doctor={item.doctor}
      specialty={item.specialty}
    />
  );

  return (
    <View style={{ backgroundColor: 'white', marginTop: 120 }}>
      <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
        <Text style={styles.BluePrincipal}>Turnos Reservados</Text>
      </View>

      <View style={{ marginTop: 30, paddingHorizontal: 20 }}>
        {appointments.length === 0 ? (
          <Text style={{ color: '#888', marginTop: 20, fontSize: 15, textAlign: 'center' }}>
            No tienes turnos reservados
          </Text>
        ) : (
          <FlatList
            data={appointments}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        )}
      </View>

      <View style={{ marginTop: 0, paddingHorizontal: 30 }}>
        <TouchableOpacity
          style={[styles.ButtonProfesional, { backgroundColor: '#03045E' }]}
          onPress={() => navigation.navigate("ShiftType")}
        >
          <Text style={{ color: '#fff' }}>Reservar Turno</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  BluePrincipal: {
    fontSize: 30,
    fontWeight: 'bold',
    width: 400,
    height: 45,
    textAlign: 'left',
    color: '#03045E',
  },
  ButtonProfesional: {
    height: 50,
    borderRadius: 8,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});