module.exports = {
  preset: 'react-native',
  // Asegúrate de que esta ruta sea correcta para tu archivo jest.setup.js
  // Por ejemplo, si jest.setup.js está en la raíz de tu proyecto.
  setupFiles: ['./jest.setup.js'], // ¡Esta es la línea clave que añadimos!
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native|@react-navigation)',
  ],
};