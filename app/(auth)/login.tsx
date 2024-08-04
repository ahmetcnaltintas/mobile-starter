import React, { useState } from 'react';
import { Text, SafeAreaView, View, TouchableOpacity } from 'react-native';
import BackgroundWrapper from '~/components/BackgroundWrapper';
import { Input } from '~/components/ui/input';
import { Button } from '~/components/ui/button';
import { router } from 'expo-router';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Username:', username);
    console.log('Password:', password);
    router.push('/home');
  };

  const handleRoute = () => {
    router.push('/register');
  }
  return (
    <BackgroundWrapper>
      <SafeAreaView className='flex-1 justify-center p-16 items-center'>
        <Text className='text-3xl font-bold text-center mb-12'>Giriş Yap</Text>
        <Input
          placeholder="Kullanıcı Adı"
          value={username}
          onChangeText={setUsername}
          className='mb-6 w-96'
        />
        <Input
          placeholder="Şifre"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
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
