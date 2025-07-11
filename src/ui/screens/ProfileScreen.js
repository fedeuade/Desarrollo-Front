import { Text, StyleSheet, View, TouchableOpacity, Image,Modal, TouchableWithoutFeedback } from 'react-native';
import React,{useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons'; // Asegurate de tener react-native-vector-icons instalado
import AsyncStorage from '@react-native-async-storage/async-storage';
import { deleteUser } from './userApi';

export default function ProfileScreen({ navigation }) {
  const goToLogin = () => {
    AsyncStorage.clear();
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });  };

  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleDelete = async () => {
      try {
        const token= await AsyncStorage.getItem('token')
        await deleteUser(token);
        await AsyncStorage.clear();
        goToLogin();
      } catch (error) {
        Alert.alert("Error", "No se pudo cancelar el turno");
      }
    };
  return (

    <View style={styles.container}>

     <Modal
      animationType="fade"
      transparent={true}
      visible={showLogoutModal}
      onRequestClose={() => {
        setShowLogoutModal(false);
        navigation.goBack(); 
      }}
    >
      <TouchableWithoutFeedback
        onPress={() => {
          setShowLogoutModal(false);
          navigation.navigate('Profile'); 
        }}
      >
        <View style={styles.modalOverlay}>
          <TouchableWithoutFeedback onPress={() => {}}>{/* evita que toque dentro del cuadro lo cierre */}
            <View style={styles.modalContainer}>
              <Text style={styles.modalTitle}>Cerrar sesión</Text>
              <Text style={styles.modalMessage}>¿Está seguro que desea cerrar sesión?</Text>

              <TouchableOpacity
                style={styles.modalButton}
                onPress={goToLogin}
              >
                <Text style={styles.modalButtonText}>Cerrar sesión</Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>

      <Modal
      animationType="fade"
      transparent={true}
      visible={showDeleteModal}
      onRequestClose={() => {
        setShowDeleteModal(false);
        navigation.goBack(); // 👉 también cerrás sesión si estás en una pantalla especial
      }}
    >
      <TouchableWithoutFeedback
        onPress={() => {
          setShowDeleteModal(false);
          navigation.navigate('Profile'); // 👉 volver atrás si toca afuera
        }}
      >
        <View style={styles.modalOverlay}>
          <TouchableWithoutFeedback onPress={() => {}}>{/* evita que toque dentro del cuadro lo cierre */}
            <View style={styles.modalContainer}>
              <Text style={styles.modalTitle}>Eliminar cuenta</Text>
              <Text style={styles.modalMessage}>¿Está seguro que desea Eliminar su cuenta?</Text>

              <TouchableOpacity
                style={styles.modalButton}
                onPress={handleDelete}
              >
                <Text style={styles.modalButtonText}>Eliminar cuenta</Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>


      <Text style={styles.title}>Mi Perfil</Text>

      {/* Sección Cuenta */}
      <Text style={styles.sectionTitle}>Cuenta</Text>

      <View style={styles.row}>
        <Icon name="person-circle-outline" size={50} color="#6c757d" />
        <Text style={styles.label}>Nombre usuario</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AccountInfo')}>
          <Text style={styles.arrow}>{'>'}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <Icon name="medkit-outline" size={50} color="#03045E" />
        <Text style={styles.label}>Obra Social</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Insurance")}>
          <View style={{alignItems:'right'}} >
          <Text style={styles.arrow}>{'>'}</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Sección Configuración */}
      <Text style={[styles.sectionTitle, { marginTop: 50 }]}>Configuración</Text>

     <View style={styles.row}>
      <Text style={styles.label}>Cerrar sesión</Text>
      <TouchableOpacity style={styles.button} onPress={() => setShowLogoutModal(true)}>
        <Text style={styles.arrow}>{'>'}</Text>
      </TouchableOpacity>
    </View>

      <View style={styles.row}>
        <Text style={styles.label}>Eliminar cuenta</Text>
        <TouchableOpacity style={styles.button}  onPress={() => setShowDeleteModal(true)}>
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
  modalOverlay: {
  flex: 1,
  backgroundColor: 'rgba(0,0,0,0.3)',
  justifyContent: 'center',
  alignItems: 'center',
},

modalContainer: {
  backgroundColor: '#fff',
  borderRadius: 16,
  padding: 24,
  width: '80%',
  alignItems: 'center',
  shadowColor: '#000',
  shadowOpacity: 0.2,
  shadowOffset: { width: 0, height: 4 },
  shadowRadius: 10,
  elevation: 5,
},

modalTitle: {
  fontSize: 20,
  fontWeight: 'bold',
  color: '#03045E',
  marginBottom: 10,
  textAlign: 'center',
},

modalMessage: {
  fontSize: 16,
  color: '#6C7080',
  textAlign: 'center',
  marginBottom: 20,
},

modalButton: {
  backgroundColor: '#EF5350', // rojo como el de tu imagen
  paddingVertical: 12,
  paddingHorizontal: 24,
  borderRadius: 12,
},

modalButtonText: {
  color: '#fff',
  fontWeight: '600',
  fontSize: 16,
},
});
