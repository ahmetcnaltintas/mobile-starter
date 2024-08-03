import { Image, SafeAreaView, View } from 'react-native'
import { Button } from '~/components/ui/button';
import { Text } from '~/components/ui/text';
import React from 'react'
import BackgroundWrapper from '~/components/BackgroundWrapper'

const index = () => {
  return (
    <BackgroundWrapper>
      <SafeAreaView className='flex-1 items-center px-4'>

        <View className='mb-4 mt-40'>
          <Image className='w-60 h-80' resizeMode='contain' source={require('../../assets/image/cards/01.png')}></Image>
        </View>

        <View>
          <Text>Edulim'e Hoşgeldiniz</Text>
        </View>

        <View>
          <Button>
            <Text>Başla</Text>
          </Button>
        </View>

      </SafeAreaView>
    </BackgroundWrapper>
  )
}

export default index