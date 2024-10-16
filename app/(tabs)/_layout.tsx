import { Tabs } from "expo-router";
import { Octicons } from "@expo/vector-icons";
import { colors } from "@/consts/theme";

export default function RootLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: colors.colorBlack, headerShown: false }}>
      <Tabs.Screen
        name="(home)"
        options={{
          title: "Home",
          tabBarShowLabel: false,
          tabBarIcon: ({ size, color, focused }) => (
            <Octicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          tabBarShowLabel: false,
          tabBarIcon: ({ size, color, focused }) =>
            focused ? (
              <Octicons name="heart-fill" size={size} color={color} />
            ) : (
              <Octicons name="heart" size={size} color={color} />
            ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarShowLabel: false,
          tabBarIcon: ({ size, color }) => (
            <Octicons name="three-bars" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
