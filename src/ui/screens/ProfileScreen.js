import { Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons'; // Asegurate de tener react-native-vector-icons instalado

export default function ProfileScreen({ navigation }) {
  const goToLogin = () => {
    navigation.navigate("Login");
  };

  return (

    <View style={styles.container}>
      <Text style={styles.title}>Mi Perfil</Text>

      {/* Sección Cuenta */}
      <Text style={styles.sectionTitle}>Cuenta</Text>

      <View style={styles.row}>
        <Icon name="person-circle-outline" size={50} color="#6c757d" />
        <Text style={styles.label}>Nombre usuario</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.arrow}>{'>'}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <Icon name="medkit-outline" size={50} color="#03045E" />
        <Text style={styles.label}>Obra Social</Text>
        <TouchableOpacity style={styles.button}>
          <View style={{alignItems:'right'}}>
          <Text style={styles.arrow}>{'>'}</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Sección Configuración */}
      <Text style={[styles.sectionTitle, { marginTop: 50 }]}>Configuración</Text>

      <View style={styles.row}>
        <Text style={styles.label}>Cerrar sesión</Text>
        <TouchableOpacity style={styles.button} onPress={goToLogin}>
          <Text style={styles.arrow}>{'>'}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Eliminar cuenta</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.arrow}>{'>'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 100,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#03045E',
    marginBottom: 20,
    paddingBottom: 10,
  },
  sectionTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#03045E',
    marginTop: 20,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  label: {
    paddingHorizontal:20,
    fontSize: 20,
    color: '#03045E',
    marginLeft: 10,
  },
  button: {
    backgroundColor: '#F8F9FA',
    padding: 8,
    borderRadius: 10,
    elevation: 3,
  },
  arrow: {
    fontSize: 25,
    color: '#03045E',
  },
});
