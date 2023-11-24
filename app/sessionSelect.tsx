import { View, Text, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import TopicList from '../components/features/SessionSelect/TopicList';

export default function SessionSelectPage() {
  return (
    <View className="flex w-full  gap-y-8 flex-1">
      <View className="flex flex-row justify-end">
        <Pressable
          onTouchEnd={() => {
            console.log('pressed');
          }}
        >
          <Icon name="user" size={36} color="#000" />
        </Pressable>
      </View>
      <View className="gap-y-8 flex items-center rounded-3xl bg-white">
        <TopicList />
      </View>
      <View>
        <View className="">
          <Text className="text-2xl font-bold">Select a session</Text>
        </View>
      </View>
    </View>
  );
}
