import { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "../components/Header";
import TaskInput from "../components/TaskInput";
import { Task } from "../types/Task";

export default function Index() {

  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (text: string) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
  };
  setTasks([newTask, ...tasks]);
};
  return (
    <View>
      <Header />
      <TaskInput onAdd = {addTask}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
});
