import { Tabs } from "expo-router";
import { Octicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "@/consts/theme";
import { Link } from "expo-router";
import { Text, Pressable, View } from "react-native";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.colorBlack,
        headerShown: false,
        tabBarStyle: {
          borderTopWidth: 0,
        },
      }}
    >
      <Tabs.Screen
        name="(home)"
        options={{
          title: "Home",
          tabBarShowLabel: false,
          tabBarIcon: ({ size, color }) => (
            <Octicons name="feed-tag" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="(saved)"
        options={{
          tabBarShowLabel: false,
          headerTitle: "",
          headerLeft: () => (
            <View style={{marginLeft: 16, }}>
              <Text style={{fontSize: 20, fontWeight: "600"}}>Your Wants</Text>
            </View>
          ),
          tabBarIcon: ({ size, color }) => (
            <Octicons name="heart-fill" size={size} color={color} />
          ),
          headerShown: true,
          headerRight: () => (
            <Link href={"(saved)/createItem"} asChild>
              <Pressable hitSlop={20} style={{ paddingHorizontal: 20 }}>
                <Octicons name="plus" size={20} color={colors.colorBlack} />
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="(profile)"
        options={{
          title: "My Profile",
          tabBarShowLabel: false,
          tabBarIcon: ({ size, color }) => (
            <Octicons name="person-fill" size={size} color={color} />
          ),
          headerShown: true,
          headerRight: () => (
            <Link href={"(home)"} asChild>
              <Pressable hitSlop={20} style={{ paddingHorizontal: 20 }}>
                <Octicons name="pencil" size={20} color={colors.colorBlack} />
              </Pressable>
            </Link>
          ),
        }}
      />
    </Tabs>
  );
}
