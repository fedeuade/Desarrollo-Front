import React, { useState } from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default function SoloNumerosInput({ placeholder }) {
  const [value, setValue] = useState('');

  const handleChange = (text) => {
    const soloNumeros = text.replace(/[^0-9]/g, '');
    setValue(soloNumeros); 
  };

  return (
    <TextInput
      style={styles.Numerico}
      placeholder={placeholder}
      placeholderTextColor="#888"
      keyboardType="numeric"
      value={value}
      onChangeText={handleChange}
    />
  );
}

const styles = StyleSheet.create({
  Numerico: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    color: '#000',
    backgroundColor: '#F7F8F9',
  },
});
