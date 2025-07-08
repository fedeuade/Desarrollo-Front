import React, { useState, useCallback, useEffect, Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getInsurance, uploadInsurance, getCompanies } from '../screens/userApi';
import Deployed1 from '../components/Deployed'; // Asegurate de que el path sea correcto

export default function InsuranceScreen(props) {

  const [company, setCompany] = useState('');
  const [affiliateNumber, setAffiliateNumber] = useState('');
  const [companiesList, setCompaniesList] = useState([]);
  const{navigation}=props;


  // 📥 Traer lista de compañías al cargar pantalla
  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        const response = await getCompanies(token);
        setCompaniesList(response);
      } catch (e) {
        console.error('Error al obtener compañías:', e);
      }
    };

    fetchCompanies();
    fetchInsurance(); // 👈 Ejecutar también al montar el componente
  }, []);

  // 🔄 Traer info actual del usuario (cuando vuelve a foco)
  useFocusEffect(
    useCallback(() => {
      fetchInsurance(); // 👈 Reutilizar función
    }, [])
  );

  // ✅ Función reutilizable para cargar datos del usuario
  const fetchInsurance = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      if (!token) return;
      const data = await getInsurance(token);
      setCompany(data.company ?? '');
      setAffiliateNumber(data.affiliateNumber ?? '');
    } catch (e) {
      console.error('Error al obtener insurance:', e);
    }
  };

  // 📤 Subir nueva info
  const handleUpdate = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      const body = { company, affiliateNumber };
      await uploadInsurance(body, token);
      navigation.goBack();
    } catch (e) {
      console.error('Error subiendo insurance:', e);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
    >
      {/* Botón atrás */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <View style={styles.backRect}>
          <Icon name="chevron-left" size={22} color="#03045E" />
        </View>
      </TouchableOpacity>

      {/* Contenido */}
      <View style={styles.content}>
        <Text style={styles.title}>
          Ingresá tu obra social y{'\n'}número de afiliado
        </Text>

        {/* 🔽 Obra Social con dropdown */}
        
        <Deployed1
            placeholder="Obra Social"
            options={companiesList}
            onSelect={(value) => setCompany(value)}
            selected={company}
          />
        

        <TextInput
          style={styles.input}
          placeholder="Número de Socio"
          placeholderTextColor="#6C7080"
          value={affiliateNumber}
          onChangeText={setAffiliateNumber}
          keyboardType="numeric"
        />

        <TouchableOpacity style={styles.updateButton} onPress={handleUpdate}>
          <Text style={styles.updateButtonText}>Actualizar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },

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
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#03045E',
    marginBottom: 28,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#F6F8FB',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E4E6EC',
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    marginTop: 16,
    color: '#03045E',
  },
  updateButton: {
    backgroundColor: '#03045E',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 24,
  },
  updateButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});