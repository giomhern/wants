import { StyleSheet, Text, SafeAreaView, View, TextInput } from "react-native";
import React, { useState } from "react";
import { colors } from "@/consts/theme";
import { Octicons } from "@expo/vector-icons";

const Saved = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.search}>
          <Octicons name="search" size={16} color={colors.colorDarkGrey} />
          <TextInput
            style={{ width: "100%" }}
            placeholder="What do you want? :)"
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Saved;

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
  },
});
