import { View, Text } from "react-native";
import React from "react";

const VideoCard = ({
  video: {
    title,
    thumbnail,
    video,
    creator: { username, avatar },
  },
}) => {
  return (
    <View className="flex-col px-4 justify-center mb-14">
      <Text className="font-psemibold text-xl text-white">{title}</Text>
    </View>
  );
};

export default VideoCard;
