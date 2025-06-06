import { Text, StyleSheet, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import React, { useState } from 'react';
import { registerUser } from './userApi'; // Importación correcta

export default function RegisterScreen(props) {
  const { navigation } = props;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');
  const [dni, setDni] = useState('');
  const [nombre, setNombre] = useState('');

  const goToLogin = () => {
    console.log("Navegando a Login");
    navigation.navigate("Login");
  };

  const handleRegister = async () => {
    if (!nombre || !email || !dni || !password || !confirmpassword) {
      Alert.alert("Error", "Todos los campos son obligatorios.");
      return;
    }

    if (password !== confirmpassword) {
      Alert.alert("Error", "Las contraseñas no coinciden.");
      return;
    }

    const data = {
      name: nombre,
      email: email,
      dni: dni,
      password: password,
      confirm_password: confirmpassword,
    };

    try {
      const response = await registerUser(data);
      console.log("Registro exitoso:", response);

      Alert.alert("Éxito", "Usuario registrado correctamente", [
        { text: "OK", onPress: () => navigation.navigate("Login") }
      ]);
    } catch (error) {
      console.error("Error al registrar:", error);
      Alert.alert("Error", error.response?.data?.message || "No se pudo registrar el usuario");
    }
  };

  return (
    <View style={{ backgroundColor: 'white' }}>
      <View style={{ marginTop: 130 }}>
        <Text style={styles.BluePrincipal}>¡Hola! Regístrate para comenzar</Text>

        <View style={{ paddingHorizontal: 30, marginTop: 40 }}>
          <TextInput
            style={styles.input}
            placeholder="Nombre"
            placeholderTextColor={'#888'}
            value={nombre}
            onChangeText={setNombre}
          />
        </View>

        <View style={{ paddingHorizontal: 30, marginTop: 15 }}>
          <TextInput
            style={styles.input}
            placeholder="Correo electrónico"
            placeholderTextColor={'#888'}
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={{ paddingHorizontal: 30, marginTop: 15 }}>
          <TextInput
            style={styles.input}
            placeholder="DNI"
            placeholderTextColor={'#888'}
            value={dni}
            keyboardType="numeric"
            onChangeText={(text) => {
              const numericText = text.replace(/[^0-9]/g, '');
              setDni(numericText);
            }}
          />
        </View>

        <View style={{ paddingHorizontal: 30, marginTop: 15 }}>
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            placeholderTextColor={'#888'}
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <View style={{ paddingHorizontal: 30, marginTop: 15 }}>
          <TextInput
            style={styles.input}
            placeholder="Confirmar contraseña"
            placeholderTextColor={'#888'}
            secureTextEntry
            value={confirmpassword}
            onChangeText={setConfirmpassword}
          />
        </View>

        <View style={{ marginTop: 20, paddingHorizontal: 30 }}>
          <TouchableOpacity
            onPress={handleRegister}
            style={styles.button}
          >
            <Text style={{ color: '#fff', fontWeight: 'bold' }}>Registrarse</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.loginRedirect}>
          <Text style={{ color: '#03045E', fontWeight: 'bold' }}>¿Ya tienes una cuenta?</Text>
          <TouchableOpacity onPress={goToLogin}>
            <Text style={{ color: '#0077B6', fontWeight: 'bold' }}> Iniciar sesión ahora</Text>
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
    width: '100%',
    height: 70,
    textAlign: 'center',
    color: '#03045E',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    color: '#000',
    backgroundColor: '#F7F8F9',
  },
  button: {
    height: 50,
    borderRadius: 8,
    backgroundColor: '#03045E',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginRedirect: {
    marginTop: 50,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  }
});