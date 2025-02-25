import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="font-bold text-lg my-10 font-rubik text-3xl" >Welcome to new real state app</Text>
      <Link href="/sign-in">
        <Text style={{ fontSize: 18, color: "blue" }}>Sign In</Text>
      </Link>
      <Link href="/explore">
        <Text style={{ fontSize: 18, color: "blue" }}>explore</Text>
      </Link>
      <Link href="/profile">
        <Text style={{ fontSize: 18, color: "blue" }}>profile</Text>
      </Link>
      <Link href="/properties/1">
        <Text style={{ fontSize: 18, color: "blue" }}>preoperty 1</Text>
      </Link>
    </View>
  );
}
