import { Text, View, StyleSheet, Pressable } from 'react-native';
import { useState, useContext, useEffect } from 'react';
import MainButton from '../components/ui/Buttons/MainButton';
import FlipCard from 'react-native-flip-card';
import QuestionRating from '../components/ui/QuestionRating/QuestionRating';
import HeaderWrapper from '../components/ui/Navigation/HeaderWrapper';
import {
  CurrentSessionContext,
  ICurrentSessionContext,
} from '../context/CurrentSessionContext';
import { Link, router } from 'expo-router';

const imageSources = ['🐶', '🐱'];

type AnswerLetter = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G';

const initialColorState: Record<AnswerLetter, string> = {
  A: 'white',
  B: 'white',
  C: 'white',
  D: 'white',
  E: 'white',
  F: 'white',
  G: 'white',
};

const MultipleChoice = () => {
  const {
    questions,
    currentQuestionIndex,
    setCurrentQuestionIndex,
    currentScore,
    setCurrentScore,
  } = useContext(CurrentSessionContext) as ICurrentSessionContext;
  if (!questions) {
    return (
      <View>
        <Text>
          There was an error loading the questions. Please try again later.
        </Text>
        <Link href="/">Home</Link>
      </View>
    );
  }

  useEffect(() => {
    setCurrentQuestion(questions[currentQuestionIndex]);
  }, [currentQuestionIndex]);

  // Image randomization
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const getRandomImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageSources.length);
  };

  const [isFlipped, setIsFlipped] = useState(false);
  const [nextButtonPressed, setNextButtonPressed] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState(initialColorState);
  const [isCorrect, setIsCorrect] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(
    questions[currentImageIndex]
  );

  const handleSubmit = () => {
    setIsFlipped(!isFlipped);
    if (isCorrect) {
      setCurrentScore((score) => {
        return {
          ...score,
          correct: currentScore.correct + 1,
        };
      });
    } else {
      setCurrentScore((score) => {
        return {
          ...score,
          incorrect: currentScore.incorrect + 1,
        };
      });
    }
  };

  const handleNextButton = () => {
    if (currentQuestionIndex + 1 === questions.length) {
      setCurrentQuestionIndex(0);
      router.push('/results'); // we finished all questions
      return;
    }

    setCurrentQuestionIndex((prev) => prev + 1); // move to next question

    setIsFlipped(!isFlipped);
    setNextButtonPressed(!nextButtonPressed); // Toggle the state to trigger useMemo recalculation
    setBackgroundColor(initialColorState);
    getRandomImage(); // Toggle the image
  };

  const handleSelectAnswer = (selectAnswer: string, isCorrect: boolean) => {
    setIsCorrect(isCorrect);
    setBackgroundColor(initialColorState);
    setBackgroundColor((prevColors) => ({
      ...prevColors,
      [selectAnswer]: '#ffee87',
    }));
  };

  return (
    <HeaderWrapper disableBack>
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
            <Text className="text-base">
              {currentQuestion['question-content'].text}?
            </Text>
          </Text>
          <View className="absolute bottom-20">
            {currentQuestion['question-content'].answers.map((answer, i) => {
              const answerLetter = ['A', 'B', 'C', 'D', 'E', 'F', 'G'][i];
              return (
                <Pressable
                  key={i}
                  style={{
                    ...styles.pressable,
                    backgroundColor:
                      backgroundColor[answerLetter as AnswerLetter],
                  }}
                  className="max-w-[80vw] w-[75vw] p-2 my-2 rounded-lg active:border-black border-solid border-gray-500/50 border-[1px] active:border-[2px] shadow-sm shadow-indigo-500/40"
                  onPress={() =>
                    handleSelectAnswer(answerLetter, answer['is-correct'])
                  }
                >
                  <Text>
                    <Text className="font-bold">{answerLetter}: </Text>
                    <Text>{answer['answer-content'].text}</Text>
                  </Text>
                </Pressable>
              );
            })}
          </View>
          <MainButton text="Submit" onPress={handleSubmit} />
        </View>
        <View
          style={styles.back}
          className="w-[90vw] shadow-sm shadow-gray-500 flex items-center rounded-3xl bg-white p-2"
        >
          <Text className="absolute p-2 top-6">
            <Text className="text-6xl text-center">
              {isCorrect ? '😺' : '😿'}
            </Text>
            {'\n'}
            <Text className="text-4xl text-center">
              {isCorrect ? 'Correct!' : 'Incorrect'}
            </Text>
          </Text>
          <View className="p-4">
            <Text className="text-lg">
              {
                currentQuestion['question-content'].answers.filter(
                  (q) => q['is-correct']
                )[0]['answer-content'].text
              }
            </Text>
          </View>
          <QuestionRating />
          <MainButton text="Next" onPress={handleNextButton} />
        </View>
      </FlipCard>
    </HeaderWrapper>
  );
};
export default MultipleChoice;

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
