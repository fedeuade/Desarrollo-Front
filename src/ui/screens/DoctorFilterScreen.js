import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { filterDoctors } from './doctorApi';
import { getSpecialties } from './appointmentApi';

export default function DoctorFilterScreen({ navigation, route }) {
  const [selected, setSelected] = useState(route.params?.selected ?? []);
  const [specialties, setSpecialties] = useState([]);

  useEffect(() => {
    if (route.params?.selected) {
      setSelected(route.params.selected);
    }
  }, [route.params?.selected]);

  useEffect(() => {
    const fetchSpecialties = async () => {
      try {
        const { data } = await getSpecialties();
        setSpecialties(data);
      } catch (err) {
        console.error('Error al obtener especialidades:', err);
      }
    };
    fetchSpecialties();
  }, []);

  const toggle = (spec) => {
    setSelected((prev) => (prev.includes(spec) ? [] : [spec]));
  };

  const handleFilter = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      const body = {
        specialty: selected[0],
        companies: [],
      };
      const { data } = await filterDoctors(body, token);

      route.params.onFilter(data, selected);
      navigation.goBack();
    } catch (e) {
      console.error('Error filtrando', e);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.wrapper}>
      {/* Botón atrás */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <View style={styles.backRect}>
          <Text style={styles.backArrow}>{'<'}</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.card}>
        <Text style={styles.title}>Especialidades:</Text>

        <View style={styles.badgeContainer}>
          {specialties.map((spec) => {
            const active = selected.includes(spec);
            return (
              <TouchableOpacity
                key={spec}
                style={[styles.badge, active && styles.badgeActive]}
                onPress={() => toggle(spec)}
              >
                <Text style={[styles.badgeText, active && styles.badgeTextActive]}>
                  {spec}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <TouchableOpacity
          style={[styles.button, selected.length > 0 && styles.buttonEnabled]}
          onPress={handleFilter}
          disabled={!selected.length}
        >
          <Text style={styles.buttonText}>Filtrar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 24,
    backgroundColor: '#fff',
    flexGrow: 1,
    paddingTop: 100,
  },
  backButton: {
    position: 'absolute',
    top: 43,
    left: 16,
    zIndex: 10,
  },
  backRect: {
    backgroundColor: '#F8F9FA',
    padding: 8,
    borderRadius: 10,
    elevation: 3,
  },
  backArrow: {
    color: '#03045E',
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    lineHeight: 20,
    includeFontPadding: false, // mejora el centrado vertical en Android
    paddingTop: 1, // pequeño ajuste fino
  },
  card: {
    backgroundColor: '#F6F8FB',
    borderRadius: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: '#E4E6EC',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#03045E',
    marginBottom: 8,
  },
  badgeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginTop: 16,
  },
  badge: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#03045E',
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  badgeActive: {
    backgroundColor: '#03045E',
  },
  badgeText: {
    color: '#03045E',
    fontWeight: '600',
  },
  badgeTextActive: {
    color: '#fff',
  },
  button: {
    backgroundColor: '#6C7080',
    height: 48,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 28,
  },
  buttonEnabled: {
    backgroundColor: '#03045E',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});