import { Slot } from 'expo-router';
import { UserContextProvider } from '../context/UserContext';
import { View } from 'react-native';
import { SessionFormContextProvider } from '../context/SessionFormContext';
import TopTab from '../components/ui/Navigation/TopTab';

// Base layout for the app

export default function Layout() {
  return (
    <UserContextProvider>
      <SessionFormContextProvider>
        <View className="flex pt-20 items-center flex-1 bg-sunglow-300">
          <Slot />
        </View>
      </SessionFormContextProvider>
    </UserContextProvider>
  );
}
