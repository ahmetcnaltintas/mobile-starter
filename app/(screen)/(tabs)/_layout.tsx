import { Tabs } from 'expo-router/tabs';
import { Home, LibraryBig, Search } from 'lucide-react-native';

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ 
      tabBarStyle: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 70,
        backgroundColor: '#F8F7FB',
        borderRadius: 30,
        elevation: 5,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingHorizontal: 20,
        alignItems: 'center',
      },
     }}>
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({color, size}) => <Home color={color} size={size} />,
          tabBarLabel: "AnaSayfa",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="exams"
        options={{
          tabBarIcon: ({color, size}) => <Search color={color} size={size} />,
          tabBarLabel: "Sınavlarım",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="courses"
        options={{
          tabBarIcon: ({color, size}) => <LibraryBig color={color} size={size} />,
          tabBarLabel: "Kurslarım",
          headerShown: false,
        }}
      />
    </Tabs>
  );
}