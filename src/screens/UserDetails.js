import { useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import {View, Image, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const UserDetails = ({ route, navigation }) => {
    const { image, gender } = route.params;
    const onPressBack = () => {
        navigation.goBack();
    }
    return (
        <View style={{ paddingTop: 20 }}>
            <TouchableOpacity onPress={onPressBack}>
                <Text>Back</Text>
            </TouchableOpacity>
            <Image source={{ uri: image }} style={{ paddingBottom: 20, height: 200 }} />
            <Text>{gender}</Text>
        </View>
    );
};

export default UserDetails;