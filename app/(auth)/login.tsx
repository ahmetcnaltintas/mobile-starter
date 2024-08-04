import React, { useState } from 'react';
import { Text, SafeAreaView, View, TouchableOpacity, Alert } from 'react-native';
import BackgroundWrapper from '~/components/BackgroundWrapper';
import { Input } from '~/components/ui/input';
import { Button } from '~/components/ui/button';
import { router } from 'expo-router';
import { useAuth } from '~/context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { onLogin } = useAuth();

  const login = async () => {
    try {
      const result = await onLogin!(email, password);
  
      if (result && result.error) {
        Alert.alert(result.msg || 'Bir hata oluştu.');
      } else {
        // Başarılı giriş sonrası yönlendirme veya diğer işlemler
        router.push('/home'); // Örneğin: başarılı giriş sonrası ana sayfaya yönlendir
      }
    } catch (error) {
      Alert.alert('Giriş yapılamadı', 'Bir hata oluştu: ' + error.message);
    }
  }



  const handleRoute = () => {
    router.push('/register');
  }
  return (
    <BackgroundWrapper>
      <SafeAreaView className='flex-1 justify-center p-16 items-center'>
        <Text className='text-3xl font-bold text-center mb-12'>Giriş Yap</Text>
        <Input
          placeholder="E-Posta"
          onChangeText={(text: string) => setEmail(text)}
          value={email}
          className='mb-6 w-96'
        />
        <Input
          placeholder="Şifre"
          secureTextEntry={true}
          onChangeText={(text: string) => setPassword(text)}
          value={password}
          className='mb-6 w-96'
        />
        <Button onPress={login}>
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
