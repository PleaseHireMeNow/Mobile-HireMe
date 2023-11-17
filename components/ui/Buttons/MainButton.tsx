import { Pressable, Text } from 'react-native';

interface ButtonProps {
  onPress?: () => void;
  text: string;
}

export default function MainButton({ onPress, text }: ButtonProps) {
  return (
    <Pressable onPress={onPress} className="bg-blue-700 rounded-xl px-3 py-4">
      <Text className="text-white font-semibold">{text}</Text>
    </Pressable>
  );
}
