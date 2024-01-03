import { ReactNode } from 'react';
import { Pressable, ImageSourcePropType, Text, Image,View } from 'react-native';

interface ButtonProps {
  onPress?: () => void;
  text: string;
  imageSource: ImageSourcePropType;
  children?: ReactNode;
}

export default function SecondaryButton({ onPress, text, imageSource }: ButtonProps) {
  return (
    <Pressable onPress={onPress} className="flex justify-center items-center bg-white rounded-[150%] w-80 h-80">
<Text className="text-2xl font-bold capitalize top-60">{text}</Text>
      <Image source={imageSource} className='absolute w-4/5 h-full bg-cover bottom-1 right-.5'/>
    </Pressable>
  );
}