import React from 'react';
import { render, fireEvent, waitFor, act } from '@testing-library/react-native';
import ReserveSpecialityScreen from '../src/ui/screens/ReserveSpecialityScreen'; // Ajustá el path
 
// Mock navigation para pasar como prop
const mockNavigation = {
  navigate: jest.fn(),
};
 
// Mock de appointmentApi para evitar llamadas reales
jest.mock('../src/ui/screens/appointmentApi', () => ({
  getSpecialties: jest.fn(() => Promise.resolve({ data: ['Cardiología', 'Dermatología'] })),
  getAvailableDates: jest.fn(() => Promise.resolve({ data: ['2025-07-10', '2025-07-11'] })),
  getAvailableTimes: jest.fn(() => Promise.resolve({ data: ['08:00', '09:00'] })),
  createAppointmentBySpecialty: jest.fn(() => Promise.resolve()),
}));
 
describe('ReserveSpecialityScreen', () => {
  it('renderiza y responde a botones de seleccionar fecha, hora y reservar', async () => {
    const { getByText, queryByText } = render(<ReserveSpecialityScreen navigation={mockNavigation} />);
 
    // Esperar que cargue la pantalla (useEffect)
    await waitFor(() => getByText('Reserve su turno'));
 
    // Abrir modal calendario
    await act(async () => {
      fireEvent.press(getByText('Seleccionar fecha'));
    });
    expect(queryByText('Cancelar')).toBeTruthy();
 
    // Cerrar modal calendario
    await act(async () => {
      fireEvent.press(getByText('Cancelar'));
    });
    await waitFor(() => {
      expect(queryByText('Cancelar')).toBeNull();
    }, { timeout: 3000 });
 
    // Abrir modal selector de hora
    await act(async () => {
      fireEvent.press(getByText('Seleccionar hora'));
    });
    expect(queryByText('Seleccione una hora')).toBeTruthy();
 
    // Seleccionar una hora (primer botón)
    await act(async () => {
      fireEvent.press(getByText('08:00'));
    });
    await waitFor(() => {
      // El modal debería cerrarse luego de seleccionar la hora
      expect(queryByText('Seleccione una hora')).toBeNull();
    }, { timeout: 3000 });
 
    // Presionar botón Reservar Turno
    await act(async () => {
      fireEvent.press(getByText('Reservar Turno'));
    });
 
    // Aquí podrías agregar expectativas para el resultado de la reserva, si las tienes
  });
});