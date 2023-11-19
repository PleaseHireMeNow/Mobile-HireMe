import React from 'react';
import { Tabs } from 'expo-router/tabs';
import { UserContextProvider } from '../../context/UserContext';
import { IUserContext, UserContext } from '../../context/UserContext';
import { useContext } from 'react';

export default function Layout() {
  const { user, exampleName } = useContext(UserContext) as IUserContext;

  return (
    <UserContextProvider>
      <Tabs>
        <Tabs.Screen name="home" />
        <Tabs.Screen name="user" />
        <Tabs.Screen name="[...missing]" options={{href:null}}/>
      </Tabs>
    </UserContextProvider>
  );
}
