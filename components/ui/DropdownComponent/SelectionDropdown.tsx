// import React, { useState } from 'react';
// import { StyleSheet } from 'react-native';
// import AntDesign from '@expo/vector-icons/AntDesign';
// import { Dropdown } from 'react-native-element-dropdown';
// import { router } from 'expo-router';

// export const dropdownHistory = [
//   {
//     label: 'New Session',
//     value: { onPress: () => router.push('/sessionSelect') },
//   },
//   {
//     label: 'Resume Session',
//     value: { onPress: () => router.push('/history') },
//   },
// ];

// export default function SelectionDropdown() {
//   const [value, setValue] = useState<string | null>(null);

//   const handleItemPress = (itemValue: string, onPress: () => void) => {
//     setValue(itemValue);
//     onPress();

//     if (itemValue === 'sessionSelect') {
//     } else if (itemValue === 'history') {
//     }
//   };

//   return (
//     <Dropdown
//       style={styles.dropdown}
//       selectedTextStyle={styles.selectedTextStyle}
//       iconStyle={styles.iconStyle}
//       data={dropdownHistory}
//       maxHeight={300}
//       placeholder="Select Session"
//       labelField="label"
//       valueField="value"
//       value={value}
//       onChange={(item) => handleItemPress(item.label, item.value.onPress)}
//       renderLeftIcon={() => (
//         <AntDesign style={styles.icon} color="green" name="check" size={20} />
//       )}
//     />
//   );
// }

// const styles = StyleSheet.create({
//   dropdown: {
//     // margin: "auto",
//     height: 50,
//     minWidth: '50%',
//     borderBottomColor: 'transparent',
//     borderBottomWidth: 0.5,
//   },
//   icon: {
//     marginRight: 5,
//   },
//   placeholderStyle: {
//     fontSize: 16,
//   },
//   selectedTextStyle: {
//     fontSize: 16,
//   },
//   iconStyle: {
//     width: 20,
//     height: 20,
//   },
// });
