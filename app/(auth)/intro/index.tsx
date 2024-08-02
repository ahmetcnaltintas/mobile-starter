import { Text, SafeAreaView, Image } from 'react-native'
import React from 'react'
import BackgroundWrapper from '~/components/BackgroundWrapper'

const index = () => {
  return (
    <BackgroundWrapper>
      <SafeAreaView>
        <Image source={require('assets/images/intro-1.png')} className='w-100 h-100'></Image>
        <Text className='text-center'>Hello World!</Text>
      </SafeAreaView>
    </BackgroundWrapper>
  )
}

export default index