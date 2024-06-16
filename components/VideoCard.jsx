import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { icons } from "../constants";
import { ResizeMode, Video } from "expo-av";

const VideoCard = ({
  video: {
    title,
    thumbnail,
    video,
    creator: { username, avatar },
  },
}) => {
  const [play, setPlay] = useState(false);
  const [heartFilled, setHeartFilled] = useState(false);

  const handleHeartPress = () => {
    setHeartFilled(!heartFilled);
  };
  return (
    <View className="flex-col px-4 items-center mb-14">
      <View className="flex-row items-start gap-3">
        <View className="items-center justify-center flex-row flex-1">
          <View className="w-[46px] h-[46px] rounded-lg border border-secondary justify-center items-center p-0.5">
            <Image
              source={{ uri: avatar }}
              className="w-full h-full rounded-md"
              resizeMode="cover"
            />
          </View>
          <View className="ml-3 justify-center gap-y-1 flex-1">
            <Text
              className="font-psemibold text-sm text-white"
              numberOfLines={1}
            >
              {title}
            </Text>
            <Text
              className="font-regular text-xs text-gray-100"
              numberOfLines={1}
            >
              {username}
            </Text>
          </View>
        </View>
        <TouchableOpacity className="pt-2" onPress={handleHeartPress}>
          <Image
            source={heartFilled ? icons.heartFilled : icons.heart}
            className="w-5 h-5"
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      {play ? (
        <Video
          source={{ uri: video }}
          className="w-full h-60 mt-3 rounded-xl bg-white/10"
          resizeMode={ResizeMode.CONTAIN}
          useNativeControls
          shouldPlay
          onPlaybackStatusUpdate={(status) => {
            if (status.didJustFinish) {
              setPlay(false);
            }
          }}
        />
      ) : (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setPlay(true)}
          className="w-full h-60 rounded-xl mt-3 relative justify-center items-center"
        >
          <Image
            source={{ uri: thumbnail }}
            className="w-full h-full rounded-xl mt-3"
            resizeMode="cover"
          />
          <Image
            source={icons.play}
            className="w-12 h-12 absolute"
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default VideoCard;
