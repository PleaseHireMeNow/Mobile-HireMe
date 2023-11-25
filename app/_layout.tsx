import { Slot } from 'expo-router';
import { UserContextProvider } from '../context/UserContext';
import { View } from 'react-native';
import { SessionFormContextProvider } from '../context/SessionFormContext';

// Base layout for the app

export default function Layout() {
  return (
    <UserContextProvider>
      <SessionFormContextProvider>
        <View
          style={{ backgroundColor: '#ffdd43' }}
          className="flex pt-20 px-8 items-center flex-1"
        >
          <Slot />
        </View>
      </SessionFormContextProvider>
    </UserContextProvider>
  );
}
