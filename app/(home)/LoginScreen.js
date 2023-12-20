// LoginScreen.js

import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";
import axios from 'axios'
import { useRouter } from "expo-router";

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://192.168.147.107:8000/login", { username, password });

      if (response.data.userType === "teacher") {
        router.push("/Teacher")
        // navigation.navigate("index");
      } else {
        router.push("/StudentHome"); // Replace with your student home screen
      }
    } catch (error) {
      console.error("Error logging in:", error);
      // Handle login error
    }
  };

  return (
    <View>
      <TextInput placeholder="Username" value={username} onChangeText={setUsername} />
      <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
