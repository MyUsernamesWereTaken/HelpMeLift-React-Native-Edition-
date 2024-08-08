import { Text, Image, SafeAreaView, StyleSheet, ScrollView, View, } from "react-native";


export default function Journal(){

    return(
        <SafeAreaView>
            <StatusBar backgroundColor={"#232023"} barStyle={"light-content"} />

            <View style = {{flex: 0.2, alignItems:"centre", marginBottom: 10}}>
                {/* Get date and place it here */}
                {/* <View>
                    Circular style loading bar which has macros
                    <View>Remaining Calories: {}</View>
                </View> */}
            </View>

            <View style = {{flexDirection:"column", flex: 0.8}}>
                <ScrollView style = {{flexDirection:"row", flex:0.7}}>

                    <View>Breakfast</View>
                    {/* <View> Database of Entered Breakfast</View> */}

                    <View>Lunch</View>
                    {/* <View> Database of Entered Lunch</View> */}

                    <View>Dinner</View>
                    {/* <View>Database of Entered Dinner</View> */}

                    <View>Snacks</View>
                    {/* <View>Database of Entered Snacks</View> */}
                </ScrollView>

                <View style={{flexDirection:"row", flex: 0.3}}>
                    {/* Interactive Image of Water which gets filled as user adds more water */}

                    {/* <Text>Water Intake: {}</Text> */}
                </View>                

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