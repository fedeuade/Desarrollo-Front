import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import SuccessfulReservationScreen from '../src/ui/screens/SuccessfulReservationScreen';
 
describe('SuccessfulReservationScreen', () => {
  const mockNavigation = { navigate: jest.fn() };
 
  beforeEach(() => {
    jest.clearAllMocks();
  });
 
  it('renderiza los textos correctamente', () => {
    const { getByText } = render(<SuccessfulReservationScreen navigation={mockNavigation} />);
 
    expect(getByText('Turno reservado!')).toBeTruthy();
    expect(getByText('Su turno ha sido reservado exitosamente')).toBeTruthy();
    expect(getByText('Volver al Inicio')).toBeTruthy();
  });
 
  it('llama a navigation.navigate al presionar el botón', () => {
    const { getByText } = render(<SuccessfulReservationScreen navigation={mockNavigation} />);
    const button = getByText('Volver al Inicio');
 
    fireEvent.press(button);
 
    expect(mockNavigation.navigate).toHaveBeenCalledWith('EmptyShift');
  });
});