import { Text, StyleSheet, View, ViewComponent, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import TextInput1 from '../components/TextInput';
import ButtonPrincipal from '../components/ButtonPrincipal';
import { changePassword } from './userApi';
import { useRoute } from '@react-navigation/native';
import { Alert } from 'react-native';
import { useState } from 'react';

export default function CreateNewPasswordScreen(props) {
  
    const{navigation}=props;
    
    const route = useRoute();
    const { email} = route.params;
    

       const goToLogin = () => {
            console.log("Navegando a Login");
            navigation.navigate("Login");
        };


        const [password, setPassword] = useState('');
        const [confirm_password, setConfirm_password] = useState('');

            
              const handleUpdate = async () => {
                    if (!password || password.trim() === '' ) {
                    Alert.alert('Error', 'Los campos no pueden estar vacíos.');
                    return; 
                  }
            
              
                  try {
                    const data={password:password,email:email,confirm_password:confirm_password}
                    const response = await changePassword(data);

                    navigation.navigate("Login")            
                    Alert.alert('Éxito', 'Contraseña cambiada con exito');
                  } catch (error) {
                    Alert.alert('Error', 'Codigo invalido.');
                  }
                };
    
      return (
        <View style={{backgroundColor:'white'}}>
         
          <View style={{marginTop: 130}}>

          <Text style={styles.BluePrincipal}>Crear nueva contraseña </Text>
          
          <View/>
    
          <Text style={{color:'#888',paddingHorizontal:30,marginTop:10,fontSize:15}}>Su nueva contraseña debe ser única respecto a las utilizadas anteriormente</Text>
          <View style={{ paddingHorizontal: 30 ,marginTop:20}}>
            <TextInput1 placeholder="Nueva contraseña" onChangeText={setPassword} value={password}/>
          </View>
           <View style={{ paddingHorizontal: 30 ,marginTop:20}}>
            <TextInput1 placeholder="Confirma nueva contraseña"  onChangeText={setConfirm_password} value={confirm_password}/>
          </View>
            <View style={{ marginTop: 30, paddingHorizontal: 30 }}>
                <ButtonPrincipal 
                   text="Confirmar" 
                    onPress={handleUpdate} 
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