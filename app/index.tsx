import * as React from 'react';
import { Text } from 'react-native';
import 'react-native-reanimated'
import 'react-native-gesture-handler'
import { Redirect, useRouter } from 'expo-router';
import { AuthProvider, useAuth } from '~/context/AuthContext';

export default function App() {
  return (
    <AuthProvider>
      <Screen />
    </AuthProvider>
  );
}

const Screen: React.FC = () => {
  const { authState } = useAuth();
  const router = useRouter();

  console.log('Geçerli Auth Durumu:', authState);

  React.useEffect(() => {
    console.log('Ekran efekti çalışıyor:', authState);
    if (authState.authenticated === true) {
      console.log('Ana sayfaya yönlendiriliyor');
      router.replace('/home');
    } else if (authState.authenticated === false) {
      console.log('Logine yönlendiriliyor');
      router.replace('/intro');
    }
  }, [authState, router]);

  if (authState.authenticated === null) {
    console.log('Auth Durumu Yükleniyor');
    return <Text>Loading...</Text>;
  }

  return null;
};