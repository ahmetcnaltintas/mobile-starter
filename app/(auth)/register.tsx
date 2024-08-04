import React, { useState } from 'react';
import { Text, SafeAreaView, View, TouchableOpacity } from 'react-native';
import BackgroundWrapper from '~/components/BackgroundWrapper';
import { Input } from '~/components/ui/input';
import { Button } from '~/components/ui/button';
import { router } from 'expo-router';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    console.log('E-Posta:', email);
    console.log('Kullanıcı Adı:', username);
    console.log('Password:', password);
  };
  const handleRoute = () => {
    router.push('/login');
  };

  return (
    <BackgroundWrapper>
      <SafeAreaView className='flex-1 justify-center p-16 items-center'>
        <Text className='text-3xl font-bold text-center mb-12'>Kayıt Ol</Text>
        <Input
          placeholder="E-Posta"
          value={email}
          onChangeText={setEmail}
          className='mb-6 w-96'
        />
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
        <Button onPress={handleLogin} className='mt-4'>
          <Text className='text-white font-bold text-xl w-56 text-center'>Kayıt Ol</Text>
        </Button>
        <View className='mt-6'>
          <TouchableOpacity onPress={handleRoute}>
            <Text className='font-bold text-lg'>Zaten Bir Hesabım Var</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </BackgroundWrapper>
  );
};

export default Login;
