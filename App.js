import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screens/LoginScreen";
import { StyleSheet } from "react-native";

const Stack = createStackNavigator();

const App = () => {
  return(
    <NavigationContainer style={styless.text}>
      <Stack.Navigator >
        <Stack.Screen style name="FACEBOOK" component={LoginScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;

const styless = StyleSheet.create({
  text:{
      textAlign:'center',
      color: '#1877f2'
  },
});
