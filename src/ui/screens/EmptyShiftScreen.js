import { Text, StyleSheet, View, ViewComponent, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import TextInput1 from '../components/TextInput';
import ButtonPrincipal from '../components/ButtonPrincipal';



export default function EmptyShiftScreen(props) {
  
  const{navigation}=props;

   const goToLogin = () => {
        console.log("Navegando a Login");
        navigation.navigate("Login");
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
          <ButtonPrincipal text="Reservar turno"/>
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
     }
);

