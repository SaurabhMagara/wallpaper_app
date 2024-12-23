import React, { useCallback, useRef } from 'react';
import { Button, Image, Pressable, StyleSheet, Text, useColorScheme, View } from 'react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { Wallpaper } from '@/hooks/useWallpapers';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { ThemedText } from './ThemedText';
// import { GestureHandlerRootView } from 'react-native-gesture-handler';

export const DownloadPicture = ({ onClose, wallpaper }:
    { onClose: () => void, wallpaper: Wallpaper }) => {
    // ref
    const bottomSheetRef = useRef<BottomSheet>(null);
    const Theme = useColorScheme() ?? 'light';


    // callbacks
    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index);
    }, []);

    // renders
    return (
        // <GestureHandlerRootView style={styles.container}>
        <BottomSheet
            onClose={onClose}
            snapPoints={["95%"]}
            ref={bottomSheetRef}
            onChange={handleSheetChanges}
            enablePanDownToClose={true}
            handleIndicatorStyle={{ display: "none" }}
            handleStyle={{ display: "none" }}
            style={styles.container}
        >
            <BottomSheetView style={styles.contentContainer}>
                <Image source={{ uri: wallpaper?.url }} style={styles.image} />
                <View style={styles.topbar} >
                    <Ionicons
                        name="close"
                        size={24}
                        color={Theme === "light" ? Colors.light.icon : Colors.dark.icon} />
                    <View style={styles.topbarInner}>
                        <Ionicons
                            name="heart"
                            size={24}
                            color={Theme === "light" ? Colors.light.icon : Colors.dark.icon} />
                        <Ionicons
                            name="share"
                            size={24}
                            style={{ paddingLeft: 4 }}
                            color={Theme === "light" ? Colors.light.icon : Colors.dark.icon} />
                    </View>
                </View>
                <View style={styles.textContainer}>
                    <ThemedText style={styles.text}>{wallpaper.name}</ThemedText>
                </View>
                <DownloadButton />
            </BottomSheetView>
        </BottomSheet>
        // <</GestureHandlerRootView>
    );
};

function DownloadButton() {
    const Theme = useColorScheme() ?? 'light';
    return <Pressable style={{
        backgroundColor: "black",
        marginHorizontal: 40,
        marginVertical: 40,
        display: "flex",
        justifyContent: "center",
        gap:2,
        flexDirection: "row",
        padding: 10,
        borderRadius: 10
    }}>
        <Ionicons
            name="download"
            size={24}
            color={"white"} />
        <Text style={{
            fontSize: 20,
            color: "white",
            textAlign: "center",
            fontWeight: "600"
        }}
        >
            Download</Text>
    </Pressable>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        flex: 1,
    },
    image: {
        height: "70%",
        borderRadius: 15,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    topbar: {
        position: "absolute",
        padding: 10,
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        width: "100%"
    },
    topbarInner: {
        display: "flex",
        flexDirection: "row",

    },
    textContainer: {
        width: "100%"
    },
    text: {
        fontSize: 22,
        fontWeight: "600",
        textAlign: "center",
        paddingTop: 20
    }
});

