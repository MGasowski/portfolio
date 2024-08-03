import { View, Text, Image } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const Main = () => {
  const insets = useSafeAreaInsets();
  return (
    <View className="flex-1 ">
      <View
        className="bg-blue-500 p-4 h-1/3 items-center"
        style={{ paddingTop: insets.top + 60 }}
      >
        <View className="h-32 w-32 rounded-full bg-blue-800"></View>

        <Text>Marcin</Text>
      </View>
    </View>
  );
};
