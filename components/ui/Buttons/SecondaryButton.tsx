import { Pressable, Text } from 'react-native';

interface ButtonProps {
  onPress?: () => void;
  text: string;
}

export default function SecondaryButton({ onPress, text }: ButtonProps) {
  return (
    <Pressable onPress={onPress} className="flex justify-center items-center bg-sunglow-950 rounded-[100%] w-40 h-40">
      <Text className="text-white text-lg font-semibold capitalize ">{text}</Text>
    </Pressable>
  );
}