import { Link } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function account() {
    return (
        <SafeAreaView>
            <Text>Accounts page</Text>
            <Link href={"/accountinfo"}>
                <Text>Account info</Text>
            </Link>
        </SafeAreaView>
    )
}