import { Pressable, View } from 'react-native';
import { ReactNode } from 'react';
import { Link, router } from 'expo-router';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';

interface Props {
  children: ReactNode;
  disableBack?: boolean;
  dropdown?: boolean;
}

export default function HeaderWrapper({
  children,
  disableBack,
  dropdown,
}: Props) {
  const canGoBack = router.canGoBack() && !disableBack;

  const handleBack = () => {
    router.back();
  };
  return (
    <View className="flex flex-col items-center w-full shadow-sm gap-y-2 shadow-gray-400 ">
      {/* Header */}
      <View className={`flex w-full px-8 flex-row justify-between ml-2 `}>
        <Pressable onPress={handleBack} disabled={!canGoBack}>
          {/* If we cannot go back make the button invisible by making it the same color as the bg */}
          {/* We still want it to take space on the page so that justify between works correctly */}
          <Icon2
            name="chevron-left"
            size={32}
            color={`${canGoBack ? '#1C1917' : '#ffdd43'}`}
          />
        </Pressable>
        <Link
          className="mr-4 text-lg font-semibold text-black active:text-blue-500"
          href="/"
        >
          {dropdown ? (
            <Entypo name="dots-three-horizontal" size={24} />
          ) : (
            <Icon name="home" size={24} />
          )}
        </Link>
      </View>
      {/* Wrapper  */}
      <View className="flex items-center w-full h-full px-8 shadow-sm bg-sunglow-300 shadow-gray-400">
        {children}
      </View>
    </View>
  );
}
