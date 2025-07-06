import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function AppointmentCard({ image, date, time, doctor, specialty }) {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('ShiftInfoScreen', {
      date,
      time,
      doctor,
      specialty,
      image
    }); // podés enviar los datos si los necesitás en la otra screen
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handlePress}>
      <View style={styles.row}>
        <View style={styles.imageContainer}>
          <Image source={image} style={styles.image} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{date}</Text>
          <Text style={styles.text}>{time}</Text>
          <Text style={styles.text}>{doctor}</Text>
          <Text style={styles.text}>{specialty}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: 10,
    marginHorizontal: 20,
    padding: 10,
    borderColor: '#E0E0E0',
    borderWidth: 1,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
  },
  row: {
    flexDirection: 'row',
  },
  imageContainer: {
    paddingHorizontal: 25,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    color: '#03045E',
    marginBottom: 4,
  },
});
