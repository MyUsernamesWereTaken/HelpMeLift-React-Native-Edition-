import { StyleSheet, SafeAreaView, FlatList, View, TouchableOpacity, Text, ScrollView  } from "react-native";
import { exercises } from "../../dataFiles/constants";

export default function Exercise({route}){

    const {index, muscle} = route.params;
    const selectedExercise = exercises[muscle][index] || [];

    return(
        <SafeAreaView>
            <ScrollView>

                {/* {if(connectedToWifi){
                    VideoOfExercise
                }else{
                    AnimationOfVideo
                }} */}

                <Text style = {styles.heading}>{selectedExercise}</Text>


            </ScrollView>
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