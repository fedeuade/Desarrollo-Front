import { Text, StyleSheet, View, ViewComponent, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import TextInput1 from '../components/TextInput';
import ButtonPrincipal from '../components/ButtonPrincipal';

export default function CreateNewPasswordScreen(props) {
  
    const{navigation}=props;
    
       const goToLogin = () => {
            console.log("Navegando a Login");
            navigation.navigate("Login");
        };
    
      return (
        <View style={{backgroundColor:'white'}}>
         
          <View style={{marginTop: 130}}>

          <Text style={styles.BluePrincipal}>Crear nueva contraseña </Text>
          
          <View/>
    
          <Text style={{color:'#888',paddingHorizontal:30,marginTop:10,fontSize:15}}>Su nueva contraseña debe ser única respecto a las utilizadas anteriormente</Text>
          <View style={{ paddingHorizontal: 30 ,marginTop:20}}>
            <TextInput1 placeholder="Nueva contraseña" />
          </View>
           <View style={{ paddingHorizontal: 30 ,marginTop:20}}>
            <TextInput1 placeholder="Confirma nueva contraseña" />
          </View>
            <View style={{ marginTop: 30, paddingHorizontal: 30 }}>
                <ButtonPrincipal 
                   text="Confirmar" 
                    onPress={() => navigation.navigate("PasswordUpdate")} 
                      />
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
         }
);