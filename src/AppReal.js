import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { MainStack } from './config/navigation/stacks/main.stacks';
import { MainTabs } from './config/navigation/tabs/main.tabs';

const AppReal = () => {
    return (
        <NavigationContainer>
            <MainStack />
        </NavigationContainer>
    );
};

export default AppReal;