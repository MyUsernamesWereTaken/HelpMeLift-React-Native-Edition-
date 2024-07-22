import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Screens/HomeStack/Home";
import Exercises from "./Screens/HomeStack/Exercises";

const Stack = createNativeStackNavigator();

export const InitialStack = () => {

    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="topStack" component={Home}/>
            <Stack.Screen name = "Exercises" component={Exercises}/>
        </Stack.Navigator>
    )
}