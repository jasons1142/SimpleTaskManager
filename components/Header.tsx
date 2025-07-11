import { StyleSheet, Text, View } from "react-native";
export default function Header() {
    return (
        <View style = {styles.container}>
            <Text style = {styles.text}>Task Manager</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#2c3e50',
      alignItems: 'center',
      justifyContent: 'center',
      height: 85,
    },
    text: {
      color: '#d1d5db',
      fontSize: 40,
      fontWeight: 'bold'
    },
  });