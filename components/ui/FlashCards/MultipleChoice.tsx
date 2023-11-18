import { Text, View } from 'react-native';
import { Link } from 'expo-router';
import { faker } from '@faker-js/faker';
import MainButton from '../Buttons/MainButton';



export default function MultipleChoice () {

    const randomSentence = faker.lorem.sentence({min: 5, max: 20});
    const randomAnswerA = faker.lorem.sentence({min: 1, max: 6});
    const randomAnswerB = faker.lorem.sentence({min: 1, max: 6});
    const randomAnswerC = faker.lorem.sentence({min: 1, max: 6});
    const randomAnswerD = faker.lorem.sentence({min: 1, max: 6});

    return (
        <View className='flex flex-col'>
            <View className='question-container w-[90vw] rounded-lg border-2 border-black p-4 my-2'>
                <Text className='text-xl font-semibold'>{randomSentence}?</Text>
            </View>
            <View className="answerA w-[90vw] rounded-lg border-2 border-black p-4 my-2">
                <Text className='text-lg font-semibold'>A: {randomAnswerA}</Text>
            </View>
            <View className="answerB w-[90vw] rounded-lg border-2 border-black p-4 my-2">
                <Text className='text-lg font-semibold'>B: {randomAnswerB}</Text>
            </View>
            <View className="answerC w-[90vw] rounded-lg border-2 border-black p-4 my-2">
                <Text className='text-lg font-semibold'>C: {randomAnswerC}</Text>
            </View>
            <View className="answerD w-[90vw] rounded-lg border-2 border-black p-4 my-2">
                <Text className='text-lg font-semibold'>D: {randomAnswerD}</Text>
            </View>
        </View>
    )
}