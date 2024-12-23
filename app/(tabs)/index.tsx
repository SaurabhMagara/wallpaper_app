import { DownloadPicture } from "@/components/DowloadPicture";
import ImageCard from "@/components/ImageCard";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedView } from "@/components/ThemedView";
import useWallpapers, { Wallpaper } from "@/hooks/useWallpapers";
import { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

export default function explore() {
    const wallpapers = useWallpapers();
    const [selectedWallpaper, setSelectedWallpaper] = useState<null | Wallpaper>(null);
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ParallaxScrollView headerBackgroundColor={{ dark: "white", light: "white" }} headerImage={<Image style={{ flex: 1 }} source={{ uri: wallpapers[0].url ?? "" }} />}>
                <ThemedView style={style.container}>
                    <ThemedView style={style.innerContainer}>
                        <FlatList
                            data={wallpapers.filter((_, index) => index %2 === 1)}
                            renderItem={({ item }) => <View style={style.imageContainer}><ImageCard wallpaper={item}
                            onPress={()=>setSelectedWallpaper(item)} /></View>}
                            keyExtractor={item => item.name}
                        />
                    </ThemedView>
                    <ThemedView style={style.innerContainer}>
                        <FlatList
                            data={wallpapers.filter((_, index)=> index %2 === 0)}
                            renderItem={({ item }) => <View style={style.imageContainer}><ImageCard wallpaper={item} 
                            onPress ={()=> setSelectedWallpaper(item)} /></View>}
                            keyExtractor={item => item.name} 
                        />
                    </ThemedView>
                </ThemedView>
            </ParallaxScrollView>
            {selectedWallpaper !== null && <DownloadPicture wallpaper={selectedWallpaper} onClose={()=>setSelectedWallpaper(null)}/>}
        </SafeAreaView >
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        flexDirection: "row",
    },
    innerContainer: {
        flex: 0.5,
        padding: 5
    },
    imageContainer: {
        paddingVertical: 10
    }
})