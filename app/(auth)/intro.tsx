import { Link, useRouter } from 'expo-router';
import React, { useRef, useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import PagerView from 'react-native-pager-view';
import BackgroundWrapper from '~/components/BackgroundWrapper';
import { Button } from '~/components/ui/button';

interface RenderPageProps {
  image: any;
  title: string;
  description: string;
  pageNumber: number;
}

const MyPager = () => {
  const router = useRouter();

  const handlePress = () => {
    router.push('/login');
  };

  const pagerRef = useRef<PagerView>(null);
  const [currentPage, setCurrentPage] = useState<number>(0);

  const handlePageChange = (pageNumber: number) => {
    if (pagerRef.current) {
      pagerRef.current.setPage(pageNumber);
    }
  };

  const onPageSelected = (e: any) => {
    setCurrentPage(e.nativeEvent.position);
  };

  const renderPage = ({ image, title, description, pageNumber }: RenderPageProps) => (
    <View className='flex-1 justify-center items-center' key={pageNumber}>
      <Image className='w-80 h-80 mt-16' source={image} />
      <Text className='mt-16 text-2xl font-bold'>{title}</Text>
      <Text className='mt-10 text-xl text-center px-4'>{description}</Text>
      {pageNumber < 2 && (
        <Button className='mt-16 w-44' onPress={() => handlePageChange(pageNumber + 1)}>
          <Text className='text-white text-center font-bold text-xl'>İleri</Text>
        </Button>
      )}
      {pageNumber === 2 && (
        <Button className='mt-16 w-44' onPress={handlePress}>
          <Text className='text-white text-center font-bold text-xl'>Başla</Text>
        </Button>
      )}
    </View>
  );

  return (
    <BackgroundWrapper>
      <View className='flex-1'>
        <PagerView 
          ref={pagerRef} 
          style={styles.pagerView} 
          initialPage={0}
          onPageSelected={onPageSelected}
        >
          {renderPage({
            image: require('../../assets/images/mobil-intro-1.png'),
            title: "Edulim'e Hoşgeldiniz",
            description: 'Eğitim yolculuğunuza başlamak için hazır mısınız?',
            pageNumber: 0
          })}
          {renderPage({
            image: require('../../assets/images/mobil-intro-1.png'),
            title: 'Interaktif Öğrenme',
            description: 'Çeşitli eğitim materyalleri ve quizlerle öğrenmeyi eğlenceli hale getirin.',
            pageNumber: 1
          })}
          {renderPage({
            image: require('../../assets/images/mobil-intro-1.png'),
            title: 'Hemen Başlayın',
            description: "Şimdi Edulim'in sunduğu fırsatları keşfetmeye hazırsınız!",
            pageNumber: 2
          })}
        </PagerView>
        <View className='flex-row justify-center mb-16'>
          {[0, 1, 2].map((page) => (
            <View
              key={page}
              style={[
                styles.dot,
                currentPage === page ? styles.activeDot : styles.inactiveDot
              ]}
            />
          ))}
        </View>
      </View>
    </BackgroundWrapper>
  );
};

const styles = StyleSheet.create({
  pagerView: {
    flex: 1,
  },
  dot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: 'blue',
  },
  inactiveDot: {
    backgroundColor: 'gray',
  },
});

export default MyPager;
