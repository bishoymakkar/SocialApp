import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/HomeScreen';
import PostDetailsScreen from '../screens/PostDetailsScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen 
      name="Splash"
      component={SplashScreen}
      options={{ headerShown: false }}
      />
      <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: 'Post Details',
        headerShown: false
        }} />
      <Stack.Screen 
      name="PostDetails" 
      component={PostDetailsScreen}
      options={{
        title: 'Post Details',
        }} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
