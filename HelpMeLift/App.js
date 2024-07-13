import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screens/Home";
import Journal from "./screens/Journal"
import Plan from "./screens/Plan"
import Profile from "./screens/Profile";
import Ionicons from "@expo/vector-icons/Ionicons"



const Tab = createBottomTabNavigator();

export default function App(){

  return(

    <NavigationContainer>

      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: { backgroundColor: "#000000"},
          tabBarInactiveTintColor: "red",
          tabBarActiveTintColor: "#51A9C3",
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused ? "barbell" : "barbell-outline";
            } else if (route.name === "Journal") {
              iconName = focused ? "book" : "book-outline";
            } else if (route.name === "My Plan") {
              iconName = focused ? "calendar" : "calendar-outline";
            } else if (route.name === "Profile") {
              iconName = focused ? "person" : "person-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}>

        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Journal" component={Journal}/>
        <Tab.Screen name="My Plan" component={Plan}/>
        <Tab.Screen name="Profile" component={Profile}/>

      </Tab.Navigator>

    </NavigationContainer>

  );
}