import { useContext } from 'react';
import { View, Text, Pressable } from 'react-native';
import {
  Difficulty,
  ISessionFormContext,
  SessionFormContext,
} from '../../../context/SessionFormContext';

export default function DifficultySelect() {
  const { selectedDifficulty, setSelectedDifficulty } = useContext(
    SessionFormContext
  ) as ISessionFormContext;
  const difficulties = ['Easy', 'Med', 'Hard', 'Pro'] as Difficulty[];

  return (
    <View className="shadow-sm shadow-gray-500 font-thin flex py-4 items-center rounded-3xl bg-white">
      <View className="flex flex-row gap-x-4">
        {difficulties.map((difficulty) => {
          const difficultyStyle =
            selectedDifficulty === difficulty ? 'bg-indigo-700' : 'bg-gray-200';
          const textColor =
            selectedDifficulty === difficulty
              ? 'text-white font-bold'
              : 'text-gray-500';

          return (
            <Pressable
              className={`h-16 w-16 flex items-center active:scale-105 justify-center ${difficultyStyle} rounded-full`}
              key={difficulty}
              onPress={() => setSelectedDifficulty(difficulty)}
            >
              <Text className={`text-lg ${textColor}`}>{difficulty}</Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}
