import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ShiftCancelScreen from '../src/ui/screens/ShiftCancelScreen'; // Ajustá el path
 
describe('ShiftCancelScreen', () => {
  it('renderiza y responde al botón "Volver al Inicio"', () => {
    const mockNavigation = { navigate: jest.fn() };
 
    const { getByText } = render(<ShiftCancelScreen navigation={mockNavigation} />);
 
    // Verifico que el texto principal esté presente
    expect(getByText('Turno cancelado!')).toBeTruthy();
 
    // Presiono el botón "Volver al Inicio"
    fireEvent.press(getByText('Volver al Inicio'));
 
    // Verifico que navigation.navigate fue llamado con "EmptyShift"
    expect(mockNavigation.navigate).toHaveBeenCalledWith('EmptyShift');
  });
});