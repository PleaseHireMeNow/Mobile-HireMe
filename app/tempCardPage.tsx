import MultipleChoice from '../components/ui/FlashCards/MultipleChoice';
import HeaderWrapper from '../components/ui/Navigation/HeaderWrapper';

export default function TempCardPage() {
  return (
    <HeaderWrapper dropdown disableBack>
      <MultipleChoice />
    </HeaderWrapper>
  );
}
