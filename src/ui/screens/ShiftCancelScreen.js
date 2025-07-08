import { Text, StyleSheet, View, ViewComponent, TouchableOpacity,Image } from 'react-native'
import React, { Component } from 'react'
import TextInput1 from '../components/TextInput';
import ButtonPrincipal from '../components/ButtonPrincipal';
import cancel from '../images/cancel.png';



export default function ShiftCancelScreen(props) {
  
  const{navigation}=props;

   const goToShiftType = () => {
        console.log("Navegando a Login");
        navigation.navigate("EmptyShift");
    };

  return (
    <View style={{backgroundColor:'white', alignItems:'center',marginTop:120}}>
      
      <Image source={require('../images/cancel.png')} style={[styles.image, { marginTop: 120, alignItems:'center' }]} />

      <View style={{marginTop: 10, alignItems: 'right' }}>

      <Text style={styles.BluePrincipal}>Turno cancelado!</Text>
      
      <View/>

     
      <Text style={{color:'#888',paddingHorizontal:30,fontSize:15, textAlign:'center',marginTop:10}}>Su turno ha sido cancelado exitosamente</Text>


        <View style={{marginTop:30,paddingHorizontal:30}}>
              <TouchableOpacity
                     style={[styles.ButtonProfesional, {backgroundColor: '#03045E'}]}
                     onPress={goToShiftType}>
              
                 <Text style={{ color: '#fff' }}>Volver al Inicio</Text>
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
    textAlign: 'center',
    color: '#03045E',
    paddingHorizontal:30,
  },
  ButtonProfesional:{
   height: 50,
   borderRadius: 8,
   paddingHorizontal: 10,
   justifyContent: 'center',
   alignItems: 'center',
           
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

