import { Tabs } from 'expo-router/tabs';
import { Home, LibraryBig, Search } from 'lucide-react-native';

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ 
      tabBarStyle: {
        height: 70,
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