import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import BackgroundWrapper from '~/components/BackgroundWrapper';
import Colors from '~/constants/colors';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const sliderData = [
  { id: '1', title: 'Slide 1', image: require('assets/image/card.png') },
  { id: '2', title: 'Slide 2', image: require('assets/image/card.png') },
  { id: '3', title: 'Slide 3', image: require('assets/image/card.png') },
];

const SliderItem = ({ item }) => (
  <View style={{ width: width - 60, marginHorizontal: 10 }}>
    <View style={{backgroundColor: Colors.primary3}} className="h-32 rounded-2xl" />
    <View className="absolute right-2.5 bottom-2">
      <Image
        source={item.image}
        className="h-[120px] w-[100px] resize-stretch"
      />
    </View>
    <Text style={{color: Colors.white}} className="absolute left-4 top-4 text-xl font-bold font-poppins">
      {item.title}
    </Text>
  </View>
);

const Home = () => {
  return (
    <BackgroundWrapper>
      <SafeAreaView className="flex-1">
        <View className="flex-1 px-5 mt-10">
          <ScrollView showsVerticalScrollIndicator={false} className="mt-2.5">
            <Text style={{color: Colors.black}} className="text-3xl font-bold font-poppins">Merhaba! {'\n'}Admin</Text>
            <View className="mt-8">
              <FlatList
                data={sliderData}
                renderItem={({ item }) => <SliderItem item={item} />}
                keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                snapToAlignment="center"
                snapToInterval={width - 40}
              />
            </View>
            <View className="flex-row items-center justify-between mt-[70px]">
              <Text style={{color: Colors.black}} className="text-lg font-semibold font-poppins">Dersler</Text>
              <TouchableOpacity onPress={() => {'s'}}>
                <Text style={{color: Colors.primary}} className="text-sm font-medium font-poppins">Tümünü Gör</Text>
              </TouchableOpacity>
            </View>
            <Text style={{color: Colors.black}} className="text-sm font-medium mt-0.5 font-poppins">Lise - 12. Sınıf</Text>
            <View className="flex-row items-center justify-between mt-4">
              {['Fizik', 'Biyoloji', 'Kimya', 'Biyoloji'].map((subject, index) => (
              <TouchableOpacity key={index} onPress={() => {'s'}} className="items-center">
                <Image
                  source={require('assets/image/card.png')}
                  resizeMode="stretch"
                  className="h-[54px] w-[54px]"
                />
                <Text className="text-xs font-semibold text-black mt-1 font-poppins">{subject}</Text>
              </TouchableOpacity>
            ))}
            </View>
            <View className="flex-row items-center justify-between mt-5">
              <Text style={{color: Colors.black}} className="text-lg font-semibold font-poppins">Kurs Videoları</Text>
              <TouchableOpacity onPress={() => {'s'}}>
                <Text style={{color: Colors.primary}} className="text-sm font-medium font-poppins">Tümünü Gör</Text>
              </TouchableOpacity>
            </View>
            <View className="flex-row items-center mt-5 mb-20">
              <Image
                source={require('assets/image/card.png')}
                resizeMode="stretch"
                style={{height: height / 9, width: width / 3.3}}
              />
              <View className="flex-1 ml-3">
                <Text style={{color: Colors.black}} className="text-xs font-poppins">⭐ 4.6</Text>
                <Text style={{color: Colors.black}} className="text-base leading-6 font-poppins">Bilim Teknoloji</Text>
                <Text style={{color: Colors.black}} className="text-xs leading-5 font-poppins">By EduLim</Text>
                <View style={{backgroundColor: Colors.primary2, width: width / 4.5}} className="rounded-full items-center py-0.5">
                  <Text style={{color: Colors.secondary}} className="text-xs font-poppins">Şimdi Canlı</Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </BackgroundWrapper>
  );
}

export default Home;