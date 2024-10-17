import { StyleSheet, Text, View, TextInput } from "react-native";
import { colors } from "@/consts/theme";
import { Octicons } from "@expo/vector-icons";
import { useState } from "react";

interface InputProps {
  type?: string;
  iconName?: any;
  placeholder: string;
  size?: number;
}

const ProfileInput = ({ type, iconName, placeholder, size }: InputProps) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
      }}
    >
      
      <Octicons name={iconName} color={colors.colorDarkGrey} size={20} />
      <View style={{ width: "90%" }}>
        <Text
          style={{
            color: colors.colorDarkGrey,
            fontSize: 12,
            paddingBottom: 10,
            fontWeight: "500",
          }}
        >
          {type}
        </Text>

        <View
          style={{
            height: 30,
            borderBottomWidth: 1,
            borderBottomColor: colors.colorGrey,
            width: "100%",
          }}
        >
          <Text
            style={{
              fontWeight: "400",
            }}
          >
            {placeholder}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ProfileInput;

const styles = StyleSheet.create({});
