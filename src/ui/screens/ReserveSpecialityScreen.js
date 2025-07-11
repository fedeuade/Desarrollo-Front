import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Alert } from 'react-native';
import Deployed1 from '../components/Deployed';
import DateTimePicker from '@react-native-community/datetimepicker';

import {
  getSpecialties,
  getAvailableDates,
  getAvailableTimes,
  createAppointmentBySpecialty,
} from './appointmentApi';

import CalendarPicker from 'react-native-calendar-picker';
import Modal from 'react-native-modal';
import moment from 'moment'; 


export default function ReserveSpecialityScreen({ navigation }) {
  const [specialties, setSpecialties] = useState([]);
  const [availableDates, setAvailableDates] = useState([]);
  const [availableTimes, setAvailableTimes] = useState([]);
  const [selectedSpecialty, setSelectedSpecialty] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [calendarVisible, setCalendarVisible] = useState(false);
  const [hourModalVisible, setHourModalVisible] = useState(false);
 const hoursInDay = Array.from({ length: 11 }, (_, i) =>
  (i + 8).toString().padStart(2, '0') + ':00'
);
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

          />
        </View>

        <View style={{ paddingHorizontal: 30, marginTop: 20 }}>
                    <TouchableOpacity
              style={styles.inputButton}
              onPress={() => setCalendarVisible(true)}
            >
              <Text style={{ color: selectedDate ? '#000' : '#888' }}>
                {selectedDate ? moment(selectedDate).format('DD/MM/YYYY') : 'Seleccionar fecha'}
              </Text>
            </TouchableOpacity>

            <Modal isVisible={calendarVisible}>
              <View style={{ backgroundColor: 'white', padding: 5, borderRadius: 10, width:385 }}>
                <CalendarPicker
                  onDateChange={(date) => {
                    const formatted = moment(date).format('YYYY-MM-DD');
                    setSelectedDate(formatted);
                    setCalendarVisible(false);
                  }}
                  selectedStartDate={selectedDate}
                  todayBackgroundColor="#f2f2f2"
                  selectedDayColor="#03045E"
                  selectedDayTextColor="#fff"
                />
                <TouchableOpacity
                  style={{ marginTop: 10, alignSelf: 'center' }}
                  onPress={() => setCalendarVisible(false)}
                >
                  <Text style={{ color: '#03045E' }}>Cancelar</Text>
                </TouchableOpacity>
              </View>
            </Modal>
          </View>

       <View style={{ paddingHorizontal: 30, marginTop: 20 }}>
          <TouchableOpacity
            style={styles.inputButton}
            onPress={() => setHourModalVisible(true)}
          >
            <Text style={{ color: selectedTime ? '#000' : '#888' }}>
              {selectedTime ? selectedTime : 'Seleccionar hora'}
            </Text>
          </TouchableOpacity>

          <Modal visible={hourModalVisible} transparent animationType="slide">
            <View style={styles.modalOverlay}>
              <View style={styles.modalContainer}>
                <Text style={{ fontSize: 18, marginBottom: 10 }}>Seleccione una hora</Text>
                {hoursInDay.map((hour) => (
                  <TouchableOpacity
                    key={hour}
                    style={styles.hourOption}
                    onPress={() => {
                      setSelectedTime(hour);
                      setHourModalVisible(false);
                    }}
                  >
                    <Text style={{ fontSize: 16 }}>{hour}</Text>
                  </TouchableOpacity>
                ))}

                <TouchableOpacity onPress={() => setHourModalVisible(false)}>
                  <Text style={{ marginTop: 10, color: '#03045E' }}>Cancelar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
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
  inputButton: {
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 8,
  padding: 12,
  justifyContent: 'center',
  backgroundColor: '#fff',
},

modalOverlay: {
  flex: 1,
  backgroundColor: 'rgba(0,0,0,0.5)',
  justifyContent: 'center',
  alignItems: 'center',
},

modalContainer: {
  backgroundColor: '#fff',
  padding: 20,
  borderRadius: 10,
  width: '80%',
  maxHeight: '80%',
},

hourOption: {
  paddingVertical: 10,
  borderBottomWidth: 1,
  borderColor: '#eee',
}

});
