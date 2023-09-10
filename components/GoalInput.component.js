import React, { useState } from "react";
import { Button, Modal, StyleSheet, TextInput, View } from "react-native";

const GoalInputComponent = ({
  addGoalHandler,
  isModalVisible,
  isShowModal,
}) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  const goalHandler = () => {
    addGoalHandler(enteredGoalText);
    setEnteredGoalText("");
  };

  const handleCloseModal = () => {
    isShowModal(false);
  };

  return (
    <Modal visible={isModalVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.TextInput}
          placeholder="Your goal!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <Button title="Add Goal" onPress={goalHandler} />
          <Button title="Cancel" onPress={handleCloseModal} />
        </View>
      </View>
    </Modal>
  );
};

export default GoalInputComponent;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  TextInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "100%",
    padding: 8,
  },
  buttonContainer: {
    justifyContent: "center",
    gap: 5,
    flexDirection: "row",
    marginTop: 10,
  },
});
