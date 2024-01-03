import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Dropdown } from 'react-native-element-dropdown';
import { dropdownData } from './DropdownData';

export default function DropdownComponent() {
  const [value, setValue] = useState<string | null>(null);

  const handleItemPress = (itemValue: string, onPress: () => void) => {
    setValue(itemValue);
    onPress();
    
   // Handle actions based on the selected item
   if (itemValue === 'Home') {
    // Handle the Home action here or navigate to the Home screen
  } else if (itemValue === 'Dashboard') {
    // Handle the Dashboard action
  } else if (itemValue === 'Signup') {
    // Handle the Signup action
  } else if (itemValue === 'Login') {
    // Handle the Login action
  } else if (itemValue === 'Logout') {
    // Handle the Logout action
  }
};

  return (
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      data={dropdownData}
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder=" "
      value={value}
      onChange={(item) => handleItemPress(item.label, item.value.onPress)}
      renderRightIcon={() => (
        <AntDesign
          color="black"
          name="ellipsis1"
          size={30}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  dropdown: {
    margin: 0,
    height: 30,
    minWidth: '30%',

  }, 
  placeholderStyle: {
    fontSize: 16,
  },
});
