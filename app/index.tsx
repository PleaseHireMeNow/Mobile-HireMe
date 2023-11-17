import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { IUserContext, UserContext } from '../context/UserContext';
import { useContext } from 'react';
import MainButton from '../components/ui/Buttons/MainButton';

export default function Page() {
  const { user, exampleName } = useContext(UserContext) as IUserContext;

  return (
    <View style={styles.container}>
      <View>
        <Link style={styles.link} href="/about">
          About
        </Link>
        <Link style={styles.link} href="/doesnotexist">
          Does Not Exist
        </Link>
      </View>
      <View>
        <Text>
          {user ? `Hello, ${user.username}!` : 'You are not logged in.'}
        </Text>
        <Text>{exampleName} FROM USE CONTEXT</Text>
      </View>
      <MainButton text="PRESS ME" onPress={() => alert('HI THERE')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  link: {
    color: 'blue',
    fontSize: 20,
  },
});
