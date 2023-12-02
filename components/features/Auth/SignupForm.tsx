import React, { useState } from 'react';
import { TextInput, Text, View } from 'react-native';
import { Link } from 'expo-router';
import AuthButton from '../../ui/Buttons/AuthButton';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function SignupForm() {
  const [email, setEmail] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSignup = () => {
    // form submission logic here
    console.log(username);
  };

  return (
    <View className="flex items-center justify-center w-screen h-screen p-2 overflow-hidden dark:bg-gray-800">
      <View className="justify-center w-4/5 py-5 bg-white shadow-sm shadow-gray-400 bottom-20 h-1/2 shadow-3xl rounded-3xl">
        <View className="px-12 py-10">
          <View className="flex items-center mb-4 text-lg ">
            <Icon
              name="envelope"
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
              onChangeText={(text) => setEmail(text)}
              value={email}
              placeholder="Email"
              id="email"
            />
          </View>
          <View className="flex items-center mb-4 text-lg ">
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
          <View className="flex items-center mb-4 text-lg ">
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
            <AuthButton text="Signup" onPress={handleSignup} />
          </View>
        </View>
        <Text className="text-center underline">
          <Link href="/login">Have an account? Login</Link>
        </Text>
      </View>
    </View>
  );
}
