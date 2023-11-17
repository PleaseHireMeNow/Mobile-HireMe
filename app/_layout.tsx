import { Slot } from 'expo-router';
import { UserContextProvider } from '../context/UserContext';
import { View } from 'react-native';

// Base layout for the app

export default function Layout() {
  return (
    <UserContextProvider>
      <View className="flex flex-1">
        <Slot />
      </View>
    </UserContextProvider>
  );
}
