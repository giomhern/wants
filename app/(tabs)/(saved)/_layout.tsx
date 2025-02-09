import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerShown: false, animation: "fade" }}
      />
      <Stack.Screen
        name="createItem"
        options={{ headerShown: false, presentation: "modal" }}
      />
    </Stack>
  );
}
