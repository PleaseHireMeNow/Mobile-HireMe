import { faker } from '@faker-js/faker';
import { Text, View, Image } from 'react-native';
import MainButton from '../components/ui/Buttons/MainButton';
import ShareButton from '../components/ui/Buttons/ShareButton';
import HeaderWrapper from '../components/ui/Navigation/HeaderWrapper';
import { router } from 'expo-router';
import { useContext, useEffect, useMemo } from 'react';
import {
  CurrentSessionContext,
  ICurrentSessionContext,
} from '../context/CurrentSessionContext';

export default function ResultsPage() {
  const { currentScore, setCurrentScore } = useContext(
    CurrentSessionContext
  ) as ICurrentSessionContext;

  const scorePercentage: number = useMemo(() => {
    console.log(currentScore);
    if (currentScore.correct === 0 && currentScore.incorrect === 0) {
      return 0;
    }
    const totalQuestions = currentScore.incorrect + currentScore.correct;
    const score = (currentScore.correct / totalQuestions) * 100;
    return Math.round(score);
  }, []);

  useEffect(() => {
    setCurrentScore({ correct: 0, incorrect: 0 }); // reset score
  }, []);

  const randomPercentNumber = faker.number.int({ min: 10, max: 96 });
  const randomMinutesNumber = faker.number.int({ min: 4, max: 22 });

  return (
    <HeaderWrapper dropdown disableBack>
      <View className="justify-center items-center bottom-24 h-full w-[100vw]">
        <Text className="text-center shadow-sm text-8xl shadow-white">
          <Image
            source={require('../assets/images/codedog.gif')}
            style={{ width: 250, height: 200 }}
          />
        </Text>
        <View className="flex justify-center items-center w-[85vw] bg-white px-1 py-6 my-2 rounded-3xl border-solid border-gray-500/30 border-[1px] shadow-sm shadow-gray-400">
          <Text className="text-3xl text-center">Test Complete!</Text>
          <View className="relative shadow-sm left-32 shadow-indigo-500/50">
            <ShareButton />
          </View>

          <View className="flex flex-row">
            <View className="px-6 py-8 m-4 bg-white rounded-2xl border-solid border-gray-500/30 border-[1px] shadow-sm shadow-indigo-500/40">
              <Text className="text-xl">⏲ {randomMinutesNumber} min</Text>
            </View>
            <View className="px-6 py-8 m-4 bg-white rounded-2xl border-solid border-gray-500/30 border-[1px] shadow-sm shadow-indigo-500/40">
              <Text className="text-xl">
                🎯 %{scorePercentage ? scorePercentage : randomPercentNumber}
              </Text>
            </View>
          </View>
        </View>
        <View className="items-center top-24">
          <MainButton text="Continue" onPress={() => router.push('/')} />
        </View>
      </View>
    </HeaderWrapper>
  );
}
