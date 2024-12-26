import { SplitView } from '@/components/SplitView';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import { useLibraryWallpaper, useLikedWallpaper, useSuggestedWallpaper } from '@/hooks/useWallpapers';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaView, StyleSheet, useColorScheme } from 'react-native';

// making top tabs which are slidable
const Tab = createMaterialTopTabNavigator();

export default function foryou() {
  const theme = useColorScheme() ?? "light";
  return (
    <SafeAreaView style={styles.container}>
      <Tab.Navigator style={{flex : 1}}
       screenOptions={{
        tabBarActiveTintColor : Colors[theme].tint,
        tabBarStyle :{
          backgroundColor : Colors[theme].background
        },
        tabBarIndicatorStyle : {
          backgroundColor : Colors[theme].indicator,
          height : 5
        }
      }}>
        <Tab.Screen name="Suggested" component={SuggestedScreen} />
        <Tab.Screen name="Liked" component={LikedScreen} />
        <Tab.Screen name="Library" component={LibraryScreen} />
      </Tab.Navigator>
    </SafeAreaView>
  );
}

//suggested screen 
function SuggestedScreen() {
  const wallpaper = useSuggestedWallpaper();

  return <ThemedView style={styles.container}>
    <SplitView wallpaper={wallpaper} />
  </ThemedView>
}

//liked screen
function LikedScreen() {
  const wallpaper = useLikedWallpaper();

  return <ThemedView style={styles.container}>
    <SplitView wallpaper={wallpaper} />
  </ThemedView>
}

//Library screen
function LibraryScreen() {
  const wallpaper = useLibraryWallpaper();
  return <ThemedView style={styles.container}>
    <SplitView wallpaper={wallpaper} />
  </ThemedView>
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})