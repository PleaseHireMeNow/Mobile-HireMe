import { Pressable, StyleSheet, Text } from 'react-native';

interface ButtonProps {
  onPress?: () => void;
  text: string;
}

export default function MainButton({ onPress, text }: ButtonProps) {
  return (
    <Pressable onPress={onPress} style={buttonStyles.button}>
      <Text style={buttonStyles.text}>{text}</Text>
    </Pressable>
  );
}

const buttonStyles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});
