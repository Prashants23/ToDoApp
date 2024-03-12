import React from "react";
import { Text, TouchableOpacity } from "react-native";

const CategoryItem = ({
  item,
  selectedCategory,
  setSelectedCategory,
  styles,
  disabled,
}) => (
  <TouchableOpacity
    style={[
      styles.categoryButton,
      selectedCategory?.label === item.label && styles.selectedCategory,
    ]}
    onPress={() => setSelectedCategory(item)}
    disabled={disabled}
  >
    <Text
      style={[
        styles.categoryText,
        selectedCategory?.label === item.label && styles.selectedCategoryText,
      ]}
    >
      {item.label}
    </Text>
  </TouchableOpacity>
);

export default React.memo(CategoryItem);
