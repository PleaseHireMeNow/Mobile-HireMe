import { StyleSheet, Text, View } from 'react-native';
import HeaderWrapper from '../components/ui/Navigation/HeaderWrapper';
import UserDashboardComponent from '../components/features/UserDashboard/UserDashboard';

export default function UserDashboardPage() {
  return (
    <HeaderWrapper>
      <UserDashboardComponent />
    </HeaderWrapper>
  );
}

const styles = StyleSheet.create({});
