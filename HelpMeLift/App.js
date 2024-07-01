import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Modal, useWindowDimensions, SafeAreaView, FlatList } from 'react-native';
import {buttons, exercises} from "./dataFiles/constants"

export default function App() {

  const windowHeight = useWindowDimensions().height
  const windowWidth = useWindowDimensions().width

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedExercises, setSelectedExercises] = useState([]);
  const [selectedTitle, setSelectedTitle] = useState('');

  const muscleExercises = (title) => {
    setSelectedTitle(title);
    setSelectedExercises(exercises[title]);
    setIsModalVisible(true);
  };

  return (
    <SafeAreaView style={{flex:1, backgroundColor:"#232023"}}>
      {/* <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}> */}
        <StatusBar backgroundColor={"#333333"} barStyle={"dark-content"}/>

        <Text style={styles.heading}>HelpMeLift</Text>

        <FlatList data = {buttons} ListHeaderComponent={<Text style={styles.heading}>HelpMeLift</Text>} 
          renderItem={({ item, index }) =>{
            return(
              <TouchableOpacity key={index} style={styles.button} onPress={() => muscleExercises(item.Muscle)}>
                <Text style={styles.buttonText}>{item.Muscle}</Text>
              </TouchableOpacity>
            );
        }}/>

        <Modal visible={isModalVisible} onRequestClose={() => setIsModalVisible(false)} animationType="slide">

          <View style={{flex: 1, backgroundColor: "#333333", padding: 60}}>
            <FlatList data={selectedExercises} ListHeaderComponent = {<Text style={styles.modalHeading}>{selectedTitle}</Text>} keyExtractor={(item, index) => index.toString()} 
              renderItem={({ item, index }) => {
                return(
                <TouchableOpacity key={index} style={styles.button} onPress={() => muscleExercises(item.Muscle)}>
                  <Text style={styles.buttonText}>{item}</Text>
                </TouchableOpacity>)}}/>
          </View>

        </Modal>

      {/* </ScrollView> */}
    </SafeAreaView>
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
      padding: 10.5,
      borderRadius: 5,
      marginVertical: 5,
      alignItems: 'center',
    },
    buttonText: {
      color: "#232023",
      fontSize: 16,
    },
    modalHeading: {
      color: "crimson",
      fontSize: 24,
      marginBottom: 20,
      textAlign: "center"
    },

    
});
