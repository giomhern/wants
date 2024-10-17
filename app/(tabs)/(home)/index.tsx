import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { colors } from "@/consts/theme";
import { categories } from "@/consts/categories";
import CategoryCard from "@/components/CategoryCard";
import { Octicons } from "@expo/vector-icons";
import { FadeIn } from "react-native-reanimated";

const Home = () => {
  const [selectedId, setSelectedId] = useState(1);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.innerContainer}>
        <Text style={styles.hello}>Hello,</Text>
        <Text style={styles.name}>Giovanni Maya!</Text>

        <ScrollView
          horizontal
          scrollEventThrottle={16}
          contentContainerStyle={styles.scroll}
        >
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              id={category.id}
              category={category.category}
              selectedId={selectedId}
              setSelected={setSelectedId}
            />
          ))}
        </ScrollView>

        <View
          style={{
            height: 200,
            flex: 1,
            backgroundColor: colors.colorGrey,
            borderRadius: 20,
            marginVertical: 16,
          }}
        ></View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 14,
          }}
        >
          <Text style={styles.sectionHeaderText}>Shopping Summary</Text>
          <Pressable>
            <Octicons
              name="kebab-horizontal"
              color={colors.colorBlack}
              size={20}
            />
          </Pressable>
        </View>

        <View style={{ flexDirection: "row", gap: 16 }}>
          <View
            style={{
              flex: 1, 
              height: 150,
              backgroundColor: colors.colorGrey,
              borderRadius: 20,
            }}
          ></View>
          <View
            style={{
              flex: 1,
              height: 150,
              backgroundColor: colors.colorGrey,
              borderRadius: 20,
            }}
          ></View>
        </View>
        <View style={{ flexDirection: "row", gap: 16, marginVertical: 20 }}>
          <View
            style={{
              flex: 1, 
              height: 150,
              backgroundColor: colors.colorGrey,
              borderRadius: 20,
            }}
          ></View>
          <View
            style={{
              flex: 1,
              height: 150,
              backgroundColor: colors.colorGrey,
              borderRadius: 20,
            }}
          ></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.colorWhite,
  },
  innerContainer: {
    padding: 20,
  },
  hello: {
    fontSize: 24,
  },
  name: {
    fontSize: 24,
    marginTop: 4,
    fontWeight: "500",
  },
  scroll: {
    marginVertical: 14,
  },
  sectionHeaderText: {
    fontSize: 24,
    fontWeight: "500",
  },
});
