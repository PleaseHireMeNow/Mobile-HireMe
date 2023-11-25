import { useContext, type Dispatch, type SetStateAction } from 'react';
import { DevIcon } from '../../../constants/DevIcons';
import { View, Text, Pressable } from 'react-native';
import TopicIcon from './TopicIcon';
import {
  ISessionFormContext,
  SessionFormContext,
} from '../../../context/SessionFormContext';

interface TopicItemProps {
  Icon: DevIcon;
}

export default function TopicItem({ Icon }: TopicItemProps) {
  const { selectedTopic, setSelectedTopic } = useContext(
    SessionFormContext
  ) as ISessionFormContext;

  const style =
    selectedTopic === Icon.name
      ? 'shadow-md bg-indigo-700'
      : 'shadow-sm bg-white';
  const textColor =
    selectedTopic === Icon.name
      ? 'text-indigo-700 font-bold'
      : 'text-gray-500 font-semibold';

  return (
    <View className="flex flex-col my-2 px-4 items-center justify-center">
      <Pressable
        className={`flex items-center active:scale-105 justify-center  shadow-indigo-500 w-20 h-20 rounded-full ${style}`}
        onTouchEnd={() => {
          setSelectedTopic(Icon.name);
        }}
      >
        <TopicIcon Icon={Icon} />
      </Pressable>
      <Text className={`text-sm font-semibold mt-2 ${textColor}`}>
        {Icon.name}
      </Text>
    </View>
  );
}
