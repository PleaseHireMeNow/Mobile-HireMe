import { Slot } from 'expo-router';
import { UserContextProvider } from '../context/UserContext';
import { View } from 'react-native';

// Base layout for the app

export default function Layout() {
  return (
    <UserContextProvider>
      <View
        style={{ backgroundColor: '#ffdd43' }}
        className="flex pt-20 px-8 items-center flex-1"
      >
        <Slot />
      </View>
    </UserContextProvider>
  );
}
