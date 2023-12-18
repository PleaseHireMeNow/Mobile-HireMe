import { Text, View } from 'react-native';
import { Link } from 'expo-router';
import MainButton from '../components/ui/Buttons/MainButton';
import SecondaryButton from '../components/ui/Buttons/SecondaryButton';
import AuthButton from '../components/ui/Buttons/AuthButton';
import { router } from 'expo-router';

export default function Page() {
  return (
    <View className="items-center justify-around flex-1">
      <View>
      <Link
          className="text-lg font-semibold text-blue-500 rounded-lg"
          href="/dashboard"
        >
          Dashboard
        </Link>
      <Link
          className="text-lg font-semibold text-blue-500 rounded-lg"
          href="/dropdown"
        >
          Dropdown
        </Link>
        <Link
          className="text-lg font-semibold text-blue-500 rounded-lg"
          href="/signup"
        >
          Sign Up
        </Link>
        <Link
          className="text-lg font-semibold text-blue-500 rounded-lg"
          href="/login"
        >
          Log in
        </Link>
        <Link
          className="text-lg font-semibold text-blue-500 rounded-lg"
          href="/doesnotexist"
        >
          Does Not Exist
        </Link>
        <Link
          className="text-lg font-semibold text-blue-500 rounded-lg"
          href="/multipleChoice"
        >
          Flashcard
        </Link>
        <Link
          className="text-lg font-semibold text-blue-500 rounded-lg"
          href="/results"
        >
          Results Page
        </Link>
        <Link href="/sessionSelect">
          <Text className="text-lg font-semibold text-blue-500 rounded-lg">
            Session Select
          </Text>
        </Link>
      </View>
      <SecondaryButton
        text="start user flow"
        onPress={() => router.push('/signup')}
      />
      <AuthButton text="Log In" onPress={() => alert('Test Test')} />
      <MainButton text="PRESS ME" onPress={() => alert('HI THERE')} />
    </View>
  );
}
