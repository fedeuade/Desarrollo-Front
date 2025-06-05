import { Text, StyleSheet, View, ViewComponent, TouchableOpacity,Image } from 'react-native'
import React, { Component } from 'react'
import TextInput1 from '../components/TextInput';
import ButtonPrincipal from '../components/ButtonPrincipal';
import checkgreen from '../images/checkgreen.png';

export default function PasswordUpdateScreen(props) {
  
    const{navigation}=props;
    
       const goToLogin = () => {
            console.log("Navegando a Login");
            navigation.navigate("Login");
        };
    
      return (
        
        
        <View style={{backgroundColor:'white'}}>
       
          <View style={{marginTop: 130}}>

            <View style={{paddingHorizontal:100 }}>
                <Image source={require('../images/checkgreen.png')} style={{ width: 200, height: 200}} />
            </View>
        
          <Text style={styles.BluePrincipal}>Contraseña actualizada</Text>
          
          <View/>
    
          <Text style={{color:'#888',paddingHorizontal:42,marginTop:10,fontSize:15}}>Su contraseña ha sido cambiada exitosamente</Text>
         
              <View style={{marginTop:30,paddingHorizontal:30}}>
                          <TouchableOpacity
                                 style={[styles.ButtonProfesional, {backgroundColor: '#03045E'}]}
                                 onPress={goToLogin}>
                          
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
      },
       ButtonProfesional:{
          height: 50,
          borderRadius: 8,
          paddingHorizontal: 10,
          justifyContent: 'center',
          alignItems: 'center',
           
        },
         }
);