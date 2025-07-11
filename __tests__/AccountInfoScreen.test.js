
import React from 'react';
import { render } from '@testing-library/react-native';
import AccountInfoScreen from '../src/ui/screens/AccountInfoScreen'; // Ajustá la ruta si es distinta
import { NavigationContainer } from '@react-navigation/native';
 
// Mocks necesarios
jest.mock('../src/ui/screens/userApi', () => ({
  getUser: jest.fn().mockResolvedValue({ name: '', dni: '' }),
  editUser: jest.fn(),
}));
 
jest.mock('@react-native-async-storage/async-storage', () => ({
  getItem: jest.fn().mockResolvedValue('fake_token'),
}));
 
describe('AccountInfoScreen', () => {
  it('se renderiza correctamente con título y botón', async () => {
    const navigation = { navigate: jest.fn(), goBack: jest.fn() };
 
    const { getByText } = render(
<NavigationContainer>
<AccountInfoScreen navigation={navigation} />
</NavigationContainer>
    );
 
    expect(getByText('Cuenta')).toBeTruthy();
    expect(getByText('Confirmar Cambios')).toBeTruthy();
  });
});