import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screens/Home";




const Tab = createBottomTabNavigator();

export default function App(){

  return(

    <NavigationContainer>

      <Tab.Navigator>

        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Journal" component={Journal}/>
        <Tab.Screen name="My Plan" component={Plan}/>
        <Tab.Screen name="Profile" component={Profile}/>

      </Tab.Navigator>

    </NavigationContainer>

  );

}