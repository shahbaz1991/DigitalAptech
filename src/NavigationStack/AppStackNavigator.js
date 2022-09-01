//importing libraries and component 
import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import Home from '../containers/Home';
import Posts from '../containers/Home/Posts/Posts';
import Pictures from '../containers/Home/Pictures/Pictures';

//creating stack navigator
const Stack = createStackNavigator();

const AppStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Home'
                component={Home}
                options={{ title : 'DashBoard'}}
            />
            <Stack.Screen
                name="Posts"
                component={Posts}
            />
            <Stack.Screen
                name='Pictures'
                component={Pictures}
            />
        </Stack.Navigator>
    );
};

export default AppStackNavigator;