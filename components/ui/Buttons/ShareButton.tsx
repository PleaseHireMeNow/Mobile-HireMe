import React from 'react';
import { Alert, Share, View, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ShareButton = () => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'Code Cat | Prepares you for your next coding interview.',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };
  return (
    <View>
      <Pressable onPress={onShare}>
        <Icon name="share-outline" size={30} />
      </Pressable>
    </View>
  );
};

export default ShareButton;
