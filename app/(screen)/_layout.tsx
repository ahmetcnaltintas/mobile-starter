import { router } from 'expo-router';
import drawer, { Drawer } from 'expo-router/drawer';
import { ArrowLeft, Home, LogOut, Menu, Settings, User } from 'lucide-react-native';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { BlurView } from 'expo-blur';
import { ThemeToggle } from '~/components/ThemeToggle';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
 } from '~/components/ui/dropdown-menu';
import { useAuth } from '~/context/AuthContext';

export default function AppLayout() {
  const { authState, onLogout} = useAuth();

  const handleLogout = () => {
    onLogout();
    router.replace('/login');
  };

  const handleSettings = () => {
    router.push('/settings');
  };

  const handleProfile = () => {
    router.push('/profile');
  };

  return (
    <Drawer
      screenOptions={{
        headerTitle: '',
        headerBackground: () => (
          <BlurView intensity={50} style={{ flex: 1 }} tint="light" />
        ),
        headerRight: () => (
          <View className='flex-row items-center'>
            <ThemeToggle />
            <DropdownMenu>
              <DropdownMenuTrigger>
                <View className='mr-2 w-12 h-12 rounded-full overflow-hidden bg-white justify-center items-center'>
                  <Image
                    source={require('../../assets/image/ahmet.webp')} 
                    className="w-full h-full"
                  />
                </View>
              </DropdownMenuTrigger>
              <DropdownMenuContent className='w-64 native:w-72'>
                <DropdownMenuLabel>Ayarlar</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <TouchableOpacity onPress={handleProfile}>
                      <View className='flex-row items-center'>
                        <User color="purple" />
                        <Text className='ml-2 text-base'>Profilim</Text>
                      </View>
                    </TouchableOpacity>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <TouchableOpacity onPress={handleSettings}>
                      <View className='flex-row items-center'>
                        <Settings color="purple" />
                        <Text className='ml-2 text-base'>Genel Ayarlar</Text>
                      </View>
                    </TouchableOpacity>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <TouchableOpacity onPress={handleLogout}>
                      <View className='flex-row items-center'>
                        <LogOut color="purple" />
                        <Text className='ml-2 text-base'>Çıkış Yap</Text>
                      </View>
                    </TouchableOpacity>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </View>
        ),
      }}
    >
      <Drawer.Screen
        name="(tabs)"
        options={{
          drawerIcon: ({color, size}) => <Home color={color} size={size}/>,
          drawerLabel: "Ana Sayfa",
          title: "Edulim",
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
