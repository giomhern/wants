import { colors } from "@/consts/theme";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface CategoryProps {
  id: number;
  category: string;
  selectedId: number;
  setSelected: (id: number) => void;
}

const CategoryCard = ({
  id,
  category,
  selectedId,
  setSelected,
}: CategoryProps) => {
  return (
    <TouchableOpacity
      style={selectedId == id ? styles.card : styles.selectedCard}
      onPress={() => setSelected(id)}
    >
      <Text
        style={selectedId == id ? styles.selectedCardText : styles.cardText}
      >
        {category}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.colorBlack,
    display: "flex",
    alignContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 24,
    marginHorizontal: 3,
  },
  selectedCard: {
    backgroundColor: colors.colorGrey,
    display: "flex",
    alignContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 24,
    marginHorizontal: 3,
  },
  selectedCardText: {
    color: colors.colorWhite,
  },
  cardText: {
    color: colors.colorDarkGrey,
  },
});
