import { Task } from "@/types/Task";
import { FlatList, StyleSheet } from "react-native";
import TaskItem from "./TaskItem";

export interface TaskListProps {
    tasks: Task[];
    onToggleComplete: (id: number) => void;
    onDelete: (id: number) => void;
    onEdit: (id: number, newText: string) => void;
}

export default function TaskList({tasks, onToggleComplete, onDelete, onEdit} : TaskListProps) {
    return (
            <FlatList style = {{flex:1}}
                contentContainerStyle = {styles.container}
                data = {tasks}
                renderItem = {({ item }) => (
                    <TaskItem 
                        task = {item}
                        onToggleComplete={onToggleComplete}
                        onDelete={onDelete}
                        onEdit={onEdit}
                        />
                )}
                keyExtractor={(item) => item.id.toString()}
            />
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingTop: 10,
        paddingBottom: 10
    }
})