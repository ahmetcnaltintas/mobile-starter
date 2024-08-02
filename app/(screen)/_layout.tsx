import { Drawer } from 'expo-router/drawer';
import { Home, Settings } from 'lucide-react-native';
import { ThemeToggle } from '~/components/ThemeToggle';

export default function AppLayout() {
  return (
    <Drawer
      screenOptions={{
        headerRight: () => <ThemeToggle />,
        headerTransparent: true,
      }}
    >
      <Drawer.Screen
        name="(tabs)"
        options={{
          drawerIcon: ({color, size}) => <Home color={color} size={size}/>,
          drawerLabel: "Ana Sayfa",
          title: "Ana Sayfa",
        }}
      />
      <Drawer.Screen
        name="settings"
        options={{
          drawerIcon: ({color, size}) => <Settings color={color} size={size}/>,
          drawerLabel: "Ayarlar",
          title: "Ayarlar",
        }}
      />
    </Drawer>
  );
}