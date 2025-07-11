import React from 'react';

import { render, fireEvent, waitFor } from '@testing-library/react-native';

import ShiftInfoScreen from '../src/ui/screens/ShiftInfoScreen';
 
jest.mock('@react-navigation/native', () => ({

  ...jest.requireActual('@react-navigation/native'),

  useRoute: () => ({

    params: {

      date: new Date(Date.now() + 86400000).toISOString(), // fecha futura

      time: '10:00',

      doctor: 'Dr. Test',

      specialty: 'Cardiología',

      image: null,

      appointmentId: 123,

    },

  }),

}));
 
jest.mock('../src/ui/screens/appointmentApi', () => ({

  getResultImage: jest.fn(() => Promise.resolve({ data: 'base64string' })),

  deleteAppointment: jest.fn(() => Promise.resolve()),

}));
 
import { getResultImage, deleteAppointment } from '../src/ui/screens/appointmentApi';
 
describe('ShiftInfoScreen', () => {

  const mockNavigation = { goBack: jest.fn() };
 
  beforeEach(() => {

    jest.clearAllMocks();

  });
 
  it('renderiza textos e imagenes básicas', () => {

    const { getByText } = render(<ShiftInfoScreen navigation={mockNavigation} />);

    expect(getByText('Dr. Test')).toBeTruthy();

    expect(getByText('Cardiología')).toBeTruthy();

  });
 
  it('muestra y oculta imagen fullscreen al presionar "Estudio" y la imagen', async () => {

    const { getByText, getByTestId, queryByTestId } = render(<ShiftInfoScreen navigation={mockNavigation} />);
 
    fireEvent.press(getByText('Estudio'));
 
    await waitFor(() => {

      expect(getResultImage).toHaveBeenCalledWith(123);

      expect(getByTestId('fullscreen-image')).toBeTruthy();

    });
 
    fireEvent.press(getByTestId('fullscreen-image'));
 
    await waitFor(() => {

      expect(queryByTestId('fullscreen-image')).toBeNull();

    });

  });
 
  it('llama a deleteAppointment y navega al presionar "Cancelar"', async () => {

    const { getByText } = render(<ShiftInfoScreen navigation={mockNavigation} />);
 
    fireEvent.press(getByText('Cancelar'));
 
    await waitFor(() => {

      expect(deleteAppointment).toHaveBeenCalledWith({ id: 123 });

      expect(mockNavigation.goBack).toHaveBeenCalled();

    });

  });

});

 