import { View, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { icons } from "../constants";

const SearchInput = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  //   const [showPassword, setShowPassword] = useState(false);
  return (
    <View
      className="border-2 border-[#0c2320] w-full h-16 bg-[#0f2a26] px-4 
              rounded-xl focus:border-secondary items-center flex-row space-x-4"
    >
      <TextInput
        className="text-white text-base font-pregular flex-1 mt-0.5"
        value={value}
        placeholder="Search for a video topic"
        placeholderTextColor="#7b7b8b"
        onChangeText={handleChangeText}
      />
      <TouchableOpacity onPress={() => {}}>
        <Image source={icons.search} className="w-6 h-6" resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
