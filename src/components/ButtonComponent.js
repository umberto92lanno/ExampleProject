import React, { Component, PureComponent } from "react";
import { View, Text, Button } from 'react-native';

export class ButtonComponent extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        console.log('render ButtonComponent');
        const { label, onPress } = this.props;
        return (
            <View style={{ alignItems: 'center' }}>
                <Text>{label}</Text>
                <Button title="PREMI" onPress={onPress} />
            </View>
        );
    }
}