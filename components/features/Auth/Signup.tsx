import React, { useState } from 'react';
import { TextInput, SafeAreaView } from 'react-native';
import MainButton from '../../ui/Buttons/MainButton';

const Signup = () => {
  const [email, setEmail] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSignup = () => {
    // form submission logic here
    console.log(username);
  };

  return (
    <SafeAreaView>
      <TextInput
        onChangeText={(text) => setEmail(text)}
        value={email}
        placeholder="Enter your email"
      />
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
      <MainButton text="Sign Up" onPress={handleSignup} />
    </SafeAreaView>
  );
}

export default Signup;