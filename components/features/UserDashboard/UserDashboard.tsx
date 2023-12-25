import { View } from 'react-native';
import { router } from 'expo-router';
import ModalDropdown from '../../ui/DropdownComponent/ModalDropdown';
import { useState } from 'react';
import ProgressButton from '../../ui/Buttons/ProgressButton';
import PreviousButton from '../../ui/Buttons/PreviousButton';
import NewButton from '../../ui/Buttons/NewButton';

export default function UserDashboardComponent() {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleHistoryPress = () => {
    setShowDropdown(true);
  };

  const handleCloseDropdown = () => {
    setShowDropdown(false);
  };

  return (
    <View className="flex flex-row flex-wrap items-center justify-center p-24 m-10">
      <View className="flex flex-row">
        <View className="m-5">
          <PreviousButton
            text="Previous Session"
            onPress={() => router.push('/results')} // change path here
            imageSource={require('../../../assets/images/previous.png')}
          />
        </View>
        <View className="m-5">
          <NewButton
            text="New Session"
            onPress={() => router.push('/sessionSelect')} // change path here
            imageSource={require('../../../assets/images/new.png')}
          />
        </View>
      </View>
      <View className="flex flex-col">
        <ProgressButton
          text="Progress"
          imageSource={require('../../../assets/images/progress.png')}
          onPress={handleHistoryPress}
        />
        {showDropdown && <ModalDropdown onClose={handleCloseDropdown} />}
      </View>
    </View>
  );
}
