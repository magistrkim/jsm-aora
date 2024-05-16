import { View, Text } from "react-native";
import React from "react";

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  return (
    <View className="space-y-2">
      <Text className="text-gray-100 text-base font-pmedium">{title}</Text>
    </View>
  );
};

export default FormField;
