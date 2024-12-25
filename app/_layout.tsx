import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

//Also routing is based on file structure
//Layout files defines layout like in Next-js
export default function Layout() {
    return <GestureHandlerRootView>
        <Stack screenOptions={{
            headerShown: false
        }} >
            <Stack.Screen name="(nobottombar)/accountinfo" options={{headerShown : true, headerTitle : "Account Info", headerBackTitle : "Go Back"}}  />
        </Stack>
    </GestureHandlerRootView>
}