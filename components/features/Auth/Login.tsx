import React, { useState } from 'react';
import { TextInput, SafeAreaView } from 'react-native';
import MainButton from '../../ui/Buttons/MainButton';

const Login = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = () => {
    // form submission logic here
    console.log(username);
  };

  return (
    <SafeAreaView>
      <TextInput
        onChangeText={(text) => setUsername(text)}
        value={username}
        placeholder="Enter your username"
      />
      <TextInput
        onChangeText={(text) => setPassword(text)}
        value={password}
        placeholder="Enter your password"
        secureTextEntry // Hides password 
      />
      <MainButton text="Log In" onPress={handleLogin} />
    </SafeAreaView>
  );
}

export default Login;