import { StyleSheet, SafeAreaView, FlatList, View, TouchableOpacity, Text } from "react-native";
import { exercises } from "../../dataFiles/constants";

export default function Exercises({ route }) {
  const { muscle } = route.params;
  const selectedExercises = exercises[muscle] || [];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#333333" }}>

      <View style={{ flex: 1 }}>
        
        <FlatList
          data={selectedExercises}
          ListHeaderComponent={<Text style={styles.modalHeading}>{muscle}</Text>}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <TouchableOpacity key={index} style={styles.button}>
              <Text style={styles.buttonText}>{item}</Text>
            </TouchableOpacity>
          )}
        />

      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "crimson",
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: "#232023",
    fontSize: 12,
    fontWeight: "bold",
  },
  modalHeading: {
    color: "crimson",
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
  },
});