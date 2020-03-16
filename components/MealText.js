import React from 'react';
import { StyleSheet,Text } from 'react-native'

const MealText = (props) => {
    return (
        <Text style = {{...props.style,...styles.text}}>
            {props.children}
        </Text>
    )
}

const styles =  StyleSheet.create({
    text:{
        fontFamily: 'open-sans-bold'
    }
})

export default MealText;