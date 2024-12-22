import { Wallpaper } from "@/hooks/useWallpapers";
import { View, Image, StyleSheet, useColorScheme } from "react-native";
import { ThemedText } from "./ThemedText";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

export default function ImageCard({ wallpaper }: { wallpaper: Wallpaper }) {
    const Theme = useColorScheme() ?? 'light';
    return <View>
        <Image source={{ uri: wallpaper.url }} style={style.image} />
        <View style={style.labelContainer}>
            <ThemedText style={style.label}>{wallpaper.name}</ThemedText>
            <View style={style.iconContainer}>
                <Ionicons name="heart" size={20} color={Theme === "light" ? Colors.light.icon : Colors.dark.icon} />
            </View>
        </View>
    </View>
}

const style = StyleSheet.create({
    iconContainer:{
        display : "flex",
        justifyContent : "center"
    },
    image: {
        flex: 1,
        height: 200,
        borderRadius: 20
    },
    label: {
        color: "white"
    },
    labelContainer: {
        position: "absolute",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        borderBottomRightRadius : 20,
        borderBottomLeftRadius : 20,
        bottom: 0,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 5
    }
})