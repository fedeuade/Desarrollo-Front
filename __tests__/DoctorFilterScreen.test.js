import React from 'react';
import { render } from '@testing-library/react-native';
import DoctorFilterScreen from '../src/ui/screens/DoctorFilterScreen'; // ajusta la ruta si es distinta
import { NavigationContainer } from '@react-navigation/native';
 
// ---- Mocks mínimos ----
jest.mock('../src/ui/screens/appointmentApi', () => ({
  getSpecialties: jest.fn().mockResolvedValue({ data: [] }), // sin datos
}));
jest.mock('../src/ui/screens/doctorApi', () => ({
  filterDoctors: jest.fn(),
}));
 
describe('DoctorFilterScreen (versión básica)', () => {
  it('renderiza título y botón Filtrar', () => {
    const navigation = { goBack: jest.fn() };
 
    const route = {
      params: {
        selected: [],
        onFilter: jest.fn(),
      },
    };
 
    const { getByText } = render(
<NavigationContainer>
<DoctorFilterScreen navigation={navigation} route={route} />
</NavigationContainer>
    );
 
    expect(getByText('Especialidades:')).toBeTruthy();
    expect(getByText('Filtrar')).toBeTruthy();
  });
});