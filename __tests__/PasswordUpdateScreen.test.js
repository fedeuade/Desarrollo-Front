import React from 'react';

import { render } from '@testing-library/react-native';

import PasswordUpdateScreen from '../src/ui/screens/PasswordUpdateScreen'; // Ajustá el path si es necesario
 
describe('PasswordUpdateScreen', () => {

  it('se renderiza correctamente', () => {

    render(<PasswordUpdateScreen navigation={{ navigate: jest.fn() }} />);

  });

});

 