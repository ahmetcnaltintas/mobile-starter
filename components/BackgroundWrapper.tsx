import { ImageBackground, SafeAreaView } from 'react-native'
import React from 'react'

const BackgroundWrapper = ({childiren}) => {
  return (
    <ImageBackground className='flex-1'
    source={require('../assets/images/bg.png')}>
    <SafeAreaView>{childiren}</SafeAreaView>
    </ImageBackground>
  )
}

export default BackgroundWrapper