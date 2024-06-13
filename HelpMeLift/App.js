import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Modal } from 'react-native';

export default function App() {

  const buttons = [
    'Deltoids', 'Biceps', 'Triceps', 'Chest', 'Abdominals', 'Trapezius', 
    'Latissimus Dorsi', 'Lower Back', 'Glutes', 'Quadriceps', 'Hamstrings', 'Calves', 'Forearms'
  ];


  function openModal(title){
    return(
      <Modal></Modal>
    );
  }


  return (
    <View style={{flex:1, backgroundColor:"#232023", padding:60}}> 
      <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>

        <StatusBar backgroundColor={"#333333"} barStyle={"dark-content"}/>

        <Text style={styles.heading}>HelpMeLift</Text>

        {buttons.map((title, index) => (
          <TouchableOpacity key={index} style={styles.button} onPress={() => openModal(title)}>
            <Text style={styles.buttonText}>{title}</Text>
          </TouchableOpacity>
        ))}

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  heading:{
    color: "crimson",
    fontSize: 24,
    marginBottom: 20,
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
    fontSize: 16,
  }

});
