import { Link } from 'expo-router';
import { View, Text } from 'react-native';

export default function User () {
  return (
    <View>
        <Link href="/user/1">Topic 1</Link>
        <Link href="/user/2">Topic 2</Link>
    </View>
  );
};
