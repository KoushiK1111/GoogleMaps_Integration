import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Map } from '../screens';

const {Navigator,Screen} = createStackNavigator()

const Navigation = () =>{
    return(
        <NavigationContainer>
            <Navigator>
                <Screen 
                    name="Map"
                    component={Map}
                />
            </Navigator>
        </NavigationContainer>
    );
};

export default Navigation;