import { SplitView } from '@/components/SplitView';
import { useLibraryWallpaper, useLikedWallpaper, useSuggestedWallpaper } from '@/hooks/useWallpapers';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StyleSheet,  View } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export default function foryou() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Suggested" component={SuggestedScreen} />
      <Tab.Screen name="Liked" component={LikedScreen} />
      <Tab.Screen name="Library" component={LibraryScreen} />
    </Tab.Navigator>
  );
}

function SuggestedScreen() {
  const wallpaper = useSuggestedWallpaper();

  return <View style={styles.container}>
    <SplitView wallpaper={wallpaper} />
  </View>
}
function LikedScreen() {
  const wallpaper = useLikedWallpaper();

  return <View style={styles.container}>
    <SplitView wallpaper={wallpaper} />
  </View>
}
function LibraryScreen() {
  const wallpaper = useLibraryWallpaper();
  return <View style={styles.container}>
    <SplitView wallpaper={wallpaper} />
  </View>
}

const styles = StyleSheet.create({
  container :{
    flex : 1
  }
})