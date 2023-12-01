import { Text, View, StyleSheet, Pressable, Image } from 'react-native';
import React, { useState, useMemo } from 'react';
import { Link } from 'expo-router';
import { faker } from '@faker-js/faker';
import MainButton from '../Buttons/MainButton';
import FlipCard from 'react-native-flip-card';
import Icon from 'react-native-vector-icons/FontAwesome';


const imageSources = ['🐶', '🐱'];

const initialColorState = {
  A: 'white',
  B: 'white',
  C: 'white',
  D: 'white',
};

const MultipleChoice = () => {
  // Image randomization
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const getRandomImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageSources.length);
  };

  const [isFlipped, setIsFlipped] = useState(false);
  const [_, setSelectAnswer] = useState('');
  const [nextButtonPressed, setNextButtonPressed] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState(initialColorState);

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
    setBackgroundColor(initialColorState);
    getRandomImage(); // Toggle the image
  };

  const handleSelectAnswer = (selectAnswer: string) => {
    setSelectAnswer(selectAnswer);
    setBackgroundColor(initialColorState);
    setBackgroundColor((prevColors) => ({
      ...prevColors,
      [selectAnswer]: '#ffee87',
    }));
  };

  const styles = StyleSheet.create({
    card: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: 20,
      flexWrap: 'wrap',
      maxHeight: '80%',
      borderRadius: 16,
      overflow: 'hidden',
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
    <View className="h-full pt-12 rounded-lg shadow-sm shadow-gray-400">
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
          className="max-w-[90vw] w-[90vw]"
        >
          
            <Text className='absolute p-2 top-10'>
              <Text className="text-6xl text-center">{imageSources[currentImageIndex]}</Text>
              {'\n'}
              <Text className="text-xl">{randomSentence}?</Text>
            </Text>
          
          <View className="absolute bottom-20">
            <Pressable
              style={{
                ...styles.pressable,
                backgroundColor: backgroundColor.A,
              }}
              className="max-w-[80vw] w-[80vw] p-2 my-2 rounded-lg active:border-black border-solid border-gray-500/50 border-[1px] active:border-[2px] shadow-sm shadow-indigo-500/40"
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
                backgroundColor: backgroundColor.B,
              }}
              className="max-w-[80vw] w-[80vw] p-2 my-2 rounded-lg active:border-black border-solid border-gray-500/50 border-[1px] active:border-[2px] shadow-sm shadow-indigo-500/40"
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
                backgroundColor: backgroundColor.C,
              }}
              className="max-w-[80vw] w-[80vw] p-2 my-2 rounded-lg active:border-black border-solid border-gray-500/50 border-[1px] active:border-[2px] shadow-sm shadow-indigo-500/40"
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
                backgroundColor: backgroundColor.D,
              }}
              className="max-w-[80vw] w-[80vw] p-2 my-2 rounded-lg active:border-black border-solid border-gray-500/50 border-[1px] active:border-[2px] shadow-sm shadow-indigo-500/40"
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
          <Text className="absolute p-2 top-10">
            <Text className="text-6xl text-center">😺</Text>
            {'\n'}
            <Text className="text-4xl text-center">Correct!</Text>
          </Text>

          <View className="p-4">
            <Text className="text-xl">{correctAnswer}</Text>
          </View>
          <Link
            className="mt-16 font-semibold text-blue-500 text-md active:scale-105"
            href="/"
          >
            Rate this question
          </Link>
          <MainButton text="Next" onPress={handleNextButton} />
        </View>
      </FlipCard>
    </View>
  );
};
export default MultipleChoice;
