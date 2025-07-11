import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

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
        <View>
            <TextInput 
                placeholder = "Enter a task..."
                placeholderTextColor={"#999"}
                value={text}
                onChangeText={setText}
            />
            <TouchableOpacity onPress = {handleAdd}>
                <Text>Add</Text>
            </TouchableOpacity>
            
        </View>
    )
}