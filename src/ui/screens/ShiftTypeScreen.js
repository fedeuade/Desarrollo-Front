import { Text, StyleSheet, View, ViewComponent, TouchableOpacity,Image } from 'react-native'
import React, { Component } from 'react'
import TextInput1 from '../components/TextInput';
import ButtonPrincipal from '../components/ButtonPrincipal';



export default function EmptyShiftScreen(props) {
  

  const{navigation}=props;

   const goToReserveSpeciality = () => {
        console.log("Navegando a Reserva de tipo especialidad");
        navigation.navigate("ReserveSpeciality");
    };

     const goToReserveProfessional = () => {
        console.log("Navegando a Reserva de tipo Profesional");
        navigation.navigate("ReserveProfessional");
    };


  return (
    <View style={{backgroundColor:'white', marginTop:80,alignItems:'center'}}>
    
    <View style={{marginTop:40, paddingHorizontal:20}}>
        <Text style={styles.BluePrincipal}> Buscar turno por</Text>
    </View>

      <View style={{marginTop: 20,paddingHorizontal:20}}>
            <Image
          source={require('../images/medico.png')}
          style={styles.image}
          testID="shift-image"
        />
      <View/>

      <Text style={{color:'#888',paddingHorizontal:30,fontSize:15, textAlign:'center'}}>Seleccion cómo quieres buscar tu turno medico</Text>

      
    <View style={{marginTop:10,paddingHorizontal:30}}>
       <TouchableOpacity
              style={[styles.ButtonProfesional, {backgroundColor: '#03045E'}]}
              onPress={goToReserveSpeciality}  >

          < Text style={{ color: '#fff' }}>Especialidad</Text>
      </TouchableOpacity>
      </View>

        <View style={{marginTop:10,paddingHorizontal:30}}>
                <TouchableOpacity style={[styles.ButtonProfesional, {backgroundColor: '#0077B6'}]}
                              onPress={goToReserveProfessional} >

                 <Text style={{ color: '#fff' }}>Profesional</Text>
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
  },
   image: {
    width: 300,
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center'

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

