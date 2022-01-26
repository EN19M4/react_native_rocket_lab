import React from "react";
import Main from "./components/Main";
import Page from "./components/Page";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function Navigate() {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen 
            name="Main"
            component={Main}
            options={{tittle: 'Главная'}}/>
            <Stack.Screen 
            name="ToDo"
            component={Page}
            options={{tittle: 'Todo'}}/>
        </Stack.Navigator>
    </NavigationContainer>
}

