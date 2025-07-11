

import React from 'react';
import { render } from '@testing-library/react-native';
import DoctorScreen from '../src/ui/screens/DoctorScreen'; // ajustá si la ruta es diferente
import { NavigationContainer } from '@react-navigation/native';
 
describe('DoctorScreen (versión básica)', () => {
  it('renderiza título y botón correctamente', () => {
    const navigation = { navigate: jest.fn() };
 
    const { getByText } = render(
<NavigationContainer>
<DoctorScreen navigation={navigation} />
</NavigationContainer>
    );
 
    expect(getByText('Turnos Reservados')).toBeTruthy();
    expect(getByText('Reservar turno')).toBeTruthy();
  });
});