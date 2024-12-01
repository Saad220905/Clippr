/*
import { View, Text, Button } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import ScreenWrapper from '@/components/ScreenWrapper';

const index = () => {
  const router = useRouter();
  return (
    <ScreenWrapper>
      <Text>index</Text>
      <Button title='welcome' onPress={() => router.push('welcome')} />
    </ScreenWrapper>
  )
}

export default index
*/

import { NavigationContainer, NavigationIndependentTree } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import welcome from './welcome'; // Adjust import path
import signIn from './signIn'; // Adjust import path

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="welcome" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="welcome" component={welcome} />
          <Stack.Screen name="signIn" component={signIn} />
        </Stack.Navigator>
      </NavigationContainer>
    </NavigationIndependentTree>
  );
};

export default App;