import React from 'react';
import { render } from '@testing-library/react-native';
import ForgetPasswordScreen from '../src/ui/screens/ForgetPasswordScreen'; // Ajustá si tu ruta es distinta
import { NavigationContainer } from '@react-navigation/native';
 
// Mock del requestCode
jest.mock('../src/ui/screens/userApi', () => ({
  requestCode: jest.fn(),
}));
 
describe('ForgetPasswordScreen (test básico)', () => {
  it('renderiza los textos principales correctamente', () => {
    const navigation = { navigate: jest.fn() };
 
    const { getByText } = render(
<NavigationContainer>
<ForgetPasswordScreen navigation={navigation} />
</NavigationContainer>
    );
 
    expect(getByText('¿Olvidaste tu contraseña?')).toBeTruthy();
    expect(getByText('Enviar código')).toBeTruthy();
    expect(getByText('Iniciar sesion')).toBeTruthy();
  });
});