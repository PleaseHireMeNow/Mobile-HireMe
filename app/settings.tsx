import { Text, View, Pressable, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import HeaderWrapper from '../components/ui/Navigation/HeaderWrapper';
import Icon from 'react-native-vector-icons/FontAwesome';

const Settings = () => {
  return (
    <HeaderWrapper>
      <View className="mt-20 mb-5">
        <Text className="mx-4 text-3xl font-bold text-center ">
          Settings {' '}
          <Icon
            name="user"
            size={35}
          />
        </Text>

        <View className="items-center justify-center mx-4 my-2 rounded-full"></View>
      </View>
      <View>
        <View className="items-center m-3">
          <Text className="text-2xl">Username</Text>
          <View className="items-center justify-center w-20 h-10 mx-4 my-2 rounded-full bg-sunglow-950">
            <Text className="text-lg text-white">Edit</Text>
          </View>
        </View>
        <View className="items-center m-3">
          <Text className="text-2xl">Password</Text>
          <View className="items-center justify-center w-20 h-10 mx-4 my-2 rounded-full bg-sunglow-950">
            <Text className="text-lg text-white">Edit</Text>
          </View>
        </View>
        <View className="items-center m-3">
          <Text className="text-2xl">Email</Text>
          <View className="items-center justify-center w-20 h-10 mx-4 my-2 rounded-full bg-sunglow-950">
            <Text className="text-lg text-white">Edit</Text>
          </View>
        </View>
        <View className="items-center m-4">
          <Pressable>
            <Link href="/sessionSelect">
              <Text className="text-xl underline active:font-bold">
                Start New Session?
              </Text>
            </Link>
          </Pressable>
        </View>
        <View className="items-center m-4 ">
          <Pressable>
            <Link href="/">
              <Text className="text-xl underline active:font-bold">
                Log out
              </Text>
            </Link>
          </Pressable>
        </View>
      </View>
    </HeaderWrapper>
  );
};

export default Settings;
