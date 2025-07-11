import React from 'react';
import { render } from '@testing-library/react-native';
import EmptyShiftScreen from '../src/ui/screens/EmptyShiftScreen'; // ajustá la ruta según tu estructura
import { NavigationContainer } from '@react-navigation/native';
 
// Mocks necesarios
jest.mock('../src/ui/screens/appointmentApi', () => ({
  getAppointments: jest.fn().mockResolvedValue([]), // sin turnos
}));
 
jest.mock('@react-native-async-storage/async-storage', () => ({
  getItem: jest.fn().mockResolvedValue('fake_token'),
}));
 
describe('EmptyShiftScreen (versión básica)', () => {
  it('renderiza título y botón correctamente', async () => {
    const navigation = { navigate: jest.fn() };
 
    const { getByText, findByText } = render(
<NavigationContainer>
<EmptyShiftScreen navigation={navigation} />
</NavigationContainer>
    );
 
    expect(getByText('Turnos Reservados')).toBeTruthy();
    expect(await findByText('Reservar Turno')).toBeTruthy();
  });
});