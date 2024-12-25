import { SplitView } from "@/components/SplitView";
import useWallpapers from "@/hooks/useWallpapers";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Carousel from "react-native-reanimated-carousel";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

// Entry point of app -> explore page
export default function explore() {
    // using use Wallpaper to show wallpaper in explore page
    const wallpapers = useWallpapers();
    const width = Dimensions.get("window").width

    // safeareaview placed contents in safe area where it can easily seen
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{flex: 1}}>

                <Carousel
                    width={width}
                    height={300}
                    // autoPlay={true}
                    data={[...new Array(6).keys()]}
                    onSnapToItem={(index) => console.log('current index:', index)}
                    renderItem={({ index }) => (
                        <View
                            style={{
                                flex: 1,
                                borderWidth: 1,
                                justifyContent: 'center',
                            }}
                        >
                            <Text style={{ fontSize: 30, textAlign: "center", height: 300 }}>
                                {index}
                            </Text>
                        </View>
                    )}
                />
            </View>
            {/* <SplitView wallpaper={wallpapers} /> */}
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