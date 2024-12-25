import ParallaxScrollView from "@/components/ParallaxScrollView";
import { SplitView } from "@/components/SplitView";
import useWallpapers from "@/hooks/useWallpapers";
import { Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Entry point of app -< explore page
export default function explore() {
    // using use Wallpaper to show wallpaper in explore page
    const wallpapers = useWallpapers(); 

    //ParallaxScroll used

    // safeareaview placed contents in safe area where it can easily seen
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