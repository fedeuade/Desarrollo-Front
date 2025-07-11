 
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import DatePicker from 'react-native-date-picker';
 
const CalendarRangePicker = ({ onConfirm }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [openStart, setOpenStart] = useState(false);
  const [openEnd, setOpenEnd] = useState(false);
 
  return (
<View style={styles.container}>
<Text style={styles.label}>Fecha de inicio:</Text>
<Button title={startDate.toDateString()} onPress={() => setOpenStart(true)} />
<DatePicker
        modal
        open={openStart}
        date={startDate}
        mode="date"
        onConfirm={(date) => {
          setOpenStart(false);
          setStartDate(date);
          if (date > endDate) setEndDate(date); // Ajustar si el inicio es posterior al fin
        }}
        onCancel={() => setOpenStart(false)}
      />
 
      <Text style={styles.label}>Fecha de fin:</Text>
<Button title={endDate.toDateString()} onPress={() => setOpenEnd(true)} />
<DatePicker
        modal
        open={openEnd}
        date={endDate}
        minimumDate={startDate}
        mode="date"
        onConfirm={(date) => {
          setOpenEnd(false);
          setEndDate(date);
        }}
        onCancel={() => setOpenEnd(false)}
      />
 
      <View style={styles.confirmContainer}>
<Button
          title="Confirmar turno"
          onPress={() => onConfirm({ startDate, endDate })}
        />
</View>
</View>
  );
};
 
const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  confirmContainer: {
    marginTop: 20,
  },
});
 
export default CalendarRangePicker;