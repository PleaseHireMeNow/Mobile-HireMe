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
  } else if (itemValue === 'About') {
    // Handle the About action
  } else if (itemValue === 'Contact') {
    // Handle the Contact action
  } else if (itemValue === 'Logout') {
    // Handle the Logout action
  }
};

  return (
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      data={dropdownData}
      search
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder="Select item"
      searchPlaceholder="Search..."
      value={value}
      onChange={(item) => handleItemPress(item.label, item.value.onPress)}
      renderLeftIcon={() => (
        <AntDesign
          style={styles.icon}
          color="black"
          name="Safety"
          size={20}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  dropdown: {
    margin: 20,
    height: 50,
    minWidth: '50%',
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
