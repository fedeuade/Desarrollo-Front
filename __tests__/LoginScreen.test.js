import React from 'react';

import { render } from '@testing-library/react-native';

import LoginScreen from '../src/ui/screens/LoginScreen';
 
jest.mock('@react-navigation/native', () => ({

  useNavigation: () => ({ navigate: jest.fn() }),

}));
 
describe('LoginScreen', () => {

  it('se renderiza correctamente', () => {

    render(<LoginScreen navigation={{ navigate: jest.fn() }} />);

  });

});

 