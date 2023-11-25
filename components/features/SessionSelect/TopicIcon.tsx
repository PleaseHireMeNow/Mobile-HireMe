import { useContext } from 'react';
import {
  SessionFormContext,
  ISessionFormContext,
} from '../../../context/SessionFormContext';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcons from 'react-native-vector-icons/Ionicons';
import { DevIcon } from '../../../constants/DevIcons';

interface TopicItemProps {
  Icon: DevIcon;
}

export default function TopicIcon({ Icon }: TopicItemProps) {
  const { selectedTopic } = useContext(
    SessionFormContext
  ) as ISessionFormContext;
  const { icon, lib, size, color } = Icon;

  const iconSize = size ? parseInt(size) : 36;
  const iconColor = selectedTopic === Icon.name ? '#FACC15' : color;

  switch (lib) {
    case 'FA':
      return <FontAwesome name={icon} size={iconSize} color={iconColor} />;
    case 'FA5':
      return <FontAwesome5 name={icon} size={iconSize} color={iconColor} />;
    case 'MI':
      return <MaterialIcons name={icon} size={iconSize} color={iconColor} />;
    case 'MCI':
      return (
        <MaterialCommunityIcons name={icon} size={iconSize} color={iconColor} />
      );
    case 'II':
      return <IonIcons name={icon} size={iconSize} color={iconColor} />;
    default:
      return <FontAwesome name={icon} size={iconSize} color="#000" />;
  }
}
