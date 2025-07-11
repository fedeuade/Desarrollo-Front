import { Text, StyleSheet, View, ViewComponent, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import TextInput1 from '../components/TextInput';
import ButtonPrincipal from '../components/ButtonPrincipal';
import { useState} from 'react';
import { Alert} from 'react-native';
import { validateCode } from './userApi';
import { useRoute } from '@react-navigation/native';
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  '',
]);

export default function EnterCodeScreen(props) {
  
    const{navigation}=props;
    const route = useRoute();
    const { email} = route.params;

    const [code, setCode] = useState('');
    
    
      const handleUpdate = async () => {
            if (!code || code.trim() === '' ) {
            Alert.alert('Error', 'Los campos no pueden estar vacíos.');
            return; 
          }
    
      
          try {
            const data={email:email,code:code}
            const response = await validateCode(data);
    
            navigation.navigate("CreateNewPassword",{email})            
            Alert.alert('Éxito', 'Codigo correcto');
          } catch (error) {
            Alert.alert('Error', 'Codigo invalido.');
          }
        };

       const goToLogin = () => {
            console.log("Navegando a Login");
            navigation.navigate("Login");
        };
    
      return (
        <View style={{backgroundColor:'white'}}>
         
          <View style={{marginTop: 130}}>

          <Text style={styles.BluePrincipal}>Ingresá el codigo</Text>
          
          <View/>
    
          <Text style={{color:'#888',paddingHorizontal:30,marginTop:10,fontSize:15}}>Te hemos enviado el código a tu correo electrónico. Ingréselo para poder reestablecer su contraseña</Text>
          <View style={{ paddingHorizontal: 30 ,marginTop:20}}>
            <TextInput1 placeholder="Código" onChangeText={setCode} value={code}/>
          </View>
           
           <View style={{ marginTop: 30, paddingHorizontal: 30 }}>
              <ButtonPrincipal 
                text="Confirmar" 
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