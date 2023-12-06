import { Slot } from 'expo-router';
import { UserContextProvider } from '../context/UserContext';
import { View } from 'react-native';
import { SessionFormContextProvider } from '../context/SessionFormContext';
import { CurrentSessionContextProvider } from '../context/CurrentSessionContext';

// Base layout for the app

export default function Layout() {
  return (
    <UserContextProvider>
      <CurrentSessionContextProvider>
        <SessionFormContextProvider>
          <View className="flex items-center flex-1 pt-20 bg-sunglow-400">
            <Slot />
          </View>
        </SessionFormContextProvider>
      </CurrentSessionContextProvider>
    </UserContextProvider>
  );
}
