import React from 'react';
import { View, Text } from 'react-native';
import { Link } from 'expo-router';

export default function  User ()  {
  return (
    <View>
      <Link href="/UserPage/1">
        <Text>Topic 1</Text>
      </Link>

      <Link href="/UserPage/2">
        <Text>Topic 2</Text>
      </Link>
    </View>
  );
};

