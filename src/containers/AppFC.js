import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { View, Text, Button, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { ButtonComponentFC } from '../components/ButtonComponentFC';

const values = [1,2,3,4,5,6,8,9,10];

const App = () => {
    const [text, setText] = useState(1);
    const [count, setCount] = useState(1);
    const [isOddSelected, setIsOddSelected] = useState(false);
    const [textInputValue, setTextInputValue] = useState('');

    // useEffect(() => {
    //     setInterval(() => {
    //         setCount(count + 1);
    //       }, 1000);
    // }, []);

    // useEffect(() => {
    //     console.log(count);
    //     setText(count);
    // }, [count]);
    
    const changeTo = useCallback(() => {
        console.log(isOddSelected);
        setIsOddSelected(!isOddSelected);
    }, [isOddSelected]);

    const onPress = useCallback(() => {
        console.log(text);
        setText('ARRIVEDERCI');
    }, []);

    const oddNumber = useMemo(() => {
        if (isOddSelected) {
            return values.filter(value => value % 2 !== 0);
        }
        return values.filter(value => value % 2 === 0);
    }, [isOddSelected]);

    return (
        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>

            {/* <Text>Component text</Text>
            <Button title="button" onPress={() => {}} />
            <TextInput
                style={styles.textinput}
                value={textInputValue} 
                placeholder="PLACEHOLDER"
                onChangeText={setTextInputValue}
            />
            <TouchableOpacity onPress={() => {}} activeOpacity={0.9}>
                <View style={styles.buttonContainer}>
                    <Text>TITLE</Text>
                </View>
            </TouchableOpacity> */}
            
            {/* <ButtonComponentFC label={text} onPress={onPress} />
            <ButtonComponentFC label={oddNumber.toString()} onPress={changeTo} /> */}
        </View>
    );
};

const styles = StyleSheet.create({
    textinput: {
        borderWidth: 1,
        width: '100%',
    },
    buttonContainer: {
        width: 100,
        height: 40,
        backgroundColor: 'grey',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default App;