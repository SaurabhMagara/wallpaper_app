import { Link } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function accountinfo() {
    return (
        <SafeAreaView>
            <View style={{ backgroundColor: "black" }}>
                <Text style={{color : "white"}}>Go Back</Text>
            </View>
            <Text>Account info page</Text>
        </SafeAreaView>
    )
}