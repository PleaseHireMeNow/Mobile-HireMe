import { Pressable, Text } from 'react-native';

interface ButtonProps {
  onPress?: () => void;
  text: string;
  color: 'primary' | 'secondary' | 'tertiary';
  isDisabled?: boolean;
}

const getBgColor = (color: string) => {
  switch (color) {
    case 'primary':
      return 'bg-indigo-600 active:bg-indigo-700 shadow-indigo-500';
    case 'secondary':
      return 'bg-white active:bg-gray-200 shadow-gray-500';
    case 'tertiary':
      return 'bg-black active:bg-gray-900 shadow-gray-900';
    default:
      return 'bg-indigo-500 active:bg-indigo-600 shadow-indigo-500';
  }
};

const getTextColor = (color: string) => {
  switch (color) {
    case 'primary':
      return 'text-white';
    case 'secondary':
      return 'text-black';
    case 'tertiary':
      return 'text-white';
    default:
      return 'text-white';
  }
};

export default function WideButton({
  onPress,
  text,
  color,
  isDisabled,
}: ButtonProps) {
  const bgColor = getBgColor(color);
  const textColor = getTextColor(color);

  return (
    <Pressable
      className={`bg-white active:scale-105 ${
        isDisabled ? 'bg-gray-500' : bgColor
      } shadow-sm rounded-xl px-8 py-4  flex items-center justify-center`}
      onPress={onPress}
      disabled={isDisabled}
    >
      <Text className={`shadow-md text-lg font-bold ${textColor}`}>{text}</Text>
    </Pressable>
  );
}
