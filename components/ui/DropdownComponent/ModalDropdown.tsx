import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import { ModalDropdownProps } from '../../../types/models/ModalDropdownProps';
import Chart from './Chart';


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
            <Chart/>
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
