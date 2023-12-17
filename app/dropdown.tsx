import Dropdown from '../components/ui/Dropdowns/Dropdown';
import DropdownMenu from '../components/ui/Dropdowns/DropdownMenu';
import HeaderWrapper from '../components/ui/Navigation/HeaderWrapper';
import { getDropdownItems } from '../constants/DropdownLinks';

export default function DropdownPage() {
  const dropdownItems = getDropdownItems('main');
  return (
    <HeaderWrapper>
      <Dropdown dropdownData={dropdownItems} />
      <DropdownMenu items={''} />
    </HeaderWrapper>
  );
}
