import React from 'react';
import { render, fireEvent, waitFor, act } from '@testing-library/react-native';
import ReserveProfessionalScreen from '../src/ui/screens/ReserveProfessionalScreen';
import { useRoute } from '@react-navigation/native';
 
// Mock de useRoute si es necesario
jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useRoute: jest.fn(),
  };
});
 
describe('ReserveProfessionalScreen', () => {
  beforeEach(() => {
    useRoute.mockReturnValue({}); // si usás useRoute()
  });
 
  it('renderiza y responde a botones de seleccionar fecha y hora', async () => {
    const navigation = { navigate: jest.fn() };
 
    const { getByText, queryByText } = render(
<ReserveProfessionalScreen
        navigation={navigation}
        route={{ params: { d: { id: 1, name: 'Dr. Falso' } } }}
      />
    );
 
    await act(async () => {
      fireEvent.press(getByText('Seleccionar fecha'));
    });
    expect(queryByText('Cancelar')).toBeTruthy();
 
    await act(async () => {
      fireEvent.press(getByText('Cancelar'));
    });
 
    await waitFor(() => {
      expect(queryByText('Cancelar')).toBeNull();
    }, { timeout: 5000 });
 
    await act(async () => {
      fireEvent.press(getByText('Seleccionar hora'));
    });
    expect(queryByText('Seleccione una hora')).toBeTruthy();
  });
});