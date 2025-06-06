import { Text, StyleSheet, View, ViewComponent, TouchableOpacity } from 'react-native'
import React, { useState, useEffect ,Component} from 'react';

import TextInput1 from '../components/TextInput';
import ButtonPrincipal from '../components/ButtonPrincipal';
import Deployed1 from '../components/Deployed';
import {
  getAllDoctors
 
} from './doctorApi';



export default function ReserveProfessionalScreen(props) {
  
  const{navigation}=props;
  const [doctor, setDoctor] = useState('');

   useEffect(() => {
       const fetchData = async () => {
         try {
           const response = await getAllDoctors();
           const formatted = response.data.map(
             (s) => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase()
           );
           setDoctor(formatted);
   
         } catch (error) {
           console.error('Error al obtener doctores:', error);
         }
       };
   
       fetchData();
     }, []);

  return (
    <View style={{backgroundColor:'white'}}>
     
      <View style={{marginTop: 130, alignItems: 'right' }}>

      <Text style={styles.BluePrincipal}>Reserve su turno</Text>
      
      <View/>

      <View style={{paddingHorizontal: 30 ,marginTop:20}}>
        <Deployed1
          placeholder="Doctor"
          options={['Dr. Carlos Martínez', 'Dra. Torres', 'Dr. Pedro Fernández', 'Dra. Lucía Pérez']}
        />      
        </View>

      <View style={{ paddingHorizontal: 30 ,marginTop:20}}>
          <Deployed1
          placeholder="Fecha"
          options={['2025-06-06','2025-06-9','2025-06-11', '2025-06-12', '2025-06-13', '2025-06-14']}

        /> 
      </View>

      <View style={{ paddingHorizontal: 30 ,marginTop:20}}>
          <Deployed1
          placeholder="Hora"
          options={['08:00:00', '09:00:00', '10:00:00', '16:00:00','17:00:00','18:00:00']}
        />
      </View>


        <View style={{marginTop:30,paddingHorizontal:30}}>
                <TouchableOpacity
                style={[styles.ButtonProfesional, { backgroundColor: '#03045E' }]}
                onPress={() => navigation.navigate('SuccessfulReservation')}
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
    paddingHorizontal:30,
  },
  ButtonProfesional:{
   height: 50,
   borderRadius: 8,
   paddingHorizontal: 10,
   justifyContent: 'center',
   alignItems: 'center',
           
        }  
     }
);

