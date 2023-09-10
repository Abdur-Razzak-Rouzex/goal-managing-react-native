import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const GoalItemComponent = ({ text, id, onDelete }) => {
  const deleteHandler = () => {
    onDelete(id);
  };

  return (
    <Pressable onPress={deleteHandler}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{text}</Text>
      </View>
    </Pressable>
  );
};

export default GoalItemComponent;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
  },
});
