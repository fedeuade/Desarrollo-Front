import React from 'react';

import { render, waitFor } from '@testing-library/react-native';

import ShiftHistoryScreen from '../src/ui/screens/ShiftHistoryScreen';

import * as appointmentApi from '../src/ui/screens/appointmentApi';

import AsyncStorage from '@react-native-async-storage/async-storage';
 
// Mocks

jest.mock('@react-native-async-storage/async-storage', () => ({

  getItem: jest.fn(),

}));
 
jest.mock('../src/ui/screens/appointmentApi', () => ({

  getAppointmentHistory: jest.fn(),

}));
 
// Mock useFocusEffect para que ejecute el callback de inmediato

jest.mock('@react-navigation/native', () => ({

  useFocusEffect: (callback) => callback(),

  useNavigation: () => ({}),

}));
 
describe('ShiftHistoryScreen', () => {

  beforeEach(() => {

    jest.clearAllMocks();

  });
 
  it('muestra mensaje cuando no hay turnos', async () => {

    AsyncStorage.getItem.mockResolvedValue('fake-token');

    appointmentApi.getAppointmentHistory.mockResolvedValue([]);
 
    const { getByText } = render(<ShiftHistoryScreen />);
 
    await waitFor(() => {

      expect(getByText('No tienes turnos pasados')).toBeTruthy();

    });

  });
 
  it('muestra lista de turnos cuando hay datos', async () => {

    AsyncStorage.getItem.mockResolvedValue('fake-token');

    appointmentApi.getAppointmentHistory.mockResolvedValue([

      {

        id: '1',

        image: 'fakebase64string',

        date: '2025-07-10',

        time: '10:00',

        doctor: 'Dr. Smith',

        specialty: 'Cardiology',

      },

    ]);
 
    const { queryByText, getByText } = render(<ShiftHistoryScreen />);
 
    await waitFor(() => {

      expect(queryByText('No tienes turnos pasados')).toBeNull();

      expect(getByText('Dr. Smith')).toBeTruthy();

    });

  });

});

 