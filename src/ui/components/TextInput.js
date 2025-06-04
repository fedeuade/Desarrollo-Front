import { View, Text, TouchableOpacity,TextInput } from 'react-native'
import React from 'react'

export default function TextInput1({placeholder}) {


  return (
    <View>

        <TextInput
        style={{
          height: 50,
          borderColor: '#ccc',
          borderWidth: 1,
          borderRadius: 5,
          paddingHorizontal: 10,
          color: '#000',
          backgroundColor: '#F7F8F9',

        }}
        placeholder={placeholder}
        placeholderTextColor={'#888'}
      />
    </View>
  )
}