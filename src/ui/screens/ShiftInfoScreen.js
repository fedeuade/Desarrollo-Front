import { Text, StyleSheet, View, TouchableOpacity, Image, Alert } from 'react-native';
import React, { useState } from 'react';
import ButtonPrincipal from '../components/ButtonPrincipal';
import { useRoute } from '@react-navigation/native';
import { deleteAppointment, getResultImage } from './appointmentApi';

export default function ShiftInfoScreen(props) {
  const route = useRoute();
  const { date, time, doctor, specialty, image, appointmentId } = route.params;
  const { navigation } = props;

  const [studyImage, setStudyImage] = useState(null);

  const turnoDate = new Date(date);
  const now = new Date();
  const turnoEsFuturo = turnoDate.setHours(0, 0, 0, 0) >= now.setHours(0, 0, 0, 0);

  const handleShowStudy = async () => {
    try {

      const response = await getResultImage(appointmentId);

      const imageUri = `data:image/png;base64,${response.data}`;

      setStudyImage(imageUri);
    } catch (error) {

    

      Alert.alert('Error', 'No se pudo cargar la imagen del estudio.');
    }
  };

  const handleCancel = async () => {
    try {
      await deleteAppointment({ id: appointmentId });
      navigation.goBack();
    } catch (error) {
      Alert.alert("Error", "No se pudo cancelar el turno");
    }
  };

  return (
    <View style={{ backgroundColor: 'white', flex: 1, justifyContent: 'center' }}>
      <View style={{ alignItems: 'center' }}>
        <Image source={image ? image : require('../images/doctora.png')} style={styles.image} />
        <Text style={styles.BluePrincipal}>{doctor}</Text>
        <Text style={styles.BluePrincipalSmall}>{specialty}</Text>
        <Text style={styles.BluePrincipalSmall}>{date}</Text>
        <Text style={styles.BluePrincipalSmall}>{time}</Text>
      </View>

      <View style={{ marginTop: 60, paddingHorizontal: 20 }}>
        <View style={{ marginTop: 20, paddingHorizontal: 30 }}>
          <ButtonPrincipal text="Estudio" onPress={handleShowStudy} />
        </View>
      </View>

      {/* Mostrar imagen del estudio en pantalla completa */}
      {studyImage && (
          <TouchableOpacity
            style={styles.fullscreenOverlay}
            onPress={() => setStudyImage(null)}
          >
            <Image
              source={{ uri: studyImage }}
              style={styles.fullscreenImage}
              testID="fullscreen-image" // 👉 este es el identificador que usa el test
            />
          </TouchableOpacity>
        )}

      {turnoEsFuturo && (
        <View style={{ marginTop: 30, paddingHorizontal: 50 }}>
          <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
            <Text style={styles.cancelButtonText}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      )}
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
  BluePrincipalSmall: {
    fontSize: 15,
    width: 350,
    height: 30,
    textAlign: 'center',
    color: '#03045E',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 20,
  },
  cancelButton: {
    backgroundColor: '#FF4D4D',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  fullscreenOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  fullscreenImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});