
 
import React from 'react';
import { render } from '@testing-library/react-native';
import InsuranceScreen from '../src/ui/screens/InsuranceScreen';
 
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({ goBack: jest.fn() }),
  useFocusEffect: (cb) => cb(),
}));
 
jest.mock('@react-native-async-storage/async-storage', () => ({
  __esModule: true,
  default: {
    getItem: jest.fn(() => Promise.resolve('fake-token')),
  },
}));
 
jest.mock('../src/ui/screens/userApi', () => ({
  getInsurance: jest.fn(() => Promise.resolve({ company: 'OSDE', affiliateNumber: '1234' })),
  uploadInsurance: jest.fn(),
  getCompanies: jest.fn(() => Promise.resolve(['OSDE', 'Swiss Medical'])),
}));
 
// ⚠️ Esta es la forma correcta para evitar JSX dentro del jest.mock
jest.mock('../src/ui/components/Deployed', () => {
  const React = require('react');
  return ({ selected }) =>
    React.createElement('Text', null, `Mocked Deployed: ${selected}`);
});
 
describe('InsuranceScreen', () => {
  it('se renderiza correctamente', async () => {
    const { getByText } = render(<InsuranceScreen navigation={{ goBack: jest.fn() }} />);
    expect(getByText(/Ingresá tu obra social/i)).toBeTruthy();
  });
});