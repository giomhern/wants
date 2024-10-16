import { StyleSheet, Text, SafeAreaView, View } from "react-native";
import React from "react";

const Saved = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Text>Open up App.tsx to start working on your app!</Text>
      </View>
    </SafeAreaView>
  );
};

export default Saved;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  innerContainer: {
    padding: 16
  },
  text: {
    fontSize: 24,
  },
});
