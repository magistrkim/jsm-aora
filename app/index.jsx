import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import CustomButton from "../components/CustomButton";
import { Redirect, router } from "expo-router";
import { useGlobalContext } from "../context/GlobalProvider";

export default function App() {
  const { isLoading, isLoggedIn } = useGlobalContext();
  if (!isLoading && isLoggedIn) return <Redirect href="/home" />;
  return (
    <SafeAreaView className="h-full bg-primary">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full h-[85vh] justify-center items-center px-4">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[130px] h-[84px]"
          />
          <Image
            source={images.cards}
            resizeMode="contain"
            className="max-w-[380px] w-full h-[300px]"
          />
          <View className="relative mt-5">
            <Text className="text-white font-bold text-center text-3xl">
              Discover Endless Possibilities with{" "}
              <Text className="text-secondary">Aora</Text>
            </Text>
            <Image
              source={images.path}
              className="absolute w-[136px] h-[15px] -bottom-2 -right-8"
              resizeMode="contain"
            />
          </View>
          <Text className="text-gray-100 mt-7 font-pregular text-center text-sm">
            Where creativity meets innovation: embark on a journey of limitless
            exploration with Aora
          </Text>
          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push("/signin")}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#153d37" style="light" />
    </SafeAreaView>
  );
}
