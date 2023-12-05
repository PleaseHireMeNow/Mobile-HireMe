import { Text, View, StyleSheet, Pressable } from 'react-native';
import React, { useState, useMemo } from 'react';
import { faker } from '@faker-js/faker';
import MainButton from '../components/ui/Buttons/MainButton';
import FlipCard from 'react-native-flip-card';
import QuestionRating from '../components/ui/QuestionRating/QuestionRating';
import HeaderWrapper from '../components/ui/Navigation/HeaderWrapper';

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
  const [selectAnswer, setSelectAnswer] = useState('');
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
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: 120,
      paddingTop: 30,
      flexWrap: 'wrap',
    },
    face: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    back: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    pressable: {
      backgroundColor: 'white',
    },
  });

  return (
    <HeaderWrapper>
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
          className="w-[85vw] shadow-sm shadow-gray-500 flex items-center rounded-3xl bg-white p-2"
        >
          <Text className="absolute p-2 top-6">
            <Text className="text-6xl text-center">
              {imageSources[currentImageIndex]}
            </Text>
            {'\n'}
            <Text className="text-base">{randomSentence}?</Text>
          </Text>
          <View className="absolute bottom-20">
            <Pressable
              style={{
                ...styles.pressable,
                backgroundColor: backgroundColor.A,
              }}
              className="max-w-[80vw] w-[75vw] p-2 my-2 rounded-lg active:border-black border-solid border-gray-500/50 border-[1px] active:border-[2px] shadow-sm shadow-indigo-500/40"
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
              className="max-w-[80vw] w-[75vw] p-2 my-2 rounded-lg active:border-black border-solid border-gray-500/50 border-[1px] active:border-[2px] shadow-sm shadow-indigo-500/40"
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
              className="max-w-[80vw] w-[75vw] p-2 my-2 rounded-lg active:border-black border-solid border-gray-500/50 border-[1px] active:border-[2px] shadow-sm shadow-indigo-500/40"
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
              className="max-w-[80vw] w-[75vw] p-2 my-2 rounded-lg active:border-black border-solid border-gray-500/50 border-[1px] active:border-[2px] shadow-sm shadow-indigo-500/40"
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
          className="w-[90vw] shadow-sm shadow-gray-500 flex items-center rounded-3xl bg-white p-2"
        >
          <Text className="absolute p-2 top-6">
            <Text className="text-6xl text-center">😺</Text>
            {'\n'}
            <Text className="text-4xl text-center">Correct!</Text>
          </Text>
          <View className="p-4">
            <Text className="text-lg">{correctAnswer}</Text>
          </View>
          <QuestionRating />
          <MainButton text="Next" onPress={handleNextButton} />
        </View>
      </FlipCard>
    </HeaderWrapper>
  );
};
export default MultipleChoice;
