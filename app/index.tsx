import { Text, View } from 'react-native';
import { Link } from 'expo-router';
import MainButton from '../components/ui/Buttons/MainButton';
import SecondaryButton from '../components/ui/Buttons/SecondaryButton';
import NewButton from '../components/ui/Buttons/NewButton';
import PreviousButton from '../components/ui/Buttons/PreviousButton';
import AuthButton from '../components/ui/Buttons/AuthButton';
import { router } from 'expo-router';
import HeaderWrapper from '../components/ui/Navigation/HeaderWrapper';

export default function Page() {
  return (
    <HeaderWrapper>
    <View className="items-center flex-1 my-10 "> 
      <Link
          className="my-2 text-lg font-semibold rounded-lg text-sunglow-950"
          href="/dashboard"
        >
          Dashboard
        </Link>
        <Link
          className="my-2 text-lg font-semibold rounded-lg text-sunglow-950"
          href="/signup"
        >
          Sign Up
        </Link>
        <Link
          className="pb-5 my-2 text-lg font-semibold rounded-lg text-sunglow-950"
          href="/login"
        >
          Log in
        </Link>
      {/* <View>
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
        <Link href="/settings">
          <Text className="text-lg font-semibold text-blue-500 rounded-lg">
            Settings
          </Text>
        </Link>
      </View>
      <NewButton
        text="signup test"
        onPress={() => router.push('/signup')}
      />
      <PreviousButton
        text="login test"
        onPress={() => router.push('/login')}
      /> */}
       <SecondaryButton
        text="Get Started"
        onPress={() => router.push('/sessionSelect')}
        imageSource={require('../assets/images/dog.gif')}
      />
      {/* <AuthButton text="Log In" onPress={() => alert('Test Test')} />
      <MainButton text="PRESS ME" onPress={() => alert('HI THERE')} /> */}
    </View>
    </HeaderWrapper>
  );
}
