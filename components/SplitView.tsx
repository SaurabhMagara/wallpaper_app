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
        <ThemedView style={style.container}>
            <ThemedView style={style.innerContainer}>
                <FlatList
                    data={wallpaper.filter((_, index) => index % 2 === 0)}
                    renderItem={({ item }) => <View style={style.imageContainer}><ImageCard wallpaper={item}
                        onPress={() => setSelectedWallpaper(item)} /></View>}
                    keyExtractor={item => item.name}
                />
            </ThemedView>
            <ThemedView style={style.innerContainer}>
                <FlatList
                    data={wallpaper.filter((_, index) => index % 2 === 1)}
                    renderItem={({ item }) => <View style={style.imageContainer}><ImageCard wallpaper={item}
                        onPress={() => setSelectedWallpaper(item)} /></View>}
                    keyExtractor={item => item.name}
                />
            </ThemedView>
        </ThemedView>
        {selectedWallpaper && <DownloadPicture wallpaper={selectedWallpaper} onClose={() => setSelectedWallpaper(null)} />}
    </>
}