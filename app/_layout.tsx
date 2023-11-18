import { Stack, Slot } from 'expo-router';
import { UserContextProvider } from '../context/UserContext';


const StackLayout = () => {
  return (
    <UserContextProvider>
    <Stack>
      <Stack.Screen name="(tabs)" options={{headerShown:false}}/>
    </Stack>
    </UserContextProvider>
  );
}

export default StackLayout;