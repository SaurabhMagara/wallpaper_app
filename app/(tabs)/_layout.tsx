import { Colors } from '@/constants/Colors';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { useColorScheme } from 'react-native';

export default function TabLayout() {
  const theme = useColorScheme() ?? "light";
  return (
    <Tabs screenOptions={{ 
      tabBarActiveTintColor: Colors[theme].tint , 
      headerShown: false,
      tabBarStyle : {
        backgroundColor : Colors[theme].background
      }
       }}>
      <Tabs.Screen
        name="foryou"
        options={{
          title: 'For you',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="code" color={color} />,
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="stack-overflow" color={color}
           />,
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: 'Account',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="rocket" color={color} />,
        }}
      />

    </Tabs>
  );
}