import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import GoalInputComponent from "./components/GoalInput.component";
import GoalItemComponent from "./components/GoalItem.component";

export default function App() {
  const [allGoals, setAllGoals] = useState([]);

  const addGoalHandler = (enteredGoalText) => {
    setAllGoals((currentAllGoals) => [
      ...currentAllGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  };

  const onDeleteHandler = (id) => {
    setAllGoals((prevState) => {
      return prevState.filter((goal) => goal.id !== id);
    });
  };

  return (
    <View style={styles.appContainer}>
      <GoalInputComponent addGoalHandler={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={allGoals}
          renderItem={(itemData) => {
            return (
              <GoalItemComponent
                text={itemData?.item?.text}
                id={itemData?.item?.id}
                onDelete={onDeleteHandler}
              />
            );
          }}
          keyExtractor={(item) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  goalsContainer: {
    flex: 4,
  },
});
