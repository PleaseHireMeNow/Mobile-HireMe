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

// export default function DropdownHistoryComponent() {
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

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { router } from 'expo-router';

export const dropdownHistory = [
  {
    label: 'New Session',
    value: { onPress: () => router.push('/sessionSelect') },
  },
  {
    label: 'Resume Session',
    value: { onPress: () => router.push('/history') },
  },
];

export default function DropdownHistoryComponent() {
  const [value, setValue] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleItemPress = (itemValue: string, onPress: () => void) => {
    setValue(itemValue);
    onPress();
    setModalVisible(false);
    if (itemValue === 'sessionSelect') {
    } else if (itemValue === 'history') {
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <View style={styles.dropdownButton}>
          <Text>{value || 'Select Session'}</Text>
          <AntDesign name="caretdown" size={12} />
        </View>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={styles.modalContainer}>
            <TouchableWithoutFeedback>
              <View style={styles.modalContent}>
                {dropdownHistory.map((item) => (
                  <TouchableOpacity
                    key={item.label}
                    onPress={() =>
                      handleItemPress(item.label, item.value.onPress)
                    }
                  >
                    <Text style={styles.modalItem}>{item.label}</Text>
                  </TouchableOpacity>
                ))}
                <TouchableOpacity onPress={() => setModalVisible(false)}>
                  <Text style={styles.closeButton}>Close</Text>
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  dropdownButton: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    // backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  modalItem: {
    paddingVertical: 10,
  },
  closeButton: {
    color: 'black',
    marginTop: 10,
    textAlign: 'center',
  },
});
