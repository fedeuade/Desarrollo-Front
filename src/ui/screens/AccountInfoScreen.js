import { Text, StyleSheet, View, TouchableOpacity, TextInput, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { editUser, getUser } from './userApi';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';



export default function AccountInfoScreen({ navigation }) {
  const [name, setName] = useState('');
  const [dni, setDni] = useState('');

 
   useFocusEffect(

  useCallback(() => {

    const fetchuser = async () => {

      const token = await AsyncStorage.getItem("token");

      try {

        const data = await getUser(token);
        console.log("Usuario recibido:", data.dni);

        setName(data.name);
        setDni(String(data.dni));

      } catch (error) {

      

      }

    };
 
    fetchuser();

  }, [])

);



 const handleUpdate = async () => {
        if (!dni || dni.trim() === '' ||!name || name.trim() ) {
        Alert.alert('Error', 'Los campos no pueden estar vacíos.');
        return; 
      }

      try {
        const token = await AsyncStorage.getItem("token");

        const data = { name: name, dni: dni };
        const response = await editUser(data, token);

        
        Alert.alert('Éxito', 'Datos actualizados correctamente');
      } catch (error) {
        console.error("Error confirmando cambios:", error);
        Alert.alert('Error', 'No se pudieron guardar los cambios.');
      }
    };
   
  



  return (
    <View style={styles.container}>
      {/* Botón atrás */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <View style={styles.backRect}>
          <Icon name="chevron-left" size={22} color="#03045E" />
        </View>
      </TouchableOpacity>

      {/* Título */}
      <Text style={styles.title}>Cuenta</Text>

      {/* Imagen de perfil */}
      <View style={styles.avatarContainer}>
        <Image
          source={require('../images/avatar.png')} // o cualquier ícono tuyo
          style={styles.avatar}
        />
      </View>

      {/* Campos de entrada */}
      <View style={styles.form}>
        <Text style={styles.label}>Nombre</Text>
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          value={name}
          onChangeText={setName}
        />

        

        <Text style={styles.label}>DNI</Text>
        <TextInput
          style={[styles.input, { color: '#03045E', fontWeight: '500' }]}
          value={dni}
          onChangeText={setDni}
        />

       
      </View>

      {/* Botón Confirmar */}
     <TouchableOpacity
          style={styles.button}
          onPress={async () => {
            await handleUpdate();
           navigation.navigate("Profile");;
          }}
        >
        <Text style={styles.buttonText}>Confirmar Cambios</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 60,
    paddingHorizontal: 24,
  },
  backButton: {
    position: 'absolute',
    top: 33,
    left: 16,
    zIndex: 10,
  },
  backRect: {
    width: 41,
    height: 41,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E8ECF4',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#03045E',
    marginTop: 16,
    marginBottom: 24,
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    resizeMode: 'contain',
  },
  form: {
    gap: 10,
  },
  label: {
    fontSize: 14,
    color: '#6C7080',
    marginBottom: 4,
  },
  input: {
    backgroundColor: '#F6F8FB',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E4E6EC',
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    marginBottom: 16,
    color: '#03045E',
  },
  button: {
    backgroundColor: '#03045E',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 32,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});