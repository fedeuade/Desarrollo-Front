import React from 'react';
import { render } from '@testing-library/react-native';
import ProfileScreen from '../src/ui/screens/ProfileScreen'; // Ajusta el path según tu estructura
 
describe('ProfileScreen', () => {
  it('se renderiza correctamente', () => {
    // Pasamos un objeto navigation mock con la función navigate vacía para evitar errores
    const navigation = { navigate: jest.fn(), reset: jest.fn(), goBack: jest.fn() };
 
    render(<ProfileScreen navigation={navigation} />);
  });
});