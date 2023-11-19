// DetailsPage.tsx
import React from 'react';
import { View, Text } from 'react-native';
import { useGlobalSearchParams } from 'expo-router';

export default function UserPage ()  {
  const { id } = useGlobalSearchParams();

  return (
    <View>
      <Text>My details for: {id}</Text>
      <Text>Hello</Text>
    </View>
  );
};

