import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from './../../components/FormField';

const Create = () => {
  return (
    <SafeAreaView className="h-full bg-primary">
      <ScrollView className="px-4 my-6">
        <Text className="font-psemibold text-2xl text-white">Upload Video</Text>
        <FormField/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Create;
