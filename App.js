import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import GoalInputComponent from "./components/GoalInput.component";
import GoalItemComponent from "./components/GoalItem.component";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [allGoals, setAllGoals] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addGoalHandler = (enteredGoalText) => {
    setAllGoals((currentAllGoals) => [
      ...currentAllGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    setIsModalOpen(false);
  };

  const onDeleteHandler = (id) => {
    setAllGoals((prevState) => {
      return prevState.filter((goal) => goal.id !== id);
    });
  };

  const startAddGoalHandler = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color={"#a065ec"}
          onPress={startAddGoalHandler}
        />

        <GoalInputComponent
          addGoalHandler={addGoalHandler}
          isModalVisible={isModalOpen}
          isShowModal={setIsModalOpen}
        />

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
    </>
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
