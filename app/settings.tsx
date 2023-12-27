import { Text, View, Pressable } from 'react-native';
import { Link } from 'expo-router';
import HeaderWrapper from '../components/ui/Navigation/HeaderWrapper';

const Settings = () => {
  return (
    <HeaderWrapper>
      <View>
        <Text className="text-4xl text-center my-2">Settings</Text>
      </View>
      <View className="justify-center items-center">
        <Text className="text-xl text-center my-2">Quiz:</Text>
        <View className="flex-row items-center justify-center">
          <View className="items-center">
            <Text className="text-lg">Topic</Text>
            <View className="w-20 h-20 bg-black rounded-full mx-4 my-2 items-center justify-center">
              <Text className="text-lg text-sunglow-300">JS</Text>
            </View>
          </View>

          <View className="items-center">
            <Text className="text-lg">Difficulty</Text>
            <View className="w-20 h-20 bg-black rounded-full mx-4 my-2 items-center justify-center">
              <Text className="text-lg text-sunglow-300">Med</Text>
            </View>
          </View>
        </View>
        <Pressable className="border-b-2 border-black">
          <Link href="/sessionSelect">
            <Text className="text-xl">Update Quiz?</Text>
          </Link>
        </Pressable>
      </View>
    </HeaderWrapper>
  );
};

export default Settings;
