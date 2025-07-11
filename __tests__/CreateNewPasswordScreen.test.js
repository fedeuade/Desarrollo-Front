import React from 'react';
import { render } from '@testing-library/react-native';
import CreateNewPasswordScreen from '../src/ui/screens/CreateNewPasswordScreen'; // ajustá la ruta si hace falta
import { NavigationContainer } from '@react-navigation/native';
 
// Mocks necesarios
jest.mock('../src/ui/screens/userApi', () => ({
  changePassword: jest.fn(),
}));
 
jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useRoute: () => ({
      params: {
        email: 'test@example.com',
      },
    }),
  };
});
 
describe('CreateNewPasswordScreen (versión básica)', () => {
  it('renderiza título y botón', () => {
    const navigation = { navigate: jest.fn() };
 
    const { getByText } = render(
<NavigationContainer>
<CreateNewPasswordScreen navigation={navigation} />
</NavigationContainer>
    );
 
    expect(getByText('Crear nueva contraseña')).toBeTruthy();
    expect(getByText('Confirmar')).toBeTruthy();
  });
});