import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Modal, Button } from 'react-native';

export default function App() {

  const buttons = [
    'Deltoids', 'Biceps', 'Triceps', 'Chest', 'Abdominals', 'Trapezius', 
    'Latissimus Dorsi', 'Lower Back', 'Glutes', 'Quadriceps', 'Hamstrings', 'Calves', 'Forearms'];

    const exercises = {
      Deltoids: ["Overhead Press", "Dumbbell Shoulder Press", "Lateral Raise", "Bent Over Rear Delt Flys"],
      Biceps: ["Dumbbell Bicep Curl", "Barbell Bicep Curl", "Incline Bicep Curl", "Waiter Curls"],
      Triceps: ["Tricep Dips", "Tricep Pushdown", "Overhead Tricep Extension", "Skull Crushers"],
      Chest: ["Bench Press", "Chest Fly", "Push Ups", "Incline Bench Press"],
      Abdominals: ["Crunches", "Leg Raises", "Plank", "Russian Twists"],
      Trapezius: ["Shrugs", "Upright Rows", "Face Pulls", "Dumbbell Shrugs"],
      "Latissimus Dorsi": ["Pull Ups", "Lat Pulldown", "Bent Over Rows", "Single Arm Rows"],
      "Lower Back": ["Deadlifts", "Back Extensions", "Good Mornings", "Supermans"],
      Glutes: ["Squats", "Hip Thrusts", "Glute Bridge", "Lunges"],
      Quadriceps: ["Leg Press", "Leg Extensions", "Squats", "Lunges"],
      Hamstrings: ["Romanian Deadlifts", "Leg Curls", "Good Mornings", "Glute Ham Raise"],
      Calves: ["Calf Raises", "Seated Calf Raises", "Calf Press", "Donkey Calf Raises"],
      Forearms: ["Wrist Curls", "Reverse Wrist Curls", "Farmer's Walk", "Reverse Curls"]
    };
  
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedExercises, setSelectedExercises] = useState([]);
    const [selectedTitle, setSelectedTitle] = useState('');
  
    const muscleExercises = (title) => {
      setSelectedTitle(title);
      setSelectedExercises(exercises[title]);
      setIsModalVisible(true);
    };
  
    return (
      <View style={{flex:1, backgroundColor:"#232023", padding:60}}>

        <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>

          <StatusBar backgroundColor={"#333333"} barStyle={"dark-content"}/>
          <Text style={styles.heading}>HelpMeLift</Text>

          {buttons.map((title, index) => (
            <TouchableOpacity key={index} style={styles.button} onPress={() => muscleExercises(title)}>
              <Text style={styles.buttonText}>{title}</Text>
            </TouchableOpacity>
          ))}
  
          <Modal visible={isModalVisible} onRequestClose={() => setIsModalVisible(false)} animationType="slide">

            <View style={{flex: 1, backgroundColor: "#333333", padding: 60}}>
              <Text style={styles.modalHeading}>{selectedTitle}</Text>
              {selectedExercises.map((exercise, index) => (
                <TouchableOpacity key={index} style={styles.button} onPress={() => null}>
                  <Text style={styles.buttonText}>{exercise}</Text>
                </TouchableOpacity>
              ))}
            </View>

          </Modal>

        </ScrollView>

      </View>
    );
  }
  
  const styles = StyleSheet.create({
    heading:{
      color: "crimson",
      fontSize: 24,
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
      fontSize: 16,
    },
    modalHeading: {
      color: "white",
      fontSize: 24,
      marginBottom: 20,
      textAlign: "center"
    },

    modalText: {
      color: "white",
      fontSize: 18,
      marginBottom: 10,
  }
});
