import { Text, StyleSheet, View, ViewComponent, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import TextInput1 from '../components/TextInput';
import ButtonPrincipal from '../components/ButtonPrincipal';



export default function EmptyShiftScreen(props) {

  const{navigation}=props;

   const goToShiftType = () => {
        console.log("Navegando a reserva por tipo");
        navigation.navigate("ShhiftType");
    };

  return (
    <View style={{backgroundColor:'white', marginTop:120}}>
    
    <View style={{marginTop:40, paddingHorizontal:20}}>
        <Text style={styles.BluePrincipal}>Turnos Reservados</Text>
    </View>

      <View style={{marginTop: 90, alignItems: 'right' }}>

      
      <View/>

      <Text style={{color:'#888',paddingHorizontal:30,marginTop:10,fontSize:15, textAlign:'center'}}>No tienes turnos reservados</Text>
      
      <View style={{marginTop:80,paddingHorizontal:30}}>
             <TouchableOpacity
                    style={[styles.ButtonProfesional, {backgroundColor: '#03045E'}]}
                    onPress={() => navigation.navigate("ShiftType")} >
      
                < Text style={{ color: '#fff' }}>Reservar Turno</Text>
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

