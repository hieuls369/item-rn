import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import peru from '../assets/peru.png'

export default function CategoryList(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Flag</Text>
            <Image style={styles.image} source={peru} />
        </View>
    )

}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        borderRadius: 4,
        padding: 16,
        margin: 5,
        backgroundColor: '#FF0',
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 0}
    },
    title:{
        textTransform: 'uppercase',
        marginBottom: 8,
        fontWeight: '700'
    },
    image:{
        width: 64,
        height: 64
    }

});