import React, { useState } from 'react';
import { Text, SafeAreaView, View, TouchableOpacity, Alert, Image } from 'react-native';
import BackgroundWrapper from '~/components/BackgroundWrapper';
import { Input } from '~/components/ui/input';
import { Button } from '~/components/ui/button';
import { router } from 'expo-router';
import { useAuth } from '~/context/AuthContext';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setAuthState } = useAuth();

  const handleRoute = () => {
    router.push('/register');
  }
  
  const handleLogin = async () => {
    if (!username || !password) {
      Alert.alert('Hata', 'Kullanıcı adı ve şifre boş olamaz.');
      return;
    }
  
    try {
      console.log('Giriş Yapmaya Çalışıyor:', { username, password });
      const response = await fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        })
      });
  
      if (!response.ok) {
        throw new Error('Login Başarısız');
      }
  
      const data = await response.json();
      console.log('Login response:', data);
  
      if (data.token) {
        setAuthState({
          token: data.token,
          authenticated: true,
        });
        router.replace('/home');
      } else {
        throw new Error('Token alınamadı');
      }
    } catch (error) {
      console.error('Login error:', error);
      Alert.alert('Hata', 'Giriş başarısız. Lütfen bilgilerinizi kontrol edin.');
    }
  };

  return (
    <BackgroundWrapper>
      <SafeAreaView className='flex-1 justify-center p-16 items-center'>
      <View className='w-80 items-center justify-center mb-16'>
        <Image source={require('../../assets/image/edulimlogo.png')} className='w-64 h-20 object-cover' />
      </View>
        <Text className='text-3xl font-bold text-center mb-12'>Giriş Yap</Text>
        <Input
          placeholder="Kullanıcı Adı"
          onChangeText={(text: string) => setUsername(text)}
          value={username}
          className='mb-6 w-96'
        />
        <Input
          placeholder="Şifre"
          secureTextEntry={true}
          onChangeText={(text: string) => setPassword(text)}
          value={password}
          className='mb-6 w-96'
        />
        <Button onPress={handleLogin}>
          <Text className='text-white font-bold text-xl w-56 text-center'>Giriş Yap</Text>
        </Button>
        <View className='mt-6'>
          <TouchableOpacity onPress={handleRoute}>
            <Text className='font-bold text-lg'>Henüz Bir Hesabım Yok</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </BackgroundWrapper>
  );
};

export default Login;