import { DropdownItem } from '../types/models/DropdownData';

export type DropdownType = 'main' | 'settings';

export const getDropdownItems = (
  dropdownType: DropdownType
): DropdownItem[] => {
  switch (dropdownType) {
    case 'main':
      return [
        { label: 'Home', value: { onPress: () => alert('Home') } },
        { label: 'About', value: { onPress: () => alert('About') } },
        { label: 'Contact', value: { onPress: () => alert('Contact') } },
        { label: 'Logout', value: { onPress: () => alert('Logout') } },
      ];
    case 'settings':
      return [{ label: 'Contact', value: { onPress: () => alert('Contact') } }];
  }
};
