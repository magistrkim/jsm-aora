import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function App() {
  return (
    <View className="flex-1 bg-white justify-center items-center">
          <Text className="text-blue-800 text-3xl font-pblack">Welcome to Aora!</Text>
          <Link href="/profile" style={{color: "red"}}>Go to Profile</Link>
      <StatusBar style="auto" />
    </View>
  );
}

