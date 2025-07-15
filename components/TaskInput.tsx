import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

// onAdd is a callback that receives text for a task and adds it to the task list
interface TaskInputProps {
    onAdd: (text: string) => void;
}

export default function TaskInput({onAdd}: TaskInputProps) {
    // hook for adding the text of a task to that task block
    const [text, setText] = useState('');

    // Adding a task to task list after trimming white space, if there is no text do nothing
    const handleAdd = () => {
        if (text.trim()) {
            onAdd(text.trim());
            setText('');
        }
    }

    return (
        <View style = {styles.container}>
            <TextInput 
                placeholder = "Enter a task..."
                placeholderTextColor={"#999"}
                value={text}
                onChangeText={setText}
            />
            <View style = {styles.addbutton}>
                <TouchableOpacity onPress = {handleAdd}>
                    <Text>Add Task</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#cbd5e1',
        height: 85,
        borderRadius: 10,
        paddingTop: 10,
        paddingLeft: 5,
        justifyContent: 'space-between'
    },
    addbutton: {
        alignItems: 'center',
        marginBottom: 5,
        paddingRight: 5,

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    }

})