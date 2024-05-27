import { View, TextInput, TouchableOpacity, Image, Alert } from "react-native";
import React, { useState } from "react";
import { icons } from "../constants";
import { router, usePathname } from "expo-router";

const SearchInput = () => {
  const pathname = usePathname();
  const [query, setQuery] = useState("");
  return (
    <View
      className="border-2 border-[#0c2320] w-full h-16 bg-[#0f2a26] px-4 
              rounded-xl focus:border-secondary items-center flex-row space-x-4"
    >
      <TextInput
        className="text-white text-base font-pregular flex-1 mt-0.5"
        value={query}
        placeholder="Search for a video topic"
        placeholderTextColor="#CDCDE0"
        onChangeText={(event) => setQuery(event)}
      />
      <TouchableOpacity
        onPress={() => {
          if (!query) {
            return Alert.alert(
              "Missing query",
              "Please input something to search results across database"
            );
          }
          if (pathname.startsWith("/search")) router.setParams({ query });
          else router.push(`/search/${query}`);
        }}
      >
        <Image source={icons.search} className="w-6 h-6" resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
