import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './Screens/Login'
import HomeScreen from './Screens/Home'
import DogemScreen from './Screens/Dogem'
const Stack = createNativeStackNavigator();

const MyStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{ title: 'Homepage' }}
                />
                <Stack.Screen name="Dogem" component={DogemScreen} options={{title:'DogemScreen'} }/>

                
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default MyStack;