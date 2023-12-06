import { Link } from 'expo-router';
import { View, Text } from 'react-native';
import HeaderWrapper from '../components/ui/Navigation/HeaderWrapper';
import { Dropdown } from 'react-native-element-dropdown';
import { dropdownItems } from '../components/features/DropdownComponent/DropdownItems';

export default function DropdownPage() {
  return (
    <>
      <HeaderWrapper>
        <View>
            <Text>
          <Dropdown
            data={dropdownItems}
            labelField="label"
            valueField="value"
            onChange={(item) => {
              // Handle the selected item
            }}
          />
          </Text>
        </View>
      </HeaderWrapper>
    </>
  );
}
