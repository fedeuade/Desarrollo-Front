import React from 'react';
import { render } from '@testing-library/react-native';
import CancelScreen from '../src/ui/screens/CancelScreen';
 
// Mock explícito de useRoute para inyectar params
jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useRoute: jest.fn(),
  };
});
 
import { useRoute } from '@react-navigation/native';
 
// Pequeño helper para crear un navigation fake
const createNavigationMock = () => ({
  navigate: jest.fn(),
  goBack: jest.fn(),
});
 
describe('CancelScreen', () => {
  const mockParams = {
    date: '10/07/2025',
    time: '15:30',
    doctor: 'Dra. Ana Perez',
    specialty: 'Dermatología',
    image: 'https://example.com/img.png',
  };
 
  beforeEach(() => {
    // Inyectamos los parámetros antes de cada test
    useRoute.mockReturnValue({ params: mockParams });
  });
 
  afterEach(() => {
    jest.clearAllMocks();
  });
 
  it('muestra la información del turno correctamente', () => {
    const navigation = createNavigationMock();
 
    const { getByText } = render(<CancelScreen navigation={navigation} />);
 
    expect(getByText(mockParams.doctor)).toBeTruthy();
    expect(getByText(mockParams.specialty)).toBeTruthy();
    expect(getByText(mockParams.date)).toBeTruthy();
    expect(getByText(mockParams.time)).toBeTruthy();
  });
 
  it('renderiza la imagen del profesional', () => {
    const navigation = createNavigationMock();
 
    const { getByTestId } = render(<CancelScreen navigation={navigation} />);
 
    // La imagen se renderiza usando role="image" (testing‑library >= 12)
    expect(getByTestId('doctor-image')).toBeTruthy();

  });
 
  it('muestra los botones "Estudio" y "Cancelar"', () => {
    const navigation = createNavigationMock();
 
    const { getByText, getAllByText } = render(
<CancelScreen navigation={navigation} />
    );
 
    expect(getByText('Estudio')).toBeTruthy();
    expect(getByText('Cancelar')).toBeTruthy();
 
    // También podríamos asegurar que hay exactamente 2 ButtonPrincipal
    expect(getAllByText(/(Estudio|Cancelar)/).length).toBe(2);
  });
});