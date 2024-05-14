import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, Text, View } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";

export default function App() {
  return (
    <SafeAreaView className="h-full bg-primary">
          <ScrollView contentContainerStyle={{height: "100%"}}>
              <View className="w-full h-full justify-center items-center px-4">
                  <Image source={images.logo} resizeMode="contain" className="w-[130px] h-[84px]"/>
                  <Image source={images.cards} resizeMode="contain" className="max-w-[380px] w-full h-[300px]"/>
              </View>
        </ScrollView>
    </SafeAreaView>
  );
}
