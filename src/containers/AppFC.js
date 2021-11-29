import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { ButtonComponentFC } from '../ButtonComponentFC';
const App = () => {
    const [text, setText] = useState(1);
    const [count, setCount] = useState(1);

    useEffect(() => {
        setInterval(() => {
            setCount(count + 1);
          }, 1000);
    }, []);

    useEffect(() => {
        console.log(count);
        setText(count);
    }, [count]);

    const onPress = () => {
        setText('ARRIVEDERCI');
    }
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
            <ButtonComponentFC label={text} onPress={onPress} />
        </View>
    );
};

export default App;