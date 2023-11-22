import { Text, View, StyleSheet, Pressable } from 'react-native';
import React, { useState, useMemo } from 'react';
import { Link } from 'expo-router';
import { faker } from '@faker-js/faker';
import MainButton from '../Buttons/MainButton';
import FlipCard from 'react-native-flip-card';

const MultipleChoice = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectAnswer, setSelectAnswer] = useState('');
  const [backgroundColorA, setBackgroundColorA] = useState('');
  const [backgroundColorB, setBackgroundColorB] = useState('');
  const [backgroundColorC, setBackgroundColorC] = useState('');
  const [backgroundColorD, setBackgroundColorD] = useState('');

  const generateRandomData = () => {
    return {
      randomSentence: faker.lorem.sentence({ min: 10, max: 20 }),
      randomAnswerA: faker.lorem.sentence({ min: 1, max: 6 }),
      randomAnswerB: faker.lorem.sentence({ min: 1, max: 6 }),
      randomAnswerC: faker.lorem.sentence({ min: 1, max: 6 }),
      randomAnswerD: faker.lorem.sentence({ min: 1, max: 6 }),
    };
  };

  const {
    randomSentence,
    randomAnswerA,
    randomAnswerB,
    randomAnswerC,
    randomAnswerD,
  } = useMemo(generateRandomData, []); // useMemo ensures data is generated only once


  const styles = StyleSheet.create({
    card: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: 20,
      flexWrap: 'wrap',
    },
    face: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
    back: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
    pressable: {
      backgroundColor: 'white',
    },
  });

  const handleSubmit = () => {
    setIsFlipped(!isFlipped);
  };

  const handleBackgroundColorA = () => {
    setSelectAnswer('A');
    setBackgroundColorA((prevColor) => (prevColor === '#fffd8d' ? 'white' : '#fffd8d'));
  }

  const handleBackgroundColorB = () => {
    setSelectAnswer('B');
    setBackgroundColorB((prevColor) => (prevColor === '#fffd8d' ? 'white' : '#fffd8d'));
  }

  const handleBackgroundColorC = () => {
    setSelectAnswer('C');
    setBackgroundColorC((prevColor) => (prevColor === '#fffd8d' ? 'white' : '#fffd8d'));
  }

  const handleBackgroundColorD = () => {
    setSelectAnswer('D');
    setBackgroundColorD((prevColor) => (prevColor === '#fffd8d' ? 'white' : '#fffd8d'));
  }

  

  return (
    <>
    <Link
        className="text-lg font-semibold text-blue-500 active:scale-105"
        href="/"
      >
        Home
      </Link>
      <FlipCard
        style={styles.card}
        flip={isFlipped}
        // friction={50}
        // perspective={1000}
        flipHorizontal={true}
        flipVertical={false}
        //flip={false}
        clickable={false}
        //onFlipEnd={(isFlipEnd)=>{console.log('isFlipEnd', isFlipEnd)}}
        onFlipEnd={() => {
          console.log('Flip animation has ended');
        }}
      >
        <View
          style={styles.face}
          className="max-w-[90vw] w-[90vw] p-2 my-2 rounded-lg border-solid border-gray-300 border-[1px] shadow-xl"
        >
          <View className="max-w-[80vw] w-[80vw] p-2 my-2 absolute top-4 rounded-lg border-solid border-black border-[1px]">
            <Text>
              <Text className="text-4xl">😼:</Text>
              {'\n'}
              <Text className="text-base">{randomSentence}?</Text>
            </Text>
          </View>
          <View className="absolute bottom-20">
            <Pressable
              style={{
                ...styles.pressable,
                backgroundColor: backgroundColorA,
              }}
              className="max-w-[80vw] w-[80vw] p-2 my-2 rounded-lg border-solid border-black border-[1px]"
              onPress={handleBackgroundColorA}
              >
              <Text>
                <Text className="font-bold">A: </Text>
                <Text>{randomAnswerA}</Text>
              </Text>
            </Pressable>
            <Pressable
              style={{
                ...styles.pressable,
                backgroundColor: backgroundColorB,
              }}
              className="max-w-[80vw] w-[80vw] p-2 my-2 rounded-lg border-solid border-black border-[1px]"
              onPress={handleBackgroundColorB}
              >
              <Text>
                <Text className="font-bold">B: </Text>
                <Text>{randomAnswerB}</Text>
              </Text>
            </Pressable>
            <Pressable
              style={{
                ...styles.pressable,
                backgroundColor: backgroundColorC,
              }}
              className="max-w-[80vw] w-[80vw] p-2 my-2 rounded-lg border-solid border-black border-[1px]"
              onPress={handleBackgroundColorC}
              >
              <Text>
                <Text className="font-bold">C: </Text>
                <Text>{randomAnswerC}</Text>
              </Text>
            </Pressable>
            <Pressable 
              style={{
                ...styles.pressable,
                backgroundColor: backgroundColorD,
              }}
              className="max-w-[80vw] w-[80vw] p-2 my-2 rounded-lg border-solid border-black border-[1px]"
              onPress={handleBackgroundColorD}
              >
              <Text>
                <Text className="font-bold">D: </Text>
                <Text>{randomAnswerD}</Text>
              </Text>
            </Pressable>
          </View>
          <MainButton text="Submit" onPress={handleSubmit} />
        </View>

        <View
          style={styles.back}
          className="max-w-[90vw] w-[90vw] rounded-lg border-solid border-black border-[1px]"
        >
          <Text>The Back</Text>
          <MainButton text="Next" onPress={handleSubmit} />
        </View>
      </FlipCard>
    </>
  );
}
export default MultipleChoice;
