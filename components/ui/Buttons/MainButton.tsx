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
      className="absolute px-4 py-2 my-1 bg-white shadow-sm rounded-xl bottom-4 shadow-gray-500 active:border-[1px] active:border-gray-300">
      
      <Text className="text-base font-semibold text-black capitalize ">{text}</Text>
    </Pressable>
  );
}
