// import React from 'react';
import { Pressable, Text } from 'react-native';

interface ButtonProps {
  onPress?: () => void;
  text: string;
}

export default function MainButton({ onPress, text }: ButtonProps) {
  return (
    <Pressable 
      onPress={onPress} 
      className="bg-sunglow-950 rounded-xl px-6 py-3">
      
      <Text className="text-white text-lg font-semibold capitalize ">{text}</Text>
    </Pressable>
  );
}
