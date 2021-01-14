import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Settings = ({ navigation }) => {
    return (
        <View style={{ paddingTop: 20 }}>
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                <Text>Open Drawer</Text>
            </TouchableOpacity>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Settings</Text>
            </View>
        </View>
    )
}

export default Settings;
