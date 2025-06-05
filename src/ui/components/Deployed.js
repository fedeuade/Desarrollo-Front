import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, FlatList, StyleSheet } from 'react-native';

const Deployed1 = ({ placeholder, options = [] }) => {
  const [input, setInput] = useState('');
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleInputChange = (text) => {
    setInput(text);
    const filtered = options.filter((option) =>
      option.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredOptions(filtered);
    setShowDropdown(true);
  };

  const handleSelect = (option) => {
    setInput(option);
    setShowDropdown(false);
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={input}
        placeholder={placeholder}
        placeholderTextColor="#888"
        onChangeText={handleInputChange}
        onFocus={() => setShowDropdown(true)}
        style={styles.input}
      />

      {showDropdown && filteredOptions.length > 0 && (
        <View style={styles.dropdown}>
          <FlatList
            data={filteredOptions}
            keyExtractor={(item, index) => `${item}-${index}`}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleSelect(item)} style={styles.item}>
                <Text>{item}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  );
};

export default Deployed1;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    zIndex: 10,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#F7F8F9',
    color: '#000',
  },
  dropdown: {
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    borderTopWidth: 0,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    maxHeight: 150,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
});