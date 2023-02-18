import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../styles';

const HomeScreen = () => {
    return (
        <>
        <View style={[styles.flexCenter,styles.m2]}>
            <Text style={[styles.textBold,styles.textBlack,styles.fs3]}>Home Screen <Icon name="home" size={30} color="black" /></Text>
            
        </View>
        </>
    )
}

export default HomeScreen
