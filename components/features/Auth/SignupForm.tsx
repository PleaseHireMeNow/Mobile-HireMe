import React, { useState } from 'react';
import { TextInput, Text, View } from 'react-native';
import { Link } from 'expo-router';
import AuthButton from '../../ui/Buttons/AuthButton';
import { Path, Svg } from 'react-native-svg';

export default function SignupForm() {
  const [email, setEmail] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSignup = () => {
    // form submission logic here
    console.log(username);
  };

  return (
    <View className="flex items-center justify-center w-screen h-screen p-2 overflow-hidden bg-yellow-400 dark:bg-gray-800">
      <View className="justify-center w-4/5 py-5 bg-white bottom-10 h-1/2 shadow-3xl rounded-3xl">
        <View className="px-12 py-10">
          <View className="flex items-center mb-4 text-lg ">
            <Svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              className="absolute z-10 top-2 left-4 "
              fill="#000000"
            >
              <Path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
            </Svg>
            <TextInput
              className="w-full py-3 pl-12 bg-gray-200 rounded-lg focus:outline-none"
              onChangeText={(text) => setEmail(text)}
              value={email}
              placeholder="Email"
              id="email"
            />
          </View>

          <View className="flex items-center mb-4 text-lg ">
            <Svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              className="absolute z-10 top-2 left-4 "
            >
              <Path d="M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z" />
            </Svg>
            <TextInput
              className="w-full py-3 pl-12 bg-gray-200 rounded-lg focus:outline-none"
              onChangeText={(text) => setUsername(text)}
              value={username}
              placeholder="Username"
              id="username"
            />
          </View>

          <View className="flex items-center mb-4 text-lg ">
            <Svg
              width="20"
              height="20"
              className="absolute z-10 top-2 left-4"
              viewBox="0 0 24 24"
            >
              <Path d="m18.75 9h-.75v-3c0-3.309-2.691-6-6-6s-6 2.691-6 6v3h-.75c-1.24 0-2.25 1.009-2.25 2.25v10.5c0 1.241 1.01 2.25 2.25 2.25h13.5c1.24 0 2.25-1.009 2.25-2.25v-10.5c0-1.241-1.01-2.25-2.25-2.25zm-10.75-3c0-2.206 1.794-4 4-4s4 1.794 4 4v3h-8zm5 10.722v2.278c0 .552-.447 1-1 1s-1-.448-1-1v-2.278c-.595-.347-1-.985-1-1.722 0-1.103.897-2 2-2s2 .897 2 2c0 .737-.405 1.375-1 1.722z" />
            </Svg>
            <TextInput
              className="w-full py-3 pl-12 bg-gray-200 rounded-lg focus:outline-none"
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
      
      <View>
        {/* Need to move this somewhere */}
        <Link
          className="text-lg font-semibold text-blue-500 active:scale-105"
          href="/"
        >
          Home
        </Link>
      </View>
      
    </View>
  );
}
