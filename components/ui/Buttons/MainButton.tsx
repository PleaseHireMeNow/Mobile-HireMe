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
      className="px-6 py-3 bg-sunglow-950 rounded-xl">
      
      <Text className="text-lg font-semibold text-white capitalize ">{text}</Text>
    </Pressable>
  );
}
