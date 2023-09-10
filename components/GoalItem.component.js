import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const GoalItemComponent = ({ text, id, onDelete }) => {
  const deleteHandler = () => {
    onDelete(id);
  };

  return (
    <View style={styles.goalItem}>
      <Pressable android_ripple={{ color: "#5aaddd" }} onPress={deleteHandler}>
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItemComponent;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
    padding: 8,
  },
});
