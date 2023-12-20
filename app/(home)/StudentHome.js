import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Feather, Entypo, Ionicons, Octicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';
// import { Entypo } from '@expo/vector-icons';

const StudentHome = () => {
  return (
    <ScrollView>
        <LinearGradient colors={["#7F7FD5", "#E9E4F0"]} style={{ flex: 1 }}>
        <View style={{ padding: 16 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Feather name="bar-chart" size={24} color="black" />
            <Text style={{ fontSize: 16, fontWeight: "600" }}>
              Student ClassRoom
            </Text>
            <Entypo name="lock" size={24} color="black" />
          </View>
           
          <View
            style={{
              marginTop: 20,
              flexDirection: "row",
              alignItems: "center",
              gap: 20,
            }}
          >
            <Pressable
          //  onPress={() => router.push("/(home)/employees")}
              style={{
                backgroundColor: "#D3CCE3",
                padding: 12,
                borderRadius: 6,
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
              }}
            >
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  backgroundColor: "white",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Ionicons name="ios-people-sharp" size={24} color="black" />
              </View>
              <Text style={{ marginTop: 7, fontWeight: "600" }}>
                Track Attendence
              </Text>
            </Pressable>
            <Pressable
              // onPress={() => router.push("/(home)/markattendance")}
              style={{
                backgroundColor: "#D3CCE3",
                padding: 12,
                borderRadius: 6,
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
              }}
            >
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  backgroundColor: "white",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Ionicons name="ios-people-sharp" size={24} color="black" />
              </View>
              <Text style={{ marginTop: 7, fontWeight: "600" }}>
                Your Profile
              </Text>
            </Pressable>
          </View>

          <View
            style={{
              marginTop: 20,
              backgroundColor: "white",
              paddingHorizontal: 10,
              paddingVertical: 10,
              borderRadius: 7,
            }}
          >
            <Pressable
              style={{
                backgroundColor: "#6A85B6",
                borderRadius: 6,
                padding: 10,
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 10,
              }}
            >
              <View
                style={{
                  padding: 7,
                  width: 45,
                  height: 45,
                  borderRadius: 7,
                  backgroundColor: "white",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Ionicons name="newspaper-outline" size={24} color="black" />
              </View>
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 16,
                  fontWeight: "600",
                  flex: 1,
                }}
              >
                Submit Assignment
              </Text>
              <View
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 7,
                  backgroundColor: "white",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Entypo name="chevron-right" size={24} color="black" />
              </View>
            </Pressable>
            <Pressable
                // onPress={() => router.push("/(home)/summary")}
              style={{
                backgroundColor: "#6A85B6",
                borderRadius: 6,
                padding: 10,
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 10,
              }}
            >
              <View
                style={{
                  padding: 7,
                  width: 45,
                  height: 45,
                  borderRadius: 7,
                  backgroundColor: "white",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Octicons name="repo-pull" size={24} color="black" />
              </View>
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 16,
                  fontWeight: "600",
                  flex: 1,
                }}
              >
                Previous Year Papers
              </Text>
              <View
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 7,
                  backgroundColor: "white",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Entypo name="chevron-right" size={24} color="black" />
              </View>
            </Pressable>
            <Pressable
              style={{
                backgroundColor: "#6A85B6",
                borderRadius: 6,
                padding: 10,
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 10,
              }}
            >
              <View
                style={{
                  padding: 7,
                  width: 45,
                  height: 45,
                  borderRadius: 7,
                  backgroundColor: "white",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Octicons name="report" size={24} color="black" />
              </View>
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 16,
                  fontWeight: "600",
                  flex: 1,
                }}
              >
                Attendence Creiteria
              </Text>
              <View
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 7,
                  backgroundColor: "white",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Entypo name="chevron-right" size={24} color="black" />
              </View>
            </Pressable>
            <Pressable
            //  onPress={() => router.push("/(home)/upload")}
              style={{
                backgroundColor: "#6A85B6",
                borderRadius: 6,
                padding: 10,
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 10,
              }}
            >
              <View
                style={{
                  padding: 7,
                  width: 45,
                  height: 45,
                  borderRadius: 7,
                  backgroundColor: "white",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Ionicons name="people" size={24} color="black" />
              </View>
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 16,
                  fontWeight: "600",
                  flex: 1,
                }}
              >
                Upload Assignment
              </Text>
              <View
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 7,
                  backgroundColor: "white",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Entypo name="chevron-right" size={24} color="black" />
              </View>
           </Pressable>
           </View>

           <View style={styles.footer}>
             <Text style={styles.footerText}>© 2024 Made by Shibraj</Text>
       
        <View style={styles.socialIconsContainer}>
         <AntDesign name="github" size={18} color="black" />
         <Entypo name="linkedin" size={18} color="black" />
         <Entypo name="instagram-with-circle" size={18} color="black" />
         <Entypo name="twitter" size={18} color="black" />
        </View>
      </View>

          </View>
        </LinearGradient>
    </ScrollView>
  )
}

export default StudentHome

const styles = StyleSheet.create({
  footer: {
    //backgroundColor: "#333",
    padding: 60,
    alignItems: "center",
    
  },
  footerText: {
    color: "black",
    marginTop: 100,
    fontWeight:'bold',
    fontSize:16,
  },
  socialIconsContainer: {
    flexDirection: "row",
    marginTop: 10,
    gap:8,
  },

})
