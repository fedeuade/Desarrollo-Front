import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { searchDoctor } from '../screens/doctorApi';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DoctorCard from '../components/DoctorCard';

export default function DoctorList({
  navigation,
  doc,
  refreshDoctors,
  selectedFilter,
  setDoctors,
  setSelectedFilter,
}) {
  const [query, setQuery] = useState('');
  const [localDoctors, setLocalDoctors] = useState(doc);
  const [expandedId, setExpandedId] = useState(null); // id del doctor “abierto”

  // copiar lista cuando cambia desde el padre
  useEffect(() => setLocalDoctors(doc), [doc]);

  /* 🔎 Buscar doctor */
  const handleSearch = async (text) => {
    setQuery(text);

    if (!text) {
      setLocalDoctors(doc);
      return;
    }
    try {
      const token = await AsyncStorage.getItem('token');
      const { data } = await searchDoctor(text, token);
      setLocalDoctors(data);
      setExpandedId(null); // cerrar expansiones al buscar
    } catch (e) {
      console.error('Error en búsqueda', e);
    }
  };

  /* 🎛 Abrir filtros */
  const handleFilterOpen = () => {
    navigation.navigate('DoctorFilter', {
      selected: selectedFilter,
      onFilter: (filteredList, newFilter) => {
        setDoctors(filteredList);
        setSelectedFilter(newFilter);
        setExpandedId(null); // cerrar expansiones
      },
    });
  };

  /* ➡️ Navegar al detalle */
  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const handleReserve = (doctor) => {
    navigation.navigate('ShiftType', { doctor });
  };

  /* Render de cada ítem */
  const renderItem = ({ item }) => {
    console.log(item.image)
    const isOpen = expandedId === item.id;
    return (
      <View style={styles.cardWrapper}>
        <DoctorCard
          doctor={item}
          onPress={() => toggleExpand(item.id)}
          isExpanded={isOpen}
          onReserve={handleReserve}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Nuestros profesionales</Text>

      {/* Search + filter row */}
      <View style={styles.searchRow}>
        <View style={styles.searchBox}>
          <Icon name="search" size={22} color="#979DAC" />
          <TextInput
            style={styles.input}
            placeholder="Buscar profesional"
            placeholderTextColor="#979DAC"
            value={query}
            onChangeText={handleSearch}
          />
        </View>

        <TouchableOpacity style={styles.filterBtn} onPress={handleFilterOpen}>
          <Icon name="sliders" size={22} color="#6C7080" />
        </TouchableOpacity>
      </View>

      {/* Listado */}
      <View style={styles.listContainer}>
        <FlatList
          data={localDoctors}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ paddingBottom: 24 }}
          showsVerticalScrollIndicator={false}
        />
      </View>

      {/* Quitar filtro */}
      {selectedFilter.length > 0 && (
        <TouchableOpacity
          onPress={() => {
            refreshDoctors();
            setSelectedFilter([]);
            setExpandedId(null);
          }}
          style={{ marginTop: 12 }}
        >
          <Text style={{ color: '#0077B6', fontWeight: '600' }}>
            Quitar filtro
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

/* 🎨 Estilos */
const styles = StyleSheet.create({
  container: { marginTop:100, backgroundColor: '#fff', padding: 24 },
  header: {
    fontSize: 28,
    fontWeight: '700',
    color: '#03045E',
    marginBottom: 16,
  },
  searchRow: { flexDirection: 'row', alignItems: 'center' },
  searchBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E4E6EC',
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 50,
  },
  input: {
    flex: 1,
    marginLeft: 6,
    fontSize: 16,
    color: '#03045E',
  },
  filterBtn: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#E4E6EC',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 12,
  },
  listContainer: {
    marginTop: 16,
    maxHeight: 600,
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: 'transparent',
  },

  /* Nuevo: wrapper + botón reservar */
  cardWrapper: {
    marginBottom: 24, // un poco más de margen para evitar superposiciones
    overflow: 'visible', // asegurar que el botón no se corte
  },
});
