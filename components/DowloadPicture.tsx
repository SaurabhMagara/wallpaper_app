import React, { useCallback, useRef } from 'react';
import { Image, Pressable, StyleSheet, useColorScheme, View } from 'react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { Wallpaper } from '@/hooks/useWallpapers';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';
// import { GestureHandlerRootView } from 'react-native-gesture-handler';


//Bottom sheet that appeares from bottom
export const DownloadPicture = ({ onClose, wallpaper }:
    { onClose: () => void, wallpaper: Wallpaper }) => {
    // ref
    const bottomSheetRef = useRef<BottomSheet>(null);
    const Theme = useColorScheme() ?? 'light';


    // callbacks --> shows handle is triggered
    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index);
    }, []);

    // renders
    return (
        // <GestureHandlerRootView style={styles.container}>
        <BottomSheet
            onClose={onClose}
            snapPoints={["90%"]}
            ref={bottomSheetRef}
            onChange={handleSheetChanges}
            enablePanDownToClose={true}
            handleIndicatorStyle={{ display: "none" }}
            handleStyle={{ display: "none" }}
            style={styles.container}
        >
            <BottomSheetView style={styles.contentContainer}>
                <ThemedView style={{flex:1}}>

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
                </ThemedView>
            </BottomSheetView>
        </BottomSheet>
        // <</GestureHandlerRootView>
    );
};

function DownloadButton() {
    const theme = useColorScheme() ?? "light";
    return <Pressable style={{
        marginHorizontal: 40,
        marginVertical: 40,
        display: "flex",
        justifyContent: "center",
        alignItems : "center",
        gap: 2,
        flexDirection: "row",
        padding: 10,
        borderRadius: 10,
        borderWidth :1,
        borderColor : theme === "light" ? Colors.light.text : Colors.dark.text
    }}>
        <Ionicons
            name="download"
            size={24}
            color={theme === "light" ? Colors.light.icon : Colors.dark.icon} />
        <ThemedText style={{
            fontSize: 20,
            textAlign: "center",
            fontWeight: "600"
        }}
        >
            Download</ThemedText>
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
        height: "60%",
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

