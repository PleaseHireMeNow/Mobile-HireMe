import { router } from "expo-router";
export const dropdownData = [
  // { label: 'Home', value: {onPress: () => router.push('/')}},
  { label: 'Dashboard', value: {onPress: () => router.push('/dashboard')} },
  { label: 'Signup', value: {onPress: () =>router.push('/signup')} },
  { label: 'Login', value: {onPress: () => router.push('/login')} },
  { label: 'Setting', value: { onPress:() => router.push('/settings') } },
];