import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

interface TaskInputProps {
    onAdd: (text: string) => void;
}

export default function TaskInput({onAdd}: TaskInputProps) {
    const [text, setText] = useState('');

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
        backgroundColor: '#d1d5db',
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