// ----[ import ]---------------------------------------------------------------
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import ArticleScreen from '../screens/ArticleScreen';

// ---[ process ]---------------------------------------------------------------
const Stack = createNativeStackNavigator();

export default AppNavigator = () => {

  // ---[ return ]-------------------------------------------------------------
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Article"
          component={ArticleScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
