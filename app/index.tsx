import { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "../components/Header";
import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";
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

  const toggleTaskComplete = (id: number) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id
        ? { ...task, completed: !task.completed}
        : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks(prevTasks =>
      prevTasks.filter(task =>
        task.id != id)
    );
  };

  const editTask = (id: number, newText: string) => {
    setTasks(prevTasks => 
      prevTasks.map(task => 
        task.id === id ? {...task, text: newText}
        : task
      )
    )
  }

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

