import { View, Text } from 'react-native';
import TopicList from '../components/features/SessionSelect/TopicList';
import DifficultySelect from '../components/features/SessionSelect/DifficultySelect';
import WideButton from '../components/ui/Buttons/WideButton';
import HeaderWrapper from '../components/ui/Navigation/HeaderWrapper';
import { useContext } from 'react';
import {
  ISessionFormContext,
  SessionFormContext,
} from '../context/SessionFormContext';
import agent from '../api/agent';
import {
  CurrentSessionContext,
  ICurrentSessionContext,
} from '../context/CurrentSessionContext';
import { router } from 'expo-router';

export default function SessionSelectPage() {
  const {
    selectedTopic,
    setSelectedTopic,
    selectedDifficulty,
    setSelectedDifficulty,
  } = useContext(SessionFormContext) as ISessionFormContext;
  const { setQuestions } = useContext(
    CurrentSessionContext
  ) as ICurrentSessionContext;

  const onSubmit = async () => {
    if (!selectedTopic || !selectedDifficulty) return;

    /* try {
      await agent.StackSelect.create('string1', {
        stack: selectedTopic,
        difficulty: selectedDifficulty,
      });
    } catch (error) {
      console.log(error);
    } */

    const questions = await agent.Questions.new('spetersen');
    // reset form
    setSelectedDifficulty(null);
    setSelectedTopic('');
    // TODO: remove the slice when we are done developing
    setQuestions(questions.questions);
    router.push('/multipleChoice');
  };

  return (
    <HeaderWrapper>
      <View className="flex-1 w-full pt-7 gap-y-4">
        <View className="flex items-center bg-white shadow-sm gap-y-6 shadow-gray-400 rounded-3xl">
          <View className="flex flex-col items-center justify-center">
            <Text className="text-2xl font-bold">Select a topic</Text>
            <Text className="mt-2 text-sm font-semibold text-gray-500">
              Select a topic to start a session
            </Text>
          </View>
          <TopicList />
        </View>
        <View className="mb-2">
          <DifficultySelect />
        </View>
        <WideButton
          onPress={onSubmit}
          color="primary"
          text="START"
          isDisabled={!selectedTopic || !selectedDifficulty}
        />
      </View>
    </HeaderWrapper>
  );
}
