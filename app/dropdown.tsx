import Animated from 'react-native-reanimated';
import Dropdown from '../components/ui/Dropdowns/Dropdown';
import DropdownMenu from '../components/ui/Dropdowns/DropdownMenu';
import HeaderWrapper from '../components/ui/Navigation/HeaderWrapper';
import { getDropdownItems } from '../constants/DropdownLinks';

export default function DropdownPage() {
  const dropdownItems = getDropdownItems('main');
  const menuItems = [
    { label: 'Home', id: 'home', onPress: () => alert('Home') },
    { label: 'About', id: 'about', onPress: () => alert('About') },
    { label: 'Contact', id: 'contact', onPress: () => alert('Contact') },
    { label: 'Logout', id: 'logout', onPress: () => alert('Logout') },
  ];

  return (
    <HeaderWrapper>
      <Dropdown dropdownData={dropdownItems} />
      <DropdownMenu items={menuItems} />
      <Animated.View style={{ width: 100, height: 100 }} />
    </HeaderWrapper>
  );
}
