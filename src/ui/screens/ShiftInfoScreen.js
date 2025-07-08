import { Text, StyleSheet, View, TouchableOpacity, Image, Alert } from 'react-native';
import React, { useState } from 'react';
import ButtonPrincipal from '../components/ButtonPrincipal';
import { useRoute } from '@react-navigation/native';
import { deleteAppointment, getResultImage } from './appointmentApi';
import { Buffer } from 'buffer';

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
    console.log("🔍 Buscando estudio para appointmentId:", appointmentId);

    const response = await getResultImage(appointmentId);

    console.log("✅ Respuesta recibida del backend:", response);

    const imageUri = `data:image/png;base64,${response.data.imageBase64}`;
    console.log("🖼 URI generada para imagen base64:", imageUri.substring(0, 100)); // mostramos solo el inicio

    setStudyImage(imageUri);

  } catch (error) {
    console.error("❌ Error obteniendo estudio:", error);

    if (error.response) {
      console.log("📩 Error response data:", error.response.data);
      console.log("📄 Status:", error.response.status);
    }

    Alert.alert('Error', 'No se pudo cargar la imagen del estudio.');
  }
};

  const handleCancel = async () => {
    try {
      console.log("Cancelando turno con ID:", appointmentId);
      await deleteAppointment({ id: appointmentId });
      navigation.goBack();
    } catch (error) {
      console.error('Error al cancelar turno:', error);
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

      {/* Mostrar imagen del estudio si existe */}
      {studyImage && (
        <View style={{ alignItems: 'center', marginTop: 30 }}>
          <Image source={{ uri: studyImage }} style={styles.studyImage} />
        </View>
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
  studyImage: {
    width: 250,
    height: 250,
    borderRadius: 10,
    resizeMode: 'contain',
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
});