import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import DoctorListScreen from '../src/ui/screens/DoctorListScreen';
 
jest.mock('../src/ui/screens/doctorApi', () => ({
  getAllDoctors: jest.fn(),
}));
 
jest.mock('../src/ui/components/DoctorList', () => {
  const React = require('react');
  const { Text, Button, View } = require('react-native');
  return function DoctorListMock({ doc, refreshDoctors }) {
    return (
<View>
<Text>DoctorList Mock</Text>
<Text testID="doctor-count">{doc.length}</Text>
<Button title="Refresh" onPress={refreshDoctors} />
</View>
    );
  };
});
 
jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useFocusEffect: (callback) => callback(),
  };
});
 
import { getAllDoctors } from '../src/ui/screens/doctorApi';
 
describe('DoctorListScreen básico', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
 
  it('muestra loader mientras carga', () => {
    getAllDoctors.mockImplementation(() => new Promise(() => {}));
    const { queryByText } = render(<DoctorListScreen navigation={{}} />);
    expect(queryByText('DoctorList Mock')).toBeNull();
  });
 
  it('muestra DoctorList y permite refrescar', async () => {
    getAllDoctors.mockResolvedValue({ data: [{ id: 1 }, { id: 2 }] });
 
    const { getByText, getByTestId } = render(<DoctorListScreen navigation={{}} />);
 
    await waitFor(() => {
      expect(getByText('DoctorList Mock')).toBeTruthy();
      expect(getByTestId('doctor-count').props.children).toBe(2);
    });
 
    // Limpiamos las llamadas previas para contar sólo las nuevas
    getAllDoctors.mockClear();
 
    fireEvent.press(getByText('Refresh'));
 
    await waitFor(() => {
      expect(getAllDoctors).toHaveBeenCalledTimes(1);
    });
  });
});