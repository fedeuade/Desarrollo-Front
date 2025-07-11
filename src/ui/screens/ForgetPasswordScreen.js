import { Text, StyleSheet, View, ViewComponent, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import TextInput1 from '../components/TextInput';
import ButtonPrincipal from '../components/ButtonPrincipal';
import { useState } from 'react';
import { requestCode } from './userApi';
import { Alert } from 'react-native';

export default function ForgetPasswordScreen(props) {
  
  const{navigation}=props;

  const [email, setEmail] = useState('');


  const handleUpdate = async () => {
        if (!email || email.trim() === '' ) {
        Alert.alert('Error', 'Los campos no pueden estar vacíos.');
        return; 
      }

      try {

        const response = await requestCode(email);

        navigation.navigate("EnterCode",{email})
        Alert.alert('Éxito', 'Codigo enviado');
      } catch (error) {
        console.error("Error confirmando cambios:", error);
        Alert.alert('Error', 'Email invalido.');
      }
    };
   

   const goToLogin = () => {
        console.log("Navegando a Login");
        navigation.navigate("Login");
    };

    

  return (
    <View style={{backgroundColor:'white'}}>
     
      <View style={{marginTop: 130, alignItems: 'right' }}>

      <Text style={styles.BluePrincipal}>¿Olvidaste tu contraseña?</Text>
      
      <View/>

      <Text style={{color:'#888',paddingHorizontal:30,marginTop:10,fontSize:15}}>No te preocupes! Inserte su correo electronico para recuperar su contraseña</Text>
      <View style={{ paddingHorizontal: 30 ,marginTop:20}}>
        <TextInput1 placeholder="Correo electrónico" onChangeText={setEmail} value={email}/>
      </View>
      <View style={{ marginTop: 30, paddingHorizontal: 30 }}>
          <ButtonPrincipal 
            text="Enviar código" 
            onPress={handleUpdate} 
          />
        </View>

        <View style={{marginTop: 320,alignItems: 'center', flexDirection: 'row', paddingHorizontal:75}}>     
                   <Text style={{ color: '#03045E', fontWeight: 'bold'}}>Recuerda su contraseña?</Text>
                    <TouchableOpacity
                           onPress={() => console.log('Iniciar sesion')}
                           style={{
                             height: 20,
                             width:200,
                             borderColor: '#FFF',
                             borderWidth: 1,
                             borderRadius: 8,
                             backgroundColor: '#FFFF',
                             justifyContent: 'center',
                             alignItems: 'center',
             
                           }}
                         >
                            <TouchableOpacity
                                            onPress={goToLogin}                 
                                           style={{
                                                height: 20,
                                                width:200,
                                                borderColor: '#FFF',
                                                borderWidth: 1,
                                                borderRadius: 8,
                                                paddingHorizontal: 10,
                                                backgroundColor: '#FFFF',
                                
                                              }}
                                            >
                                              <Text style={{ color: '#0077B6' , fontWeight: 'bold',}}>Iniciar sesion</Text>
                                      </TouchableOpacity>
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
     }
);

