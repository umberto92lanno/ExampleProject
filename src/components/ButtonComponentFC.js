import React from 'react';
import { View, Text, Button } from 'react-native';

export const ButtonComponentFC = React.memo(({ label, onPress }) => {
    return (
        <View style={{ alignItems: 'center' }}>
            <Text>{label}</Text>
            <Button title="PREMI" onPress={onPress} />
        </View>
    );
});