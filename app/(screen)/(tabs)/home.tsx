import { Text, SafeAreaView, View } from 'react-native';
import React from 'react';
import BackgroundWrapper from '~/components/BackgroundWrapper';

const Home = () => {
  return (
    <BackgroundWrapper>
      <SafeAreaView className='flex-1'>
        <View className='flex-1 justify-center items-center'>
          <Text className='text-2xl'>Anasayfa</Text>
        </View>
      </SafeAreaView>
    </BackgroundWrapper>
  );
};


export default Home;
