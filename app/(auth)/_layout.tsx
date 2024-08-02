import React from 'react'
import { Stack } from 'expo-router';
import { ThemeToggle } from '~/components/ThemeToggle';


export default function _layout() {
  return (
    <Stack 
    screenOptions={{
      headerShown: false,
    }}
    >
      <Stack.Screen name='intro' options={{ 
        headerShown: false,
       }}/>
      <Stack.Screen name='login' options={{ 
        headerShown: false,
       }}/>
      <Stack.Screen name='register' options={{ 
        headerShown: false,
       }}/>
    </Stack>
  )
}