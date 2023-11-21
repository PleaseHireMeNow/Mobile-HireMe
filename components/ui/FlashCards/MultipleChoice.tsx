import { Text, View, StyleSheet, ViewStyle } from 'react-native';
import { Link } from 'expo-router';
import { faker } from '@faker-js/faker';
import MainButton from '../Buttons/MainButton';
import FlipCard from 'react-native-flip-card';

export default function MultipleChoice() {
  const randomSentence = faker.lorem.sentence({ min: 5, max: 20 });
  const randomAnswerA = faker.lorem.sentence({ min: 1, max: 6 });
  const randomAnswerB = faker.lorem.sentence({ min: 1, max: 6 });
  const randomAnswerC = faker.lorem.sentence({ min: 1, max: 6 });
  const randomAnswerD = faker.lorem.sentence({ min: 1, max: 6 });

  const styles = StyleSheet.create({
    card: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    face: {
      flex: 1,
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
    },
    back: {
      flex: 1,
      backgroundColor: 'blue',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  return (
    <>
      <FlipCard
        style={styles.card}
        friction={6}
        perspective={1000}
        flipHorizontal={true}
        flipVertical={false}
        flip={false}
        clickable={true}
        //onFlipEnd={(isFlipEnd)=>{console.log('isFlipEnd', isFlipEnd)}}
        onFlipEnd={() => {
          console.log('Flip animation has ended');
        }}
      >
        <View style={styles.face}>
          <Text>The Face</Text>
        </View>

        <View style={styles.back}>
          <Text>The Back</Text>
        </View>
      </FlipCard>
    </>
  );
}
