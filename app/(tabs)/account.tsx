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
                    <About />
                </ThemedView>
            </ThemedView>
        </SafeAreaView>
    )
}

//for showing headers
function Header() {
    return <ThemedView style={styles.topbar}>
        <ThemedText style={styles.textBig}> Panels</ThemedText>
        <ThemedText style={{ paddingLeft: 10, paddingTop : 5 }}>Sign in to save your data</ThemedText>
    </ThemedView>
}

function About() {
    return (
        <ThemedView style={styles.topbar} >
            <ThemedText style={{paddingTop : 1, fontSize : 25, fontWeight : "600"}}> About</ThemedText>
            <ThemedView style={{ marginTop: 10 }}>
                <Pressable>
                    <ThemedText style={{ paddingLeft: 10, margin:10, fontSize : 17 }}>Account</ThemedText>
                </Pressable>
                <Pressable>
                    <ThemedText style={{ paddingLeft: 10, margin:10, fontSize : 17 }}>Privacy Policy</ThemedText>
                </Pressable>
                <Pressable>
                    <ThemedText style={{ paddingLeft: 10, margin:10, fontSize : 17 }}>Terms of Services</ThemedText>
                </Pressable>
                <Pressable>
                    <ThemedText style={{ paddingLeft: 10, margin:10, fontSize : 17 }}>Licenses</ThemedText>
                </Pressable>
            </ThemedView>
        </ThemedView>
    )
}

// Theme selctingg buttons
function ThemeSelector() {
    return <ThemedView style={styles.topbar}>
        <ThemedText style={{fontSize : 25, fontWeight : "600", paddingTop : 12}}> Settings</ThemedText>
        <ThemedText style={{ paddingLeft: 10 }}>Theme</ThemedText>
        <ThemedView style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>
            <ThemedButton title={"Dark"} selected={false} colorScheme={"dark"} />
            <ThemedButton title={"Light"} selected={false} colorScheme={"light"} />
            <ThemedButton title={"System"} selected={false} colorScheme={null} />
        </ThemedView>
    </ThemedView>
}


// Theme buttons to set theme dark, light, System
function ThemedButton({ title, selected, colorScheme }: { title: string, selected: boolean, colorScheme: "dark" | "light" | null }) {
    const theme = useColorScheme();
    return <Pressable // Pressable makes element pressable
        onPress={() => Appearance.setColorScheme(colorScheme)} // onPress event -> when button is clicked
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


//Tow login buttons
function LogInButtons() {
    return <View style={{display : "flex", gap : 5}}>
        <AuthButton label="Sign in" icon={"logo-google"} />
        <AuthButton label="Sign in" icon={"logo-apple"} />
    </View>
}


//Individual button
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


//Styles for every component 
//Use Stylesheet.create for defining styles or creating styles
const styles = StyleSheet.create({
    textBig: {
        fontSize: 25,
        fontWeight: "600",
        paddingTop : 25
    },
    topbar: {
        padding: 20,
        paddingTop : 30
    },
    themeSelectorContainer: {
        flex: 1
    },
    themeSelectorChild: {
        flex: 0.5,
    }
})