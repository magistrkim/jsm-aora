import { View, Text, FlatList, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import SearchInput from "../../components/SearchInput";
import Trending from "../../components/Trending";

const Home = () => {
  return (
    <SafeAreaView className="h-full bg-primary">
      <FlatList
        data={[{ id: 1 }, { id: 2 }, { id: 3 }]}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <Text className="font-psemibold text-2xl text-white">{item.id}</Text>
        )}
        ListHeaderComponent={() => (
          <View className="my-6 px-4 space-y-6">
            <View className="justify-between items-start flex-row mb-6">
              <View>
                <Text className="text-sm text-gray-100 font-pmedium">
                  Welcome back
                </Text>
                <Text className="font-psemibold text-2xl text-white">
                  Magistr Kim
                </Text>
              </View>
              <View className="mt-1.5">
                <Image
                  source={images.logoSmall}
                  resizeMode="contain"
                  className="w-9 h-10"
                />
              </View>
            </View>
            <SearchInput />
            <View className="pt-5 pb-8 flex-1 w-full">
              <Text className="font-pregular mb-3 text-lg text-gray-100">
                Latest Videos
              </Text>
              <Trending posts={[{ id: 1 }, { id: 2 }, { id: 3 }] ?? []} />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <Text className="font-pregular mb-3 text-lg text-white">
            Empty
          </Text>
        )}
      />
    </SafeAreaView>
  );
};

export default Home;
