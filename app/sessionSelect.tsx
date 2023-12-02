import { View, Text } from 'react-native';
import TopicList from '../components/features/SessionSelect/TopicList';
import DifficultySelect from '../components/features/SessionSelect/DifficultySelect';
import WideButton from '../components/ui/Buttons/WideButton';
import HeaderWrapper from '../components/ui/Navigation/HeaderWrapper';

export default function SessionSelectPage() {
  return (
    <HeaderWrapper>
      <View className="flex-1 w-full pt-7 gap-y-4">
        <View className="flex items-center bg-white shadow-sm gap-y-6 shadow-gray-400 rounded-3xl">
          <View className="flex flex-col items-center justify-center">
            <Text className="text-2xl font-bold">Select a topic</Text>
            <Text className="mt-2 text-sm font-semibold text-gray-500">
              Select a topic to start a session
            </Text>
          </View>
          <TopicList />
        </View>
        <View className="mb-4">
          <DifficultySelect />
        </View>
        <WideButton color="primary" text="START" />
      </View>
    </HeaderWrapper>
  );
}
