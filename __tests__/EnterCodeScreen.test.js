import React from 'react';
import { render } from '@testing-library/react-native';
import EnterCodeScreen from '../src/ui/screens/EnterCodeScreen'; // ajustá la ruta si hace falta
import { NavigationContainer } from '@react-navigation/native';
 
// Mocks necesarios
jest.mock('../src/ui/screens/userApi', () => ({
  validateCode: jest.fn(),
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
 
describe('EnterCodeScreen (versión básica)', () => {
  it('renderiza correctamente los textos clave', () => {
    const navigation = { navigate: jest.fn() };
 
    const { getByText } = render(
<NavigationContainer>
<EnterCodeScreen navigation={navigation} />
</NavigationContainer>
    );
 
    expect(getByText('Ingresá el codigo')).toBeTruthy();
    expect(getByText('Confirmar')).toBeTruthy();
    expect(getByText('Iniciar sesion')).toBeTruthy();
  });
});