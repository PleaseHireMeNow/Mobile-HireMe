import { Link } from 'expo-router';
import { View, Text } from 'react-native';

export default function AboutPage() {
  return (
    <View>
      <Text>About</Text>
      <Link href="/">Home</Link>
    </View>
  );
}
