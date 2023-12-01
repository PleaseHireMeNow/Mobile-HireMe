import { Text, View, Alert, TouchableOpacity } from 'react-native';
import React, { useState, useMemo } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const QuestionRating = () => {
  const [thumbsUpSelected, setThumbsUpSelected] = useState(false);
  const [thumbsDownSelected, setThumbsDownSelected] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const handleThumbsUp = () => {
    setThumbsUpSelected(true);
    setThumbsDownSelected(false);
    handleFeedback();
  };

  const handleThumbsDown = () => {
    setThumbsDownSelected(true);
    setThumbsUpSelected(false);
    handleFeedback();
  };

  const handleFeedback = () => {
    Alert.alert('Thank you for helping to improve our app!', '', [
      {
        text: 'OK',
        onPress: () => {
          setTimeout(() => {
            setIsVisible(false);
          }, 0); // Adjust the delay as needed
        },
      },
    ]);
  };

  return (
    <>
      {isVisible ? (
        <View className="flex-row items-center justify-center p-2">
          <Text className='items-center'>
            <View className="rating-text  pr-2 pb-2">
              <Text className="text-gray-700">Was this question helpful? </Text>
            </View>
            <View className="flex-row items-center">
              <View className="mr-2">
                <TouchableOpacity onPress={handleThumbsUp}>
                  <Icon
                    name="thumbs-up-outline"
                    size={25}
                    color={thumbsUpSelected ? 'black' : 'gray'}
                  />
                </TouchableOpacity>
              </View>
              <View className="thumbs-down ml-2 mt-3">
                <TouchableOpacity onPress={handleThumbsDown}>
                  <Icon
                    name="thumbs-down-outline"
                    size={25}
                    color={thumbsDownSelected ? 'black' : 'gray'}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </Text>
        </View>
      ) : (
        <View className="h-[55px] w-full"></View>
      )}
    </>
  );
};

export default QuestionRating;
