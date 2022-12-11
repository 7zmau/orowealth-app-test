import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Home from "./screens/Home";
import Deal from "./screens/Deals";
import DealPage from "./screens/DealPage";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Products" }}
        />
        <Stack.Screen name="Deals" component={Deal} />
        <Stack.Screen name="DealPage" component={DealPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
