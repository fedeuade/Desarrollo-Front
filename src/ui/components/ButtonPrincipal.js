import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'

export default function ButtonPrincipal({text}) {
  return (
    <View>
        
      <TouchableOpacity
                         style={{
                           height: 50,
                           borderColor: '#ccc',
                           borderWidth: 1,
                           borderRadius: 8,
                           paddingHorizontal: 10,
                           backgroundColor: '#03045E',
                           justifyContent: 'center',
                           alignItems: 'center',
           
                         }}
                       >
                         <Text style={{ color: '#fff' }}>{text}</Text>
                 </TouchableOpacity>
    </View>
  )
}