import { Text, View } from 'react-native';
import { Link } from 'expo-router';
import { IUserContext, UserContext } from '../../context/UserContext';
import { useContext } from 'react';
import MainButton from '../../components/ui/Buttons/MainButton';
import SecondaryButton from '../../components/ui/Buttons/SecondaryButton';

export default function Home() {
  const { user, exampleName } = useContext(UserContext) as IUserContext; // annotation is required for typescript

  return (
    <View className="items-center justify-around flex-1 bg-sunglow-300">
      <View>
        <Link
          className="text-lg font-semibold text-blue-500 rounded-lg"
          href="/about"
        >
          About
        </Link>
        <Link
          className="text-lg font-semibold text-blue-500 rounded-lg"
          href="/doesnotexist"
        >
          Does Not Exist
        </Link>
      </View>
      <View className="flex flex-row gap-4">
        <Text className="font-bold text-red-700">
          {user ? `Hello, ${user.username}!` : 'You are not logged in.'}
        </Text>
        <Text className="text-green-700">{exampleName} FROM USE CONTEXT</Text>
      </View>
      <SecondaryButton text="big round" onPress={() => alert('I am round')} />
      <MainButton text="PRESS ME" onPress={() => alert('HI THERE')} />
    </View>
  );
}
