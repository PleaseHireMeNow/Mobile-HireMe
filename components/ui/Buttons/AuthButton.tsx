import { Pressable, Text } from 'react-native';

interface ButtonProps {
  onPress?: () => void;
  text: string;
}

export default function AuthButton({ onPress, text }: ButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      className="items-center justify-center w-2/3 p-4 font-medium text-center text-white uppercase bg-gray-800 hover:bg-black rounded-xl from-gray-700 to-gray-900 md:p-4"
    >
      <Text className="font-bold text-white uppercase text-md">{text}</Text>
    </Pressable>
  );
}
