import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Result from "../screens/result";
import Quiz from "../screens/quiz";
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator options={{ headerShown: "false" }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Quiz" component={Quiz} />
      <Stack.Screen name="Result" component={Result} />
    </Stack.Navigator>
  );
}
export default MyStack;
