import React, { useState, useEffect } from 'react';
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
import { ModalDropdownProps } from '../../../types/models/ModalDropdownProps';

export const dropdownHistory = [
  {
    label: 'Insert graph or visuals here of user progress instead of a link',
    value: { onPress: () => router.push('/sessionSelect') },
  },
];


const ModalDropdown: React.FC<ModalDropdownProps> = ({ onClose }) => {
  const handleItemPress = (itemValue: string, onPress: () => void) => {
    onPress(); 
    onClose(); // Close the modal 
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={true} 
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalContainer}>
          <TouchableWithoutFeedback>
            <View style={styles.modalContent}>
              {dropdownHistory.map((item) => (
                <TouchableOpacity
                  key={item.label}
                  onPress={() => handleItemPress(item.label, item.value.onPress)}
                >
                  <Text style={styles.modalItem}>{item.label}</Text>
                </TouchableOpacity>
              ))}
              <TouchableOpacity onPress={onClose}>
                <Text style={styles.closeButton}>Close</Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

export default ModalDropdown;

const styles = StyleSheet.create({
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
    paddingVertical: 150, // Size of modal
  },
  closeButton: {
    color: 'black',
    marginTop: 10,
    textAlign: 'center',
  },
});
