import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { colors } from "@/consts/theme";
import { Octicons } from "@expo/vector-icons";
import ProfileInput from "@/components/ProfileInput";

const Profile = () => {
  const [username, setUsername] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.imageContainer}>
          <View style={styles.imagePlaceholder}></View>
          <View>
            <Text style={styles.name}>Giovanni Maya</Text>
            <Pressable style={styles.statusArea}>
              <Octicons name="plus" size={18} color={colors.colorBlue} />
              <Text style={{ color: colors.colorBlue }}>Add Status</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.tabsContainer}></View>
        <View style={{ flexDirection: "column", gap: 20, marginVertical: 14 }}>
          <ProfileInput
            placeholder="giomhern"
            type="Username"
            iconName="person"
            size={18}
          />
          <ProfileInput
            placeholder="Hi, I'm Gio!"
            type="Bio"
            iconName="note"
            size={18}
          />
          <ProfileInput
            placeholder="johndoe@example.com"
            type="Email"
            iconName="package"
            size={18}
          />
          <ProfileInput
            placeholder="+1 (555)-555-5555"
            type="Phone"
            iconName="device-mobile"
            size={18}
          />
          <ProfileInput
            placeholder="Los Angeles, CA"
            type="Location"
            iconName="location"
            size={18}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.colorWhite,
  },
  text: {
    fontSize: 24,
  },
  innerContainer: {
    padding: 20,
  },
  imagePlaceholder: {
    backgroundColor: colors.colorGrey,
    height: 80,
    width: 80,
    borderRadius: 50,
  },
  imageContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    marginVertical: 14,
  },
  name: {
    fontSize: 20,
    fontWeight: "500",
  },
  statusArea: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  tabsContainer: {
    backgroundColor: colors.colorGrey,
    width: "100%",
    height: 42,
    marginBottom: 14,
    borderRadius: 24 
  },
});
