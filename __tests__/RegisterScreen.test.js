import React from 'react';
import { render } from '@testing-library/react-native';
import RegisterScreen from '../src/ui/screens/RegisterScreen'; // Ajusta el path a tu archivo
 
describe('RegisterScreen', () => {
  it('se renderiza correctamente', () => {
    const navigation = { navigate: jest.fn() };
    render(<RegisterScreen navigation={navigation} />);
  });
});