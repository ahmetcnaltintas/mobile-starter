import { Tabs } from 'expo-router/tabs';
import { DrawerToggleButton } from '@react-navigation/drawer';

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
        }}
      />
    </Tabs>
  );
}