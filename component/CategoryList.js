import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'


export default function CategoryList(props) {

    const { category, onPress } = props;


    return (
        <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
            <View style={styles.container}>
                <Text style={styles.title}>{category.title}</Text>
                <Image style={styles.image} source={category.image} />
            </View>
        </TouchableOpacity>
    )

}



const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        borderRadius: 4,
        padding: 16,
        margin: 16,
        backgroundColor: '#FFF',
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