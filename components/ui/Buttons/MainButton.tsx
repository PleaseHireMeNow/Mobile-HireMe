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
      className="bg-white rounded-xl border-black border-[1px] px-4 py-2 my-1 absolute bottom-4">
      
      <Text className="text-lg font-semibold text-white capitalize ">{text}</Text>
      <Text className="text-base font-semibold text-black capitalize ">{text}</Text>
    </Pressable>
  );
}
