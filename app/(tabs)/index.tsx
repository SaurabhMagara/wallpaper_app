import { DownloadPicture } from "@/components/BottomSheet";
import ImageCard from "@/components/ImageCard";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedView } from "@/components/ThemedView";
import useWallpapers, { Wallpaper } from "@/hooks/useWallpapers";
import { Image, StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

export default function explore() {
    const wallpapers = useWallpapers();
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ParallaxScrollView headerBackgroundColor={{ dark: "white", light: "white" }} headerImage={<Image style={{ flex: 1 }} source={{ uri: wallpapers[0].url ?? "" }} />}>
                <ThemedView style={style.container}>

                    <ThemedView style={style.innerContainer}>
                        <FlatList
                            data={wallpapers}
                            renderItem={({ item }) => <ImageCard wallpaper={item} />}
                        />
                    </ThemedView>
                    <ThemedView style={style.innerContainer}>
                        <FlatList
                            data={wallpapers}
                            renderItem={({ item }) => <ImageCard wallpaper={item} />}
                        />
                    </ThemedView>
                </ThemedView>
            </ParallaxScrollView>
        </SafeAreaView>
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
        padding: 10
    }
})