import { StyleSheet, Text, View, TextInput } from "react-native";
import { colors } from "@/consts/theme";
import { Octicons } from "@expo/vector-icons";
import { useState } from "react";

interface InputProps {
  type?: string;
  iconName?: string;
  placeholder: string;
  size?: number;
}

const ProfileInput = ({ type, iconName, placeholder, size }: InputProps) => {
  const [value, setValue] = useState("");
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
        <TextInput
          onChangeText={setValue}
          value={value}
          placeholder={placeholder}
          placeholderTextColor={colors.colorBlack}
          style={{
            height: 26,
            fontWeight: "400",
            borderBottomWidth: 1,
            paddingBottom: 16,
            borderBottomColor: colors.colorGrey,
            width: "100%",
          }}
        />
      </View>
    </View>
  );
};

export default ProfileInput;

const styles = StyleSheet.create({});
