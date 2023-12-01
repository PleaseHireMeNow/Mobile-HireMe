import { Text, View, Alert, Pressable } from 'react-native';
import React, { useState, useMemo } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const QuestionRating = () => {

    const [thumbsUpSelected, setThumbsUpSelected] = useState(false);
  const [thumbsDownSelected, setThumbsDownSelected] = useState(false);

  const handleThumbsUp = () => {
    setThumbsUpSelected(true);
    setThumbsDownSelected(false);
    Alert.alert('Thank you for helping to improve our app!');
  };

  const handleThumbsDown = () => {
    setThumbsDownSelected(true);
    setThumbsUpSelected(false);
    Alert.alert('Thank you for helping to improve our app!');
  };

    return (
        <View>
            <Text>
              <View className="mb-2 mr-2">
                <Text className="text-gray-700">Was this question helpful? </Text>
              </View>
              <View className="flex-row">
                <View className="mr-2">
                    <Pressable onPress={handleThumbsUp} >
                        <Icon name="thumbs-up-outline" size={25} color={thumbsUpSelected ? 'black' : 'gray'}/>
                    </Pressable>
                </View>
                <View className="ml-2 mt-[7px]">
                    <Pressable onPress={handleThumbsDown} >
                        <Icon name="thumbs-down-outline" size={25} color={thumbsDownSelected ? 'black' : 'gray'}/>
                    </Pressable> 
                </View>
              </View>
            </Text>
          </View>
    );
};

export default QuestionRating;