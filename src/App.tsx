/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React,{Fragment, useEffect, useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): React.JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  /*
   * To keep the template simple and small we're adding padding to prevent view
   * from rendering under the System UI.
   * For bigger apps the recommendation is to use `react-native-safe-area-context`:
   * https://github.com/AppAndFlow/react-native-safe-area-context
   *
   * You can read more about it here:
   * https://github.com/react-native-community/discussions-and-proposals/discussions/827
   */
  const safePadding = '5%';
  const [email,setEmail]=useState('');
  const[password,setPassword]=useState('');


  
  return (
    <View style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
            paddingHorizontal: safePadding,
            paddingBottom: safePadding,
          }}>
      <View style={{marginTop: 200, alignItems: 'center' }}>
        <Text style={styles.highlight}>Ingresa a tu cuenta</Text>
      </View>
      <View style={{ marginTop: 30 }}>
        <TextInput
          style={{
            height: 50,
            borderColor: '#ccc',
            borderWidth: 1,
            borderRadius: 5,
            paddingHorizontal: 10,
            color: isDarkMode ? '#fff' : '#000',
            backgroundColor: isDarkMode ? '#222' : '#fff',
          }}
          placeholder="Correo electrónico"
          placeholderTextColor={isDarkMode ? '#888' : '#888'}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>
       <View style={{ marginTop: 15 }}>
        <TextInput
            style={{
              height: 50,
              borderColor: '#ccc',
              borderWidth: 1,
              borderRadius: 5,
              paddingHorizontal: 10,
              color: isDarkMode ? '#fff' : '#000',
              backgroundColor: isDarkMode ? '#222' : '#fff',
            }}
            placeholder="Contraseña"
            placeholderTextColor={isDarkMode ? '#888' : '#888'}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
            />
       
      </View>
       <View style={{ marginTop: 30 }}>
          <TouchableOpacity
              onPress={() => console.log('Iniciar sesion')}
              style={{
                height: 50,
                borderColor: '#ccc',
                borderWidth: 1,
                borderRadius: 5,
                paddingHorizontal: 10,
                backgroundColor: isDarkMode ? '#03045E' : '#03045E',
                justifyContent: 'center',
                alignItems: 'center',

              }}
            >
              <Text style={{ color: isDarkMode ? '#fff' : '#fff' }}>Iniciar sesion</Text>
      </TouchableOpacity>


      </View>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
        <View style={{paddingRight: safePadding}}>
        </View>
       
    </View>
  );
}


const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
      fontSize: 30,         // Tamaño según "Títulos 30"
      fontWeight: 'bold',   // Estilo común en títulos
      width: 260,
      height: 40,
      textAlign: 'center',
      color: '#03045E',        
  },
});

export default App;
