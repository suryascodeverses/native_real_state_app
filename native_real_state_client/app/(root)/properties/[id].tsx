import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const preoperty = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>preoperty {id}</Text>
    </View>
  );
};

export default preoperty;
