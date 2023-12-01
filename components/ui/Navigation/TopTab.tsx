import { Pressable, View } from 'react-native';
import { Link, router } from 'expo-router';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
  additionalLayout?: string;
}

export default function TopTab({ additionalLayout: additionalStyles }: Props) {
  const canGoBack = router.canGoBack();
  console.log('Can go bback', canGoBack);

  const handleBack = () => {
    router.back();
  };

  return (
    <View
      className={`flex w-full px-8 flex-row justify-between ml-2 ${additionalStyles}`}
    >
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
        <Icon name="home" size={24} />
      </Link>
    </View>
  );
}
