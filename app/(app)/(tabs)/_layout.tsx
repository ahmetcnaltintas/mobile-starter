import { Tabs } from 'expo-router/tabs';
import { Home, Search, User } from 'lucide-react-native';

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({color, size}) => <Home color={color} size={size} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          tabBarIcon: ({color, size}) => <Search color={color} size={size} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({color, size}) => <User color={color} size={size} />,
          headerShown: false,
        }}
      />
    </Tabs>
  );
}