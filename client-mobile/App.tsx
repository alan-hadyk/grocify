import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

const App: React.FC = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Grocify</Text>
    <StatusBar style="auto" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 48,
  },
  title: {
    fontSize: 48,
  },
});

export default App;
