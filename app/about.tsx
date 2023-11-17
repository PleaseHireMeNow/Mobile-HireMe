import { Link } from 'expo-router';
import { View, Text } from 'react-native';

// example page component

export default function AboutPage() {
  return (
    <View className="">
      <Text className="text-xl">About</Text>
      <Link
        className="text-lg font-semibold text-blue-500 active:scale-105"
        href="/"
      >
        Home
      </Link>
      <Text>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non deleniti
        ut pariatur eos nulla dolore enim officia dolorem possimus blanditiis
        optio voluptate aut velit distinctio minima sunt eius, animi libero.
      </Text>
    </View>
  );
}
