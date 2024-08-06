import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
import BackgroundWrapper from '~/components/BackgroundWrapper';
import Colors from '~/constants/colors';

const { width } = Dimensions.get('window');

const dummyCourses = [
  { id: '1', title: 'React Native Temelleri', progress: 60 },
  { id: '2', title: 'JavaScript İleri Seviye', progress: 30 },
  { id: '3', title: 'Web Tasarım', progress: 80 },
  { id: '4', title: 'Python for Beginners', progress: 45 },
];

const CourseComponent = ({ item, ongoingCourse }) => (
  <View style={{ width: (width - 60) / 2, marginBottom: 20 }}>
    <View style={{ backgroundColor: Colors.primary3, borderRadius: 10, padding: 10 }}>
      <Text style={{ color: Colors.white, fontSize: 16, fontWeight: 'bold' }}>{item.title}</Text>
      {ongoingCourse && (
        <View style={{ marginTop: 10, backgroundColor: Colors.white, borderRadius: 5 }}>
          <View style={{ width: `${item.progress}%`, height: 5, backgroundColor: Colors.primary2, borderRadius: 5 }} />
        </View>
      )}
    </View>
  </View>
);

export default function Courses() {
  const [category, setCategory] = useState('Ongoing');

  return (
    <BackgroundWrapper>
      <SafeAreaView className='flex-1'>
        <View style={{ flex: 1, padding: 20 }}>
          <Text style={{ fontSize: 24, fontWeight: 'bold', color: Colors.black, marginBottom: 20 }}>Kurslarım</Text>
          
          <View style={{ flexDirection: 'row', marginBottom: 20 }}>
            <TouchableOpacity
              style={{
                flex: 1,
                alignItems: 'center',
                paddingBottom: 10,
                borderBottomWidth: 2,
                borderBottomColor: category === 'Ongoing' ? Colors.primary : Colors.secondary
              }}
              onPress={() => setCategory('Ongoing')}
            >
              <Text style={{ color: category === 'Ongoing' ? Colors.primary : Colors.black }}>Ongoing</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                alignItems: 'center',
                paddingBottom: 10,
                borderBottomWidth: 2,
                borderBottomColor: category === 'Completed' ? Colors.primary : Colors.secondary
              }}
              onPress={() => setCategory('Completed')}
            >
              <Text style={{ color: category === 'Completed' ? Colors.primary : Colors.black }}>Completed</Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={dummyCourses}
            keyExtractor={(item) => item.id}
            numColumns={2}
            columnWrapperStyle={{ justifyContent: 'space-between' }}
            renderItem={({ item }) => (
              <CourseComponent item={item} ongoingCourse={category === 'Ongoing'} />
            )}
          />
        </View>
      </SafeAreaView>
    </BackgroundWrapper>
  );
}