import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Alert } from 'react-native';
import Deployed1 from '../components/Deployed';
import {
  getSpecialties,
  getAvailableDates,
  getAvailableTimes,
  createAppointmentBySpecialty,
} from './appointmentApi';

export default function ReserveSpecialityScreen({ navigation }) {
  const [specialties, setSpecialties] = useState([]);
  const [availableDates, setAvailableDates] = useState([]);
  const [availableTimes, setAvailableTimes] = useState([]);
  const [selectedSpecialty, setSelectedSpecialty] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getSpecialties();
        const formatted = response.data.map(
          (s) => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase()
        );
        setSpecialties(formatted);

        const response2 = await getAvailableDates();
        setAvailableDates(response2.data);

        const response3 = await getAvailableTimes();
        setAvailableTimes(response3.data);
      } catch (error) {
        console.error('Error al obtener especialidades:', error);
      }
    };

    fetchData();
  }, []);

  const handleSpecialtySelect = (specialty) => {
    setSelectedSpecialty(specialty);
 
    // Opcional: actualizar fechas y horas disponibles si quieres
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    // Opcional: actualizar horas disponibles si quieres
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handleReserve = async () => {
    // Debug: logueamos para ver qué valores tienen los estados
    console.log('selectedSpecialty:', selectedSpecialty);
    console.log('selectedDate:', selectedDate);
    console.log('selectedTime:', selectedTime);

       const appointmentRequest = {
        date: selectedDate,
        time: selectedTime,
      };
    

    try {
    await createAppointmentBySpecialty(selectedSpecialty, appointmentRequest);
    Alert.alert(
      'Éxito',
      'Turno reservado correctamente',
      [
        { text: 'OK', onPress: () => navigation.navigate('SuccessfulReservation') }
      ]
    );
  } catch (error) {
    console.error('Error al reservar turno:', error);
    Alert.alert('Error', 'No se pudo reservar el turno');
  }
};

  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <View style={{ marginTop: 130 }}>
        <Text style={styles.BluePrincipal}>Reserve su turno</Text>

        <View style={{ paddingHorizontal: 30, marginTop: 20 }}>
          <Deployed1
            placeholder="Especialidad"
            options={specialties}
            onSelect={handleSpecialtySelect}
            selected={selectedSpecialty}
            value={setSelectedSpecialty}

          />
        </View>

        <View style={{ paddingHorizontal: 30, marginTop: 20 }}>
          <Deployed1
            placeholder="Fecha"
            options={availableDates}
            onSelect={handleDateSelect}
            selected={selectedDate}
            value={selectedDate}
          />
        </View>

        <View style={{ paddingHorizontal: 30, marginTop: 20 }}>
          <Deployed1
            placeholder="Hora"
            options={availableTimes}
            onSelect={handleTimeSelect}
            selected={selectedTime}
            value={setSelectedTime}

          />
        </View>

        <View style={{ marginTop: 30, paddingHorizontal: 30 }}>
          <TouchableOpacity
            style={[styles.ButtonProfesional, { backgroundColor: '#03045E' }]}
            onPress={handleReserve}
          >
            <Text style={{ color: '#fff' }}>Reservar Turno</Text>
          </TouchableOpacity>
        </View>
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
    paddingHorizontal: 30,
  },
  ButtonProfesional: {
    height: 50,
    borderRadius: 8,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
