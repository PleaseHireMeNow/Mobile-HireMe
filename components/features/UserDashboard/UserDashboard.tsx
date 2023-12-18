import { View, Text } from 'react-native';
import SecondaryButton from '../../ui/Buttons/SecondaryButton';
import { router } from 'expo-router';
import DropdownHistoryComponent from '../DropdownComponent/DropdownHistoryComponent';
import { useState } from 'react';

export default function UserDashboardComponent() {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleHistoryPress = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <View className="flex flex-row flex-wrap items-center justify-center p-24 m-10">
      <View className="flex flex-row">
        <View className="m-5">
          <SecondaryButton
            text="progress"
            onPress={() => router.push('/results')}
            // should this go to its own progress page with displayed stats or results page?
            imageSource={require('../../../assets/images/progress.png')}
          />
        </View>
        <View className="m-5">
          <SecondaryButton
            text="other"
            onPress={() => router.push('/other')}
            imageSource={require('../../../assets/images/topics.png')}
          />
        </View>
      </View>
      <View className="flex flex-col">
        <SecondaryButton
          text="history"
          // This should have the option to resume session (/history) with caching or start new session (/sessionSelect) (which also lies in settings?)
          imageSource={require('../../../assets/images/history.png')}
          onPress={handleHistoryPress}
        />
        {showDropdown && <DropdownHistoryComponent />}
      </View>
    </View>
  );
}
