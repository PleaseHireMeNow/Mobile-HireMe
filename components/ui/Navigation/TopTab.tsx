import { View } from 'react-native';
import { Link, router } from 'expo-router';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';

export default function TopTab() {
  const handleBack = () => {
    router.back();
  };
  return (
    <View className="flex flex-row justify-between ml-2">
      <Icon2 name="chevron-left" size={32} onPress={handleBack} />
      <Link
        className="mr-4 text-lg font-semibold text-black active:text-blue-500"
        href="/"
      >
        <Icon name="home" size={24} />
      </Link>
    </View>
  );
}
