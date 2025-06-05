import { Text, StyleSheet, View, ViewComponent, TouchableOpacity, Image } from 'react-native'
import React, { Component } from 'react'
import TextInput1 from '../components/TextInput';
import ButtonPrincipal from '../components/ButtonPrincipal';
import doctora from '../images/doctora.png';
import AppointmentCard from '../components/AppointmentCard';
import { useRoute } from '@react-navigation/native';


export default function ShiftInfoScreen(props) {
  
  const route = useRoute();
  const { date, time, doctor, specialty,image } = route.params;

  return (
    <View style={{backgroundColor:'white',alignContent:'center', justifyContent:'center',flex:1,}}>
     <View style={{alignItems: 'center'}}>
      {/* <Image source={{ uri: image }} style={styles.image} /> */}
      <Image source={require('../images/doctora.png')} style={styles.image} />

      <Text style={styles.BluePrincipal}>{doctor}</Text>
      <Text style={styles.BluePrincipalSmall}>{specialty}</Text>

      <Text style={styles.BluePrincipalSmall}>{date}</Text>
      <Text style={styles.BluePrincipalSmall}>{time}</Text>
      <Text style={styles.BluePrincipalSmall}>Estado: Finalizado</Text>

    </View>
    <View style={{marginTop:60, paddingHorizontal:20}}>
       <View style={{marginTop:20,paddingHorizontal:30}}>
                <ButtonPrincipal text="Estudio"/>
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
    textAlign: 'center',
    color: '#03045E',
  },
  BluePrincipalSmall: {
    fontSize: 15,
    width: 350,
    height: 30,
    textAlign: 'center',
    color: '#03045E',
  },
   image: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center'

  },
     }
);

