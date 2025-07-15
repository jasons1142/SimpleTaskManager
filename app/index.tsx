import { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "../components/Header";
import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";
import { Task } from "../types/Task";

export default function Index() {

  //hook for changing the state of tasks in our task list
  const [tasks, setTasks] = useState<Task[]>([]);

  // adding a task to our task list
  const addTask = (text: string) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks([newTask, ...tasks]);
  };

  // toggling a task as complete in our task list
  const toggleTaskComplete = (id: number) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id
        ? { ...task, completed: !task.completed}
        : task
      )
    );
  };

  // removing a task from our task list
  const deleteTask = (id: number) => {
    setTasks(prevTasks =>
      prevTasks.filter(task =>
        task.id != id)
    );
  };

  // editing a task in our task list
  const editTask = (id: number, newText: string) => {
    setTasks(prevTasks => 
      prevTasks.map(task => 
        task.id === id ? {...task, text: newText}
        : task
      )
    )
  }

  // main layout for our React Native Task Manager
  return (
    <View style = {{ flex: 1, backgroundColor: '#e2e8f0' }}>

      <View style = {styles.headerWrapper}>
        <Header />
      </View>

      <View style = {styles.inputWrapper}>
        <TaskInput onAdd = {addTask}/>
      </View>

      <View style = {styles.listWrapper}>
        <TaskList 
          tasks = {tasks}
          onToggleComplete={toggleTaskComplete}
          onDelete={deleteTask}
          onEdit={editTask}
        />
      </View>

    </View>
  );
}

// Styling for components of Task Manager
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

  inputWrapper: {
    marginBottom: 10,
    paddingHorizontal: 16
  },

  listWrapper: {
    flex: 1,
    paddingHorizontal: 16
  },

  headerWrapper: {
    marginBottom: 10
  }
});

