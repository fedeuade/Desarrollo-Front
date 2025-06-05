import { Text, StyleSheet, View, ViewComponent, TouchableOpacity, TextInput } from 'react-native'
import React, { Component } from 'react'
import TextInput1 from '../components/TextInput';
import ButtonPrincipal from '../components/ButtonPrincipal';
import OnlyNumbers from   '../components/OnlyNumbers';


export default function RegisterScreen(props) {
  
  const{navigation}=props;

   const goToLogin = () => {
        console.log("Navegando a Login");
        navigation.navigate("Login");
    };

    const handleChange = (text) => {
    // Solo permitir números
    const numericText = text.replace(/[^0-9]/g, '');
    setValue(numericText);
    };

  return (
    <View style={{backgroundColor:'white'}}>
     
      <View style={{marginTop: 130, alignItems: 'right' }}>

      <Text style={styles.BluePrincipal}>¡Hola! Regístrate para comenzar</Text>
      
      <View/>

      <View style={{ paddingHorizontal: 30 ,marginTop:40}}>
        <TextInput1 placeholder="Nombre" />
      </View>

      <View style={{ paddingHorizontal: 30 ,marginTop:15}}>
        <TextInput1 placeholder="Correo electrónico" />
      </View>

      <View style={{ paddingHorizontal: 30 ,marginTop:15}}>
        <OnlyNumbers style={styles.Numerico} placeholder="Documento de identidad" />
      </View>

      <View style={{ paddingHorizontal: 30 ,marginTop:15}}>
      
              <TextInput
              style={{
                height: 50,
                borderColor: '#ccc',
                borderWidth: 1,
                borderRadius: 5,
                paddingHorizontal: 10,
                color: '#000',
                backgroundColor: '#F7F8F9',
      
              }}
              placeholder="Contraseña"
              placeholderTextColor={'#888'}
              secureTextEntry={true}

            />
          </View>

      <View style={{ paddingHorizontal: 30 ,marginTop:15}}>
      
              <TextInput
              style={{
                height: 50,
                borderColor: '#ccc',
                borderWidth: 1,
                borderRadius: 5,
                paddingHorizontal: 10,
                color: '#000',
                backgroundColor: '#F7F8F9',
      
              }}
              placeholder="Confirmar contraseña"
              placeholderTextColor={'#888'}
              secureTextEntry={true}

            />
          </View>

        <View style={{marginTop:20,paddingHorizontal:30}}>
          <ButtonPrincipal text="Registrarme"/>
        </View>

        <View style={{marginTop: 50,alignItems: 'center', flexDirection: 'row', paddingHorizontal:75}}>     
                   <Text style={{ color: '#03045E', fontWeight: 'bold'}}>¿Ya tienes una cuenta?</Text>
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
                                                paddingHorizontal: 5,
                                                backgroundColor: '#FFFF',
                                
                                              }}
                                            >
                                              <Text style={{ color: '#0077B6' , fontWeight: 'bold',}}>Iniciar sesion ahora</Text>
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
    height: 70,
    textAlign: 'center',
    color: '#03045E',
  },
     Numerico:{
          height: 50,
          borderColor: '#ccc',
          borderWidth: 1,
          borderRadius: 5,
          paddingHorizontal: 10,
          color: '#000',
          backgroundColor: '#F7F8F9',
        }
      
      }
);

