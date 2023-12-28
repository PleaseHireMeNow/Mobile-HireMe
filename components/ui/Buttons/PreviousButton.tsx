import { ReactNode } from 'react';
import { Image, ImageSourcePropType, Pressable, Text } from 'react-native';

interface ButtonProps {
  onPress?: () => void;
  text: string;
  imageSource: ImageSourcePropType;
  children?: ReactNode;
}

export default function PreviousButton({ onPress, text, imageSource }: ButtonProps) {
  return (
    <Pressable onPress={onPress} className="flex justify-center items-center bg-powerpoint-200 shadow-sm shadow-gray-500/50 active:border-[1px] active:border-gray-300 rounded-[100%] w-40 h-40 "> 
    <Image source={imageSource} className='w-3/4 bg-cover h-1/2'/>
    <Text className="-m-1 text-sm font-bold text-gray-700 capitalize ">{text}</Text>
    </Pressable>
  );
}