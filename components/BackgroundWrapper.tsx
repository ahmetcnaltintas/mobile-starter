import { ImageBackground, SafeAreaView } from 'react-native';
import React, { ReactNode } from 'react';

interface BackgroundWrapperProps {
  children: ReactNode;
}

const BackgroundWrapper: React.FC<BackgroundWrapperProps> = ({ children }) => {
  return (
    <ImageBackground className='flex-1' source={require('../assets/image/other/background.png')}>
      <SafeAreaView className='flex-1'>{children}</SafeAreaView>
    </ImageBackground>
  );
}

export default BackgroundWrapper;
