import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default function DoctorCard({ doctor, onPress, isExpanded, onReserve }) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress ? () => onPress(doctor) : undefined}
      activeOpacity={onPress ? 0.7 : 1}
    >
        <Image
          source={{ uri: `data:image/png;base64,${doctor.image}` }}
          style={styles.avatar}
        />      
        <View style={styles.info}>
        <Text style={styles.name}>{doctor.name}</Text>
        <Text style={styles.specialty}>{doctor.specialties}</Text>
      </View>
      <Icon name={isExpanded ? "chevron-up" : "chevron-down"} size={22} color="#03045E" />

      {/* Botón Reservar visible solo si isExpanded es true */}
      {isExpanded && (
        <TouchableOpacity
          style={styles.reserveBtn}
          onPress={() => onReserve && onReserve(doctor)}
          activeOpacity={0.8}
        >
          <Text style={styles.reserveText}>Reservar</Text>
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 14,
    borderWidth: 1,
    borderColor: '#E4E6EC',
    borderRadius: 12,
    marginBottom: 12,
    alignItems: 'center',
    flexWrap: 'wrap', // Permite que el botón aparezca debajo sin romper el layout
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 8,
    marginRight: 12,
  },
  info: { 
    flex: 1,
    minWidth: 0, // para que no se expanda y permita que botón quede abajo
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
    color: '#03045E',
  },
  specialty: {
    fontSize: 14,
    color: '#03045E',
    opacity: 0.7,
    marginTop: 2,
  },

  reserveBtn: {
    backgroundColor: '#03045E',
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 12,
    width: '100%',  // ocupa todo el ancho del card
  },
  reserveText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
});
