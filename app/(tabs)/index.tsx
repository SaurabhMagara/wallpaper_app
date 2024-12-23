import ParallaxScrollView from "@/components/ParallaxScrollView";
import { SplitView } from "@/components/SplitView";
import useWallpapers from "@/hooks/useWallpapers";
import { Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function explore() {
    const wallpapers = useWallpapers(); 
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ParallaxScrollView
                headerBackgroundColor={{ dark: "white", light: "white" }}
                headerImage={
                    <Image style={{ flex: 1 }} source={{ uri: wallpapers[0].url ?? "" }} />
                }>
                <SplitView wallpaper={wallpapers} />
            </ParallaxScrollView>
        </SafeAreaView >
    )
}

export const style = StyleSheet.create({
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