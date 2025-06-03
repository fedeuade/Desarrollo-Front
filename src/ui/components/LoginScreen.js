import React, { Component, useState } from 'react'
import {
  Text,
  View,
  Button,  
  StyleSheet,
  TextInput,
  TouchableOpacity,
  StatusBar,
  useColorScheme,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function LoginScreen(props){
    
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
      };
      const styles = StyleSheet.create({
        sectionContainer: {
          marginTop: 32,
          paddingHorizontal: 24,
        },
        sectionTitle: {
          fontSize: 24,
          fontWeight: '600',
        },
        sectionDescription: {
          marginTop: 8,
          fontSize: 18,
          fontWeight: '400',
        },
        highlight: {
            fontSize: 30,         // Tamaño según "Títulos 30"
            fontWeight: 'bold',   // Estilo común en títulos
            width: 260,
            height: 40,
            textAlign: 'center',
            color: '#03045E',        
        },
         alternativa: {
            fontSize: 15,         // Tamaño según "Títulos 30"
            fontWeight: 'bold',   // Estilo común en títulos
            width: 170,
            height: 50,
            textAlign: 'right',
            color: '#0077B6',        
        },
      
      });
      

    const safePadding = '5%';
    const [email,setEmail]=useState('');
    const[password,setPassword]=useState('');

    const{navigation}=props;
    
    const goToForgetPassword = () => {
        console.log("Navegando a ForgetPassword");
        navigation.navigate("ForgetPassword");
    };

    return (
         <View style={{
                 backgroundColor: isDarkMode ? Colors.black : Colors.white,
                 paddingHorizontal: safePadding,
                 paddingBottom: safePadding,
               }}>
           <View style={{marginTop: 130, alignItems: 'center' }}>
             <Text style={styles.highlight}>Ingresa a tu cuenta</Text>
           </View>
           <View style={{ marginTop: 30 }}>
             <TextInput
               style={{
                 height: 50,
                 borderColor: '#ccc',
                 borderWidth: 1,
                 borderRadius: 5,
                 paddingHorizontal: 10,
                 color: isDarkMode ? '#fff' : '#000',
                 backgroundColor: isDarkMode ? '#222' : '#F7F8F9',
               }}
               placeholder="Correo electrónico"
               placeholderTextColor={isDarkMode ? '#888' : '#888'}
               value={email}
               onChangeText={setEmail}
               keyboardType="email-address"
               autoCapitalize="none"
             />
           </View>
            <View style={{ marginTop: 15 }}>
             <TextInput
                 style={{
                   height: 50,
                   borderColor: '#ccc',
                   borderWidth: 1,
                   borderRadius: 5,
                   paddingHorizontal: 10,
                   color: isDarkMode ? '#fff' : '#000',
                   backgroundColor: isDarkMode ? '#222' : '#F7F8F9',
                 }}
                 placeholder="Contraseña"
                 placeholderTextColor={isDarkMode ? '#888' : '#888'}
                 value={password}
                 onChangeText={setPassword}
                 secureTextEntry={true}
                 />
            
           </View>
            <View style={{ marginTop: 30 }}>
               <TouchableOpacity
                   onPress={() => console.log('Iniciar sesion')}
                   style={{
                     height: 50,
                     borderColor: '#ccc',
                     borderWidth: 1,
                     borderRadius: 8,
                     paddingHorizontal: 10,
                     backgroundColor: isDarkMode ? '#03045E' : '#03045E',
                     justifyContent: 'center',
                     alignItems: 'center',
     
                   }}
                 >
                   <Text style={{ color: isDarkMode ? '#fff' : '#fff' }}>Iniciar sesion</Text>
           </TouchableOpacity>
     
           <View style={{marginTop: 10,paddingHorizontal:180}}>
                <TouchableOpacity
                 onPress={goToForgetPassword}                 
                style={{
                     height: 20,
                     width:200,
                     borderColor: '#FFF',
                     borderWidth: 1,
                     borderRadius: 8,
                     paddingHorizontal: 10,
                     backgroundColor: isDarkMode ? '#FFFF' : '#FFFF',
                     justifyContent: 'center',
                     alignItems: 'center',
     
                   }}
                 >
                   <Text style={{ color: isDarkMode ? '#0077B6' : '#0077B6' , fontWeight: 'bold',}}>Olvidaste tu contraseña?</Text>
           </TouchableOpacity>
     
     
                 
           </View>
           <View style={{marginTop: 320,alignItems: 'center', flexDirection: 'row',   justifyContent: 'center'}}>     
           <Text style={{ color: isDarkMode ? '#fff' : '#03045E', fontWeight: 'bold'}}>No tenes cuenta?</Text>
            <TouchableOpacity
                   onPress={() => console.log('Registrate ahora')}
                   style={{
                     height: 20,
                     width:115,
                     borderColor: '#FFF',
                     borderWidth: 1,
                     borderRadius: 8,
                     backgroundColor: isDarkMode ? '#FFFF' : '#FFFF',
                     justifyContent: 'center',
                     alignItems: 'center',
     
                   }}
                 >
                   <Text style={{ color: isDarkMode ? '#0077B6' : '#0077B6' , fontWeight: 'bold',}}>Registrate ahora</Text>
           </TouchableOpacity>
           </View>
     
           </View>
           <StatusBar
             barStyle={isDarkMode ? 'light-content' : 'dark-content'}
             backgroundColor={backgroundStyle.backgroundColor}
           />
             <View style={{paddingRight: safePadding}}>
             </View>
            
         </View>
       );

       
     }

