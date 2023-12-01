import React, { useState } from 'react';
import { TextInput, Text, View } from 'react-native';
import { Link } from 'expo-router';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import AuthButton from '../../ui/Buttons/AuthButton';

export default function LoginForm() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = () => {
    // form submission logic here
    console.log(username);
  };

  return (
    <>
      {/* gap-y-6 shadow-sm shadow-gray-500 flex items-center rounded-3xl bg-white */}
      <View className="flex items-center justify-center w-screen h-screen p-2 overflow-hidden bg-yellow-400 dark:bg-gray-800">
        <View className="justify-center w-4/5 py-5 bg-white shadow-sm shadow-gray-400 bottom-14 h-1/2 shadow-3xl rounded-3xl">
          <View className="flex w-1/6 p-4 mx-auto bg-gray-800 rounded-full shadow shadow-gray-200">
            <Icon2 name="login" size={20} color="white" />
          </View>
          <View className="px-12 py-10">
            <View className="flex items-center mb-4 text-lg">
              <Icon
                name="user"
                size={20}
                style={{
                  position: 'absolute',
                  zIndex: 10,
                  top: 10,
                  left: 10,
                }}
              />
              <TextInput
                className="w-full py-3 pl-12 bg-gray-200 rounded-lg focus:shadow-sm focus:shadow-gray-400 focus:outline-none"
                onChangeText={(text) => setUsername(text)}
                value={username}
                placeholder="Username"
                id="username"
              />
            </View>
            <View className="flex items-center mb-4 text-lg">
              <Icon
                name="lock"
                size={20}
                style={{
                  position: 'absolute',
                  zIndex: 10,
                  top: 10,
                  left: 10,
                }}
              />
              <TextInput
                className="w-full py-3 pl-12 bg-gray-200 rounded-lg focus:shadow-sm focus:shadow-gray-400 focus:outline-none"
                onChangeText={(text) => setPassword(text)}
                value={password}
                placeholder="Password"
                secureTextEntry // Hides password
              />
            </View>
            <View className="items-center py-4">
              <AuthButton text="Login" onPress={handleLogin} />
            </View>
          </View>
          <Text className="text-center underline">
            <Link href="/signup">Create an account? Signup</Link>
          </Text>
        </View>
      </View>
    </>
  );
}
