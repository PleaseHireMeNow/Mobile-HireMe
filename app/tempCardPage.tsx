import { Text, View } from 'react-native';
import { Link } from 'expo-router';
import MultipleChoice from '../components/ui/FlashCards/MultipleChoice';
import MainButton from '../components/ui/Buttons/MainButton';



export default function TempCardPage () {


    return (
        <>
        <Link
        className=" font-semibold text-blue-500 active:scale-105"
        href="/"
      >
        Home
      </Link>
        <MultipleChoice />
        <MainButton text="submit" onPress={() => alert('I do not do anything')}/>
       </>
    )
}