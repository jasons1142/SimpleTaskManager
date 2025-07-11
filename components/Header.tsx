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
      flex: 1,
      backgroundColor: '#25292e',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: '#fff',
      fontSize: 25,
      fontWeight: 'bold'
    },
  });