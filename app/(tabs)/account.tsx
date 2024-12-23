import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View, Appearance, useColorScheme } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";

export default function account() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ThemedView style={{ flex: 1 }}>
                <Header />
                <ThemedView>
                    <LogInButtons />
                    <ThemeSelector />
                </ThemedView>
            </ThemedView>
        </SafeAreaView>
    )
}

function Header() {
    return <ThemedView style={styles.topbar}>
        <ThemedText style={styles.textBig}> Panels</ThemedText>
        <ThemedText style={{ paddingLeft: 10 }}>Sign in to save your data</ThemedText>
    </ThemedView>
}

function ThemeSelector() {
    return <ThemedView style={{ padding: 20 }}>
        <ThemedText style={styles.textBig}> Settings</ThemedText>
        <ThemedText style={{ paddingLeft: 10 }}>Theme</ThemedText>
        <ThemedView style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>
            <ThemedButton title={"Dark"} selected={false} colorScheme={"dark"} />
            <ThemedButton title={"Light"} selected={false} colorScheme={"light"} />
            <ThemedButton title={"System"} selected={false} colorScheme={null} />
        </ThemedView>
    </ThemedView>
}

function ThemedButton({ title, selected, colorScheme }: { title: string, selected: boolean, colorScheme: "dark" | "light" | null }) {
    const theme = useColorScheme();
    return <Pressable
        onPress={() => Appearance.setColorScheme(colorScheme)}
        style={{
            padding: 10,
            borderWidth: 1,
            borderColor: theme === "light" ? Colors.light.text : Colors.dark.icon,
            borderRadius: 5,
            flex: 0.3
        }}
    >
        <ThemedText style={{ textAlign: "center", width: "100%" }}>{title}</ThemedText>
    </Pressable>
}

function LogInButtons() {
    return <>
        <AuthButton label="Sign in" icon={"logo-google"} />
        <AuthButton label="Sign in" icon={"logo-apple"} />
    </>
}

function AuthButton({ label, icon }: {
    label: string,
    icon: any
}) {
    const theme = useColorScheme() ?? "light";

    return <Pressable style={{
        marginHorizontal: 40,
        marginVertical: 5,
        display: "flex",
        justifyContent: "center",
        gap: 2,
        flexDirection: "row",
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: theme === "light" ? Colors.light.text : Colors.dark.icon
    }}>

        <Ionicons
            name={icon}
            size={24}
            color={theme === 'light' ? Colors.light.icon : Colors.dark.icon} />
        <ThemedText style={{
            fontSize: 20,
            textAlign: "center",
            fontWeight: "600"
        }}
        >
            {label}</ThemedText>
    </Pressable>
}

const styles = StyleSheet.create({
    textBig: {
        fontSize: 23,
        fontWeight: "600"
    },
    topbar: {
        padding: 30
    },
    themeSelectorContainer: {
        flex: 1
    },
    themeSelectorChild: {
        flex: 0.5,
    }
})