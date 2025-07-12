import { Task } from "@/types/Task";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export interface TaskItemProps {
    task: Task;
    onToggleComplete: (id: number) => void;
    onDelete: (id: number) => void;
    onEdit: (id: number, newText: string) => void;
}

export default function TaskItem({task, onToggleComplete, onDelete, onEdit}: TaskItemProps) {

    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(task.text);
 
    return (
        <View>
            <Button title = "Complete" onPress={() => onToggleComplete(task.id)} />

            {isEditing ? (
                <>
                    <TextInput 
                        value = {editedText} 
                        onChangeText={setEditedText}
                        placeholder="Edit your text"
                    />
                    <Button 
                        title = "Save"
                        onPress = {() => {
                            onEdit(task.id, editedText);
                            setIsEditing(false);
                        }}
                    />
                </>
            ) : (
                <>
                    <Text>{task.text}</Text>
                    <Button title = "Edit" onPress={() => setIsEditing(true)} />
                </> 
            )}

            <Button title = "Delete" onPress={() => onDelete(task.id)} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})