import { Link } from 'expo-router';
import { View, Text } from 'react-native';

// example page component

export default function AboutPage() {
  return (
    <View className="flex-1">
      <Text className="text-xl">About</Text>
      <Link
        className="text-lg font-semibold text-blue-500 active:scale-105"
        href="/"
      >
        Home
      </Link>
    </View>
  );
}
