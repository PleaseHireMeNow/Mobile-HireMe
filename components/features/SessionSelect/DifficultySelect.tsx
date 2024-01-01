import { useContext } from 'react';
import { View, Text, Pressable } from 'react-native';
import {
  ISessionFormContext,
  SessionFormContext,
} from '../../../context/SessionFormContext';
import type { DifficultyTypes } from '../../../types/models/Stack';

export default function DifficultySelect() {
  const { selectedDifficulty, setSelectedDifficulty } = useContext(
    SessionFormContext
  ) as ISessionFormContext;
  const difficulties = [
    'entry-level',
    'mid-level',
    'expert-level',
  ] as DifficultyTypes[];

  return (
    <View className="flex items-center py-4 font-thin bg-white shadow-sm shadow-gray-400 rounded-3xl">
      <View className="flex flex-row gap-x-4">
        {difficulties.map((difficulty) => {
          const difficultyStyle =
            selectedDifficulty === difficulty ? 'bg-indigo-700' : 'bg-gray-200';
          const textColor =
            selectedDifficulty === difficulty
              ? 'text-white font-bold'
              : 'text-gray-500';

          const difficultyText = difficulty.split('-')[0];

          return (
            <Pressable
              className={`h-20 w-20 flex items-center active:scale-105 justify-center ${difficultyStyle} rounded-full`}
              key={difficulty}
              onPress={() => setSelectedDifficulty(difficulty)}
            >
              <Text className={`text-lg ${textColor}`}>
                {difficultyText[0].toUpperCase() + difficultyText.slice(1)}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}
