import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import EmptyShiftScreen from '../src/ui/screens/ShiftTypeScreen';

describe('ShiftTypeScreen (EmptyShiftScreen)', () => {
  const createNavigationMock = () => ({
    navigate: jest.fn(),
  });

  it('muestra título, imagen y los dos botones', () => {
    const navigation = createNavigationMock();

    const { getByText, getByTestId } = render(
      <EmptyShiftScreen navigation={navigation} />
    );

    // Título
    expect(getByText('Buscar turno por')).toBeTruthy();

    // Imagen (buscamos por testID)
    expect(getByTestId('shift-image')).toBeTruthy();

    // Botones
    expect(getByText('Especialidad')).toBeTruthy();
    expect(getByText('Profesional')).toBeTruthy();
  });

  it('navega a "ReserveSpeciality" al presionar el botón Especialidad', () => {
    const navigation = createNavigationMock();

    const { getByText } = render(
      <EmptyShiftScreen navigation={navigation} />
    );

    fireEvent.press(getByText('Especialidad'));

    expect(navigation.navigate).toHaveBeenCalledTimes(1);
    expect(navigation.navigate).toHaveBeenCalledWith('ReserveSpeciality');
  });

  it('navega a "ReserveProfessional" al presionar el botón Profesional', () => {
    const navigation = createNavigationMock();

    const { getByText } = render(
      <EmptyShiftScreen navigation={navigation} />
    );

    fireEvent.press(getByText('Profesional'));

    expect(navigation.navigate).toHaveBeenCalledTimes(1);
    expect(navigation.navigate).toHaveBeenCalledWith('ReserveProfessional');
  });
});