import { Drawer } from 'expo-router/drawer';
import { ThemeToggle } from '~/components/ThemeToggle';

export default function AppLayout() {
  return (
    <Drawer
      screenOptions={{
        headerRight: () => <ThemeToggle />,
      }}
    >
      <Drawer.Screen
        name="(tabs)"
        options={{
          drawerLabel: "Ana Sayfa",
          title: "Ana Sayfa",
        }}
      />
      <Drawer.Screen
        name="settings"
        options={{
          drawerLabel: "Ayarlar",
          title: "Ayarlar",
        }}
      />
    </Drawer>
  );
}