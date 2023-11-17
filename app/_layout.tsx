import { Slot } from 'expo-router';
import { UserContextProvider } from '../context/UserContext';
import { View, StyleSheet } from 'react-native';

export default function Layout() {
  return (
    <UserContextProvider>
      <View style={styles.container}>
        <Slot />
      </View>
    </UserContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    marginTop: 50,
  },
});
