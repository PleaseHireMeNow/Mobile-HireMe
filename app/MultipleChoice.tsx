import { Text, View, StyleSheet, Pressable } from 'react-native';
import React, { useState, useMemo } from 'react';
import { Link } from 'expo-router';
import { faker } from '@faker-js/faker';
import MainButton from '../components/ui/Buttons/MainButton';
import FlipCard from 'react-native-flip-card';
import QuestionRating from '../components/ui/QuestionRating/QuestionRating';
import HeaderWrapper from '../components/ui/Navigation/HeaderWrapper';

const initialColorState = {
  A: 'white',
  B: 'white',
  C: 'white',
  D: 'white',
};

const MultipleChoice = () => {
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
      //backgroundColor: '#ffdd43',
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: 105,
      paddingTop: 10,
      flexWrap: 'wrap',
    },
    face: {
      flex: 1,
      //backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      //width: '90vw',
    },
    back: {
      flex: 1,
      // backgroundColor: 'white',
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
          className="w-[90vw] shadow-sm shadow-gray-500 flex items-center rounded-3xl bg-white p-2"
        >
          <Text className="absolute top-6 p-2">
            <Text className="text-6xl text-center">😼</Text>
            {'\n'}
            <Text className="text-base">{randomSentence}?</Text>
          </Text>

          <View className="absolute bottom-20">
            <Pressable
              style={{
                ...styles.pressable,
                backgroundColor: backgroundColor.A,
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
                backgroundColor: backgroundColor.B,
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
                backgroundColor: backgroundColor.C,
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
                backgroundColor: backgroundColor.D,
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
          className="w-[90vw] shadow-sm shadow-gray-500 flex items-center rounded-3xl bg-white p-2"
        >
          <Text className=" absolute top-6 p-2">
            <Text className="text-center text-6xl">😺</Text>
            {'\n'}
            <Text className="text-center text-4xl">Correct!</Text>
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
