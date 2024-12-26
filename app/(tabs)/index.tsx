import React from "react";
import { SplitView } from "@/components/SplitView";
import useWallpapers from "@/hooks/useWallpapers";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Carousel from "react-native-reanimated-carousel";
import { useState } from "react";
import { useCarousel } from "@/hooks/useCarousel";
import { LinearGradient } from "expo-linear-gradient";
import { ThemedText } from "@/components/ThemedText";
import Animated from "react-native-reanimated";

const TOPBAR_HEIGTH = 250;

// Entry point of app -> explore page
export default function explore() {
    // using use Wallpaper to show wallpaper in explore page
    const wallpapers = useWallpapers();
    const width = Dimensions.get("window").width
    const [scrollY, setScrollY] = useState(0);
    const carouselItems = useCarousel();

    // safeareaview placed contents in safe area where it can easily seen
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Animated.View style={{ height: TOPBAR_HEIGTH - scrollY }}>
                <Carousel
                    width={width}
                    data={carouselItems}
                    onSnapToItem={(index) => console.log('current index:', index)}
                    renderItem={({ index }) => (
                        <>
                            <View style={{
                                flex: 1,
                                borderWidth: 1,
                                justifyContent: 'center',
                            }} >
                                <Image source={{ uri: carouselItems[index].image }} style={{ height: TOPBAR_HEIGTH }} />
                            </View>

                            <LinearGradient colors={['transparent', 'black']} style={{ flex: 1, position: "absolute", zIndex: 10, height: TOPBAR_HEIGTH / 2, width: "100%", bottom: 0 }}>
                                <Text style={{ flex: 1,color : "white", paddingTop: TOPBAR_HEIGTH / 3, textAlign: "center", fontSize: 30, fontWeight: "600" }}>
                                    {carouselItems[index].title}
                                </Text>
                            </LinearGradient>
                        </>
                    )}
                />
            </Animated.View>
            <SplitView wallpaper={wallpapers} onScroll={(yOffset) => {
                setScrollY(yOffset)
            }} />
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
    },
})