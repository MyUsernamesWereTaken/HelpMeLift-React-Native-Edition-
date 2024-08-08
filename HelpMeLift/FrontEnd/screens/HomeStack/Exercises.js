import { StyleSheet, SafeAreaView, FlatList, View, TouchableOpacity, Text } from "react-native";
import { exercises } from "../../dataFiles/constants";

export default function Exercises({ route, navigation}) {
  const { muscle } = route.params;
  const selectedMuscle = exercises[muscle] || [];

  return (
    <SafeAreaView style={{ flex: 1 }}>

      <View style={{ flex: 1 }}>
        
        <FlatList
          data={selectedMuscle}
          ListHeaderComponent={<Text style={styles.modalHeading}>{muscle}</Text>}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <TouchableOpacity key={index} style={styles.button} onPress={() => navigation.navigate("SpecificExercise", { index: index, muscle: muscle})}>
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
    fontWeight:"bold",
    marginBottom: 20,
    textAlign: "center",
  },
});