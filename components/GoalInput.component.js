import React, { useState } from "react";
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

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
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={styles.TextInput}
          placeholder="Your goal!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <Button title="Add Goal" onPress={goalHandler} color={"#5e0acc"} />
          <Button title="Cancel" onPress={handleCloseModal} color={"#f31282"} />
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
    backgroundColor: "#311b6b",
  },
  image: {
    height: 100,
    width: 100,
    margin: 20,
  },
  TextInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 5,
    width: "100%",
    padding: 16,
  },
  buttonContainer: {
    justifyContent: "center",
    gap: 5,
    flexDirection: "row",
    marginTop: 10,
  },
});
