import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/HomeStack/Home";
import Exercises from "./screens/HomeStack/Exercises";
import Exercise from "./screens/HomeStack/Exercise";

const Stack = createNativeStackNavigator();

export const InitialStack = () => {

    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
            contentStyle:{
                backgroundColor:"#333333",
              },
        }}>
            <Stack.Screen name="topStack" component={Home}/>
            <Stack.Screen name = "Exercises" component={Exercises}/>
            <Stack.Screen name = "SpecificExercise" component={Exercise}/>
        </Stack.Navigator>
    )
}
