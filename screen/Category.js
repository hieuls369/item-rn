import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export default function Category(props){

    const { navigation, route = {} } = props;
    const { title, image } = route.params;

    return(
        <View style={contextStyle.container}>
            <Text>{title}</Text>
            <Image source={image}/>
            <View style={contextStyle.optionDisplay}>
                <Text style={contextStyle.price}>Price</Text>
                <Text style={contextStyle.details}>Details</Text>
            </View>
        </View>
    )
}

const contextStyle = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    optionDisplay:{
        paddingTop: 16,
        flexDirection: 'row',
        alignItems: 'center'
    },
    price:{
        flex: 1
    },
    details:{
        padding: 5,
        backgroundColor: '#f00',
        color: '#FFF',
        borderRadius: 5,
    }
});