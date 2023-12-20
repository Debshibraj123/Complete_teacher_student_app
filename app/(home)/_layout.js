import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Teacher" />
      <Stack.Screen name="employees" />
      <Stack.Screen name="adddetails" />
      <Stack.Screen name="markattendance" />
      <Stack.Screen name="[user]" />
      <Stack.Screen name="summary" />
      <Stack.Screen name="upload"  />
      <Stack.Screen name="LoginScreen" />
    </Stack>
  );
}
