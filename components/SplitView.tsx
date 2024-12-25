import { FlatList } from "react-native-gesture-handler";
import { ThemedView } from "./ThemedView";
import { Wallpaper } from "@/hooks/useWallpapers";
import React, { style } from "@/app/(tabs)";
import { useState } from "react";
import ImageCard from "./ImageCard";
import { View } from "react-native";
import { DownloadPicture } from "./DowloadPicture";

export function SplitView({ wallpaper }: { wallpaper: Wallpaper[] }) {
    const [selectedWallpaper, setSelectedWallpaper] = useState<null | Wallpaper>(null)
    return <>
        <FlatList
            data={wallpaper.filter((_, index) => index % 2 === 0).map((_, index) => [wallpaper[index], wallpaper[index + 1]])}
            renderItem={({ item: [first, second] }) => <ThemedView style={style.container}>
                <ThemedView style={style.innerContainer}>
                    <View style={style.imageContainer}><ImageCard wallpaper={first}
                        onPress={() => setSelectedWallpaper(first)} /></View>
                </ThemedView>
                <ThemedView style={style.innerContainer}>
                    <View style={style.imageContainer}><ImageCard wallpaper={first}
                        onPress={() => setSelectedWallpaper(second)} /></View>
                </ThemedView>
            </ThemedView>
            }
            keyExtractor={item => item[0].name}
        />

        {selectedWallpaper && <DownloadPicture wallpaper={selectedWallpaper} onClose={() => setSelectedWallpaper(null)} />}
    </>
}