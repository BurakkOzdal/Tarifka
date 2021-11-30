import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import {  StatusBar } from "react-native";

import Categories from "./pages/Categories";
import CategoryDetail from "./pages/CategoryDetail";
import MealDetail from "./pages/MealDetail";

const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="default" hidden={false} backgroundColor="#b0bec5" translucent={true} />
      
      <Stack.Navigator>
        <Stack.Screen name="Categories" component={Categories} options={{
          title: "Kategoriler",
          headerStyle: { backgroundColor: "#b0bec5" },
          headerTitleStyle: { color: "white" },
          headerTintColor: "white",
          headerTitleAlign: "center"
        }} />

        <Stack.Screen name="CategoryDetail" component={CategoryDetail} options={{
          title: "Kategori Detay",
          headerStyle: { backgroundColor: "#b0bec5" },
          headerTitleStyle: { color: "white" },
          headerTintColor: "white",
          headerTitleAlign: "center"
        }}/>
         <Stack.Screen name="MealDetail" component={MealDetail} options={{
          title: "Yemek Tarifi",
          headerStyle: { backgroundColor: "#b0bec5" },
          headerTitleStyle: { color: "white" },
          headerTintColor: "white",
          headerTitleAlign: "center"
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;