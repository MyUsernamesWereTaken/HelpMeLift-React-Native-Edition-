import { SafeAreaView, FlatList, TouchableOpacity, Text, StyleSheet, StatusBar, View } from 'react-native';
import { buttons } from "../../dataFiles/constants";

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor={"#232023"} barStyle={"light-content"} />
      
      <View>
        <Text style={styles.heading}>HelpMeLift</Text>
      </View>

      <View>
        <FlatList
          data={buttons}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              key={index}
              style={styles.button}
              onPress={() => navigation.navigate("Exercises", { muscle: item.Muscle })}
            >
              <Text style={styles.buttonText}>{item.Muscle}</Text>
            </TouchableOpacity>
          )}
        />
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  heading: {
    color: "crimson",
    fontSize: 24,
    fontWeight:"bold",
    marginBottom: 20,
    textAlign: "center",
  },
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
});