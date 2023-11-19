import { Stack } from 'expo-router';
import { UserContextProvider } from '../context/UserContext';

export default function StackLayout() {
  return (
    <UserContextProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </UserContextProvider>
  );
}
