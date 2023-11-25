import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import TopicList from '../components/features/SessionSelect/TopicList';
import DifficultySelect from '../components/features/SessionSelect/DifficultySelect';
import WideButton from '../components/ui/Buttons/WideButton';
import { Link } from 'expo-router';

export default function SessionSelectPage() {
  return (
    <View className="flex w-full  gap-y-4 flex-1">
      <View className="flex flex-row justify-end">
        <Link href="/">
          <Icon name="user" size={30} color="#000" />
        </Link>
      </View>
      <View className="gap-y-6 shadow-sm shadow-gray-500 flex items-center rounded-3xl bg-white">
        <View className="flex flex-col items-center justify-center">
          <Text className="text-2xl font-bold">Select a topic</Text>
          <Text className="text-sm font-semibold mt-2 text-gray-500">
            Select a topic to start a session
          </Text>
        </View>
        <TopicList />
      </View>
      <View className="mb-8">
        <DifficultySelect />
      </View>
      <WideButton color="primary" text="START" />
    </View>
  );
}
