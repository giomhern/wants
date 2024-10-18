import { StyleSheet, Text, TextInput, SafeAreaView, View } from "react-native";
import React, { useState } from "react";
import { Octicons } from "@expo/vector-icons";
import { colors } from "@/consts/theme";

const CreateWant = () => {
  const [link, setLink] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.search}>
          <Octicons name="search" size={16} color={colors.colorDarkGrey} />
          <TextInput
            style={{ width: "100%" }}
            placeholder="Paste your link :)"
            value={link}
            onChangeText={setLink}
          />
        </View>
        <Text style={styles.disclaimer}>
          Paste your link and we will handle the rest for you. Errors do happen,
          but don't worry. You will be able to modify it to your needs.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default CreateWant;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.colorWhite,
  },
  innerContainer: {
    padding: 16,
  },
  text: {
    fontSize: 24,
  },
  search: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    borderWidth: 1,
    padding: 10,
    borderColor: colors.colorGrey,
    borderRadius: 10,
    marginVertical: 16, 
  },
  disclaimer: {
    fontSize: 12, 
    color: colors.colorDarkGrey, 
  }
});
