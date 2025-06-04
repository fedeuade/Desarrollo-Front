import { Text, StyleSheet, View, ViewComponent, TouchableOpacity, Image } from 'react-native'
import React, { Component } from 'react'
import TextInput1 from '../components/TextInput';
import ButtonPrincipal from '../components/ButtonPrincipal';
import doctora from '../images/doctora.png';
import AppointmentCard from '../components/AppointmentCard';


export default function ShiftInfoScreen(props) {
  
  

  return (
    <View style={{backgroundColor:'white'}}>
    
    <View style={{marginTop:100, paddingHorizontal:20}}>
        <Text style={styles.BluePrincipal}>Msssi </Text>
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
  BluePrincipalSmall: {
    fontSize: 20,
    fontWeight: 'bold',
    width: 350,
    height: 30,
    textAlign: 'left',
    color: '#03045E',
  },
     }
);

