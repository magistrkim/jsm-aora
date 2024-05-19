import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import FormField from "../../components/FormField";
import CustomButton from "./../../components/CustomButton";
import { Link, router } from "expo-router";
import { createUser } from "../../lib/appwrite";
import { useGlobalContext } from "../../context/GlobalProvider";

const SignUp = () => {
  const { setUser, setIsLoggedIn } = useGlobalContext();
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submitForm = async () => {
    if (form.username === "" || form.email === "" || form.password === "") {
      Alert.alert("Error", "Please fill in all the fields");
    }
    setIsSubmitting(true);
    try {
      const result = await createUser(form.email, form.password, form.username);
      setUser(result);
      setIsLoggedIn(true);

      router.replace("/home");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1"
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView className="bg-primary h-full">
          <View className="w-full h-full justify-center px-4 my-6 flex-1">
            <Image
              source={images.logo}
              resizeMode="contain"
              className="w-[115px] h-[35px]"
            />
            <Text className="text-white text-2xl font-psemibold mt-10 text-semibold">
              Sign Up to Aora
            </Text>
            <FormField
              title="Username"
              value={form.username}
              handleChangeText={(event) =>
                setForm({ ...form, username: event })
              }
              otherStyles="mt-5"
            />
            <FormField
              title="Email"
              value={form.email}
              handleChangeText={(event) => setForm({ ...form, email: event })}
              otherStyles="mt-5"
              keyboardType="email-address"
            />
            <FormField
              title="Password"
              value={form.password}
              handleChangeText={(event) =>
                setForm({ ...form, password: event })
              }
              otherStyles="mt-5"
            />
            <CustomButton
              title="Sign Up"
              handlePress={submitForm}
              containerStyles="mt-7"
              isLoading={isSubmitting}
            />
            <View className="justify-center gap-2 flex-row pt-2">
              <Text className="text-gray-100 text-lg font-pregular">
                Have an account already?
              </Text>
              <Link
                href="/signin"
                className="text-secondary text-lg font-psemibold"
              >
                Sign In
              </Link>
            </View>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default SignUp;
