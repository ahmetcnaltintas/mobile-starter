import React, { useReducer } from 'react';
import { StyleSheet, Pressable, View, FlatList } from 'react-native';
import { MotiView } from 'moti';
import { Skeleton } from 'moti/skeleton';
import BackgroundWrapper from '~/components/BackgroundWrapper';
import { Card } from '~/components/ui/card';

const data = Array.from({ length: 10 }, (_, i) => ({ key: `${i}` }));

export default function HelloWorld() {
  const [dark, toggle] = useReducer((s) => !s, true);

  const colorMode = dark ? 'dark' : 'light';

  const renderItem = () => (
    <Card className='mt-14 h-64 w-90'>
      <MotiView
        transition={{
          type: 'timing',
        }}
        className='flex-1 justify-center p-8'
      >
        <Skeleton colorMode={colorMode} radius="round" height={75} width={75} />
        <Spacer />
        <Skeleton colorMode={colorMode} width={250} />
        <Spacer height={8} />
        <Skeleton colorMode={colorMode} width={'100%'} />
        <Spacer height={8} />
        <Skeleton colorMode={colorMode} width={'100%'} />
      </MotiView>
    </Card>
  );

  return (
    <BackgroundWrapper>
      <View className='items-center'>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.key}
        />
      </View>
    </BackgroundWrapper>
  );
}

const Spacer = ({ height = 16 }) => <View style={{ height }} />;
