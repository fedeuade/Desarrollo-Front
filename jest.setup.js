import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

jest.mock('react-native-splash-screen', () => ({
  hide: jest.fn(), // Simula la función hide()
  show: jest.fn(), // Simula la función show() (por si acaso también la usas)
}));