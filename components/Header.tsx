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
      backgroundColor: '#64748b',
      alignItems: 'center',
      justifyContent: 'center',
      height: 85,
    },
    text: {
      color: 'fff',
      fontSize: 40,
      fontWeight: 'bold'
    },
  });