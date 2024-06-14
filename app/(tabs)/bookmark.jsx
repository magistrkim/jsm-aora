import { View, Text, SafeAreaView, FlatList } from "react-native";
import EmptyState from "../../components/EmptyState";
import SearchInput from "../../components/SearchInput";
import VideoCard from "../../components/VideoCard";
import React from "react";

const Bookmark = () => {
  return (
    <SafeAreaView className="h-full bg-primary">
      <FlatList
        // data={posts}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => <VideoCard video={item} />}
        ListHeaderComponent={() => (
          <View className="my-6 px-4">
            <Text className="font-psemibold text-2xl text-white">
              Saved Videos
            </Text>
            <View className="mt-6 mb-8">
              <SearchInput
              // initialQuery={query}
              />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No Videos Found"
            subtitle="No videos found for this search query"
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Bookmark;
