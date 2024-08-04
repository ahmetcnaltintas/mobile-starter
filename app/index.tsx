import * as React from 'react';
import { Redirect } from 'expo-router';
import { AuthProvider, useAuth } from '~/context/AuthContext';

export default function App() {
  return (
    <AuthProvider>
      <Screen />
    </AuthProvider>
  );
};

const Screen = () => {
  const { authState } = useAuth();

  return (
    <>
      {authState?.authenticated ? 
        <Redirect href={'/home'} /> 
        : 
        <Redirect href={'/login'} />}
    </>
  );
}
