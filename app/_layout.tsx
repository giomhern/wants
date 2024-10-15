import { Stack } from "expo-router";
import { Tabs } from "expo-router";
import { Entypo } from "@expo/vector-icons";
import { COLORS } from "../consts/theme";

export default function RootLayout() {
  return (
    <Tabs screenOptions={{tabBarActiveTintColor: COLORS.colorBlack}}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarShowLabel: false,
          tabBarIcon: ({ size, color }) => (
            <Entypo name="shopping-bag" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarShowLabel: false,
          tabBarIcon: ({ size, color }) => (
            <Entypo name="suitcase" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
