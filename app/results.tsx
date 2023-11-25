import { Text, View, StyleSheet, Pressable, Share } from 'react-native';
import { Link } from 'expo-router';
import { faker } from '@faker-js/faker';
import MainButton from '../components/ui/Buttons/MainButton';
import ShareButton from '../components/ui/Buttons/ShareButton';

export default function ResultsPage() {

    const randomPercentNumber = faker.number.int({ min: 10, max: 96 });
    const randomMinutesNumber = faker.number.int({ min: 4, max: 22 }); 

  return (
    <View className="justify-center items-center bg-sunglow-300 h-full w-[100vw]">
      <Link
        className="text-lg font-semibold text-blue-500 active:scale-105 absolute top-4 left-4"
        href="/"
      >
        Home
      </Link>
      <Text className="text-8xl text-center">😼</Text>
      <View className="flex justify-center items-center w-[90vw] bg-white px-1 py-6 my-2 rounded-lg border-solid black border-[1px] shadow-xl">
        <Text className="text-3xl text-center">Test Complete!</Text>
        <View className="relative left-32">
          <ShareButton />
        </View>

        <View className="flex flex-row">
          <View className="px-6 py-8 m-4  bg-white rounded-lg border-solid black border-[1px] shadow-xl">
            <Text className="text-xl">⏲ {randomMinutesNumber} min</Text>
          </View>
          <View className="px-6 py-8 m-4 bg-white rounded-lg border-solid black border-[1px] shadow-xl">
            <Text className="text-xl">🎯 %{randomPercentNumber}</Text>
          </View>
        </View>
      </View>
      <View className="items-center mt-32">
        <MainButton text="Continue" onPress={() => alert('just kidding')} />
      </View>
    </View>
  );
}
