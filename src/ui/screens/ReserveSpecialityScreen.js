import { Text, StyleSheet, View, ViewComponent, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import TextInput1 from '../components/TextInput';
import ButtonPrincipal from '../components/ButtonPrincipal';
import Deployed1 from '../components/Deployed';



export default function ReserveSpecialityScreen(props) {
  
  const{navigation}=props;

   const goToLogin = () => {
        console.log("Navegando a Login");
        navigation.navigate("Login");
    };

  return (
    <View style={{backgroundColor:'white'}}>
     
      <View style={{marginTop: 130, alignItems: 'right' }}>

      <Text style={styles.BluePrincipal}>Reserve su turno</Text>
      
      <View/>

      <View style={{paddingHorizontal: 30 ,marginTop:20}}>
        <Deployed1
          placeholder="Especialidad"
          options={['Cardiología', 'Dermatología', 'Pediatría', 'Neurología']}
        />      
        </View>

      <View style={{ paddingHorizontal: 30 ,marginTop:20}}>
          <Deployed1
          placeholder="Fecha"
          options={['13/05', '14/05', '15/05', '16/05']}
        /> 
      </View>

      <View style={{ paddingHorizontal: 30 ,marginTop:20}}>
          <Deployed1
          placeholder="Hora"
          options={['13:00', '14:00', '15:00', '16:00']}
        />
      </View>


        <View style={{marginTop:30,paddingHorizontal:30}}>
              <TouchableOpacity
                     style={[styles.ButtonProfesional, {backgroundColor: '#03045E'}]}
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

