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
    <View style={styles.container}>
        <View style={styles.textBlock}>
                {isEditing ? (
                    <>
                        <TextInput
                            style={styles.textInput}
                            value={editedText}
                            onChangeText={setEditedText}
                            placeholder="Edit your text"
                        />
                        <Button
                            title="Save"
                            onPress={() => {
                                onEdit(task.id, editedText);
                                setIsEditing(false);
                            }}
                        />
                    </>
            ) : (
                <Text style={styles.taskText}>{task.text}</Text>
            )}
        </View>

        <View style={styles.buttonBlock}>
            {!isEditing && (
                <Button title="Edit" onPress={() => setIsEditing(true)} />
            )}
            <Button title="Complete" onPress={() => onToggleComplete(task.id)} />
            <Button title="Delete" onPress={() => onDelete(task.id)} />
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#cbd5e1',
        marginBottom: 10,
        borderRadius: 10
    },

    textBlock: {
        flex: 1,
        marginRight: 10,
    },

    taskText: {
        flexShrink: 1,
        fontSize: 16,
        marginLeft: 10
    },

    buttonBlock: {
        flexDirection: 'column',
        gap: 4,
        justifyContent: 'flex-start'
    },

    textInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 6,
        padding: 6,
        fontSize: 16,
    },
})