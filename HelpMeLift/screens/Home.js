import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Modal, useWindowDimensions, SafeAreaView, FlatList, VirtualizedList } from 'react-native';
import { buttons, exercises } from "../dataFiles/constants";

export default function Home() {

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
      <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
        <StatusBar backgroundColor={"#232023"} barStyle={"light-content"}/>

        <View>
          <Text style={styles.heading}>HelpMeLift</Text>
        </View>
        
        <View>
            <FlatList data = {buttons}
            renderItem={({ item, index }) =>{
                return(
                <TouchableOpacity key={index} style={styles.button} onPress={() => muscleExercises(item.Muscle)}>
                    <Text style={styles.buttonText}>{item.Muscle}</Text>
                </TouchableOpacity>
                
                );
            }}/>
        </View>

        <Modal visible={isModalVisible} onRequestClose={() => setIsModalVisible(false)} animationType="slide">

          <View style={{flex: 1, backgroundColor: "#333333"}}>
            <FlatList data={selectedExercises} ListHeaderComponent = {<Text style={styles.modalHeading}>{selectedTitle}</Text>} keyExtractor={(item, index) => index.toString()} 
              renderItem={({ item, index }) => {
                return(
                <TouchableOpacity key={index} style={styles.button} onPress={() => muscleExercises(item.Muscle)}>
                  <Text style={styles.buttonText}>{item}</Text>
                </TouchableOpacity>)}}/>
          </View>

        </Modal>

      </ScrollView>
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
      padding: 10,
      borderRadius: 5,
      marginVertical: 5,
      alignItems: 'center',
    },
    buttonText: {
      color: "#232023",
      fontSize: 12,
      fontWeight:"bold",
    },
    modalHeading: {
      color: "crimson",
      fontSize: 24,
      marginBottom: 20,
      textAlign: "center"
    },

});
