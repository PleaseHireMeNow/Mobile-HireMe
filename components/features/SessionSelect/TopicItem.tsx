import { DevIcon } from '../../../constants/DevIcons';
import { View, Text, Pressable } from 'react-native';
import TopicIcon from './TopicIcon';

interface TopicItemProps {
  Icon: DevIcon;
}

export default function TopicItem({ Icon }: TopicItemProps) {
  return (
    <View className="flex flex-col px-4 items-center justify-center">
      <Pressable
        className="flex items-center justify-center w-20 h-20 rounded-full bg-white"
        onTouchEnd={() => {
          console.log('pressed');
        }}
      >
        <TopicIcon Icon={Icon} />
      </Pressable>
      <Text className="text-sm font-bold">{Icon.name}</Text>
    </View>
  );
}
