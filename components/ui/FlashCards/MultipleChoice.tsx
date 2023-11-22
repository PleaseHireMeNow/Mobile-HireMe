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
  const [nextButtonPressed, setNextButtonPressed] = useState(false);

  const generateRandomData = () => {
    return {
      randomSentence: faker.lorem.sentence({ min: 10, max: 20 }),
      randomAnswerA: faker.lorem.sentence({ min: 1, max: 6 }),
      randomAnswerB: faker.lorem.sentence({ min: 1, max: 6 }),
      randomAnswerC: faker.lorem.sentence({ min: 1, max: 6 }),
      randomAnswerD: faker.lorem.sentence({ min: 1, max: 6 }),
      correctAnswer: faker.lorem.sentence({ min: 10, max: 20 }),
    };
  };

  const {
    randomSentence,
    randomAnswerA,
    randomAnswerB,
    randomAnswerC,
    randomAnswerD,
    correctAnswer,
  } = useMemo(generateRandomData, [nextButtonPressed]); // useMemo ensures data is generated only once

  const handleSubmit = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNextButton = () => {
    setIsFlipped(!isFlipped);
    setNextButtonPressed(!nextButtonPressed); // Toggle the state to trigger useMemo recalculation
    setBackgroundColorA('white');
    setBackgroundColorB('white');
    setBackgroundColorC('white');
    setBackgroundColorD('white');
  };

  const handleSelectAnswer = (selectAnswer: string) => { //typescript!
    setSelectAnswer(selectAnswer);

    // Reset all background colors to white
    setBackgroundColorA('white');
    setBackgroundColorB('white');
    setBackgroundColorC('white');
    setBackgroundColorD('white');

    // Set the background color of the selected answer to yellow
    switch (selectAnswer) {
      case 'A':
        setBackgroundColorA('#ffee87');
        break;
      case 'B':
        setBackgroundColorB('#ffee87');
        break;
      case 'C':
        setBackgroundColorC('#ffee87');
        break;
      case 'D':
        setBackgroundColorD('#ffee87');
        break;
      default:
        break;
    }
  };

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
        // friction={50} // higher number = more friction
        // perspective={1000} // lower number = more flat
        flipHorizontal={true}
        flipVertical={false}
        clickable={false} 
        //onFlipEnd={(isFlipEnd)=>{console.log('isFlipEnd', isFlipEnd)}}
      >
        <View
          style={styles.face}
          className="max-w-[90vw] w-[90vw] p-2 my-2 rounded-lg border-solid border-gray-300 border-[1px] shadow-xl"
        >
          
            <Text className='absolute top-4 p-2'>
              <Text className="text-6xl text-center">😼</Text>
              {'\n'}
              <Text className="text-xl">{randomSentence}?</Text>
            </Text>
          
          <View className="absolute bottom-20">
            <Pressable
              style={{
                ...styles.pressable,
                backgroundColor: backgroundColorA,
              }}
              className="max-w-[80vw] w-[80vw] p-2 my-2 rounded-lg border-solid border-black border-[1px]"
              onPress={() => handleSelectAnswer('A')}
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
              onPress={() => handleSelectAnswer('B')}
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
              onPress={() => handleSelectAnswer('C')}
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
              onPress={() => handleSelectAnswer('D')}
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
          className="max-w-[90vw] w-[90vw] rounded-lg border-solid border-gray-300 border-[1px] shadow-xl"
        >
          <Text className=" absolute top-4 p-2">
            <Text className="text-center text-6xl">😺</Text>
            {'\n'}
            <Text className="text-center text-4xl">Correct!</Text>
          </Text>

          <View className="p-4">
            <Text className="text-xl">{correctAnswer}</Text>
          </View>
          <Link
            className="text-md mt-16 font-semibold text-blue-500 active:scale-105"
            href="/"
          >
            Rate this question
          </Link>
          <MainButton text="Next" onPress={handleNextButton} />
        </View>
      </FlipCard>
    </>
  );
};
export default MultipleChoice;
