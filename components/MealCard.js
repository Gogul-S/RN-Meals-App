import React from 'react'
import { StyleSheet, View, ImageBackground, TouchableOpacity, Text } from 'react-native';
import MealText from '../components/MealText';

const MealCard = (props) => {

    return (
        <View style={styles.card}>
            <TouchableOpacity onPress={props.onSelectMeal}>
                <View style={styles.mealHeader}>
                    <ImageBackground style={styles.bgImage} source={{ uri: props.meal.imageUrl }} >
                        <MealText style={styles.title} numberOfLines={1}>
                            {props.meal.name}
                        </MealText>
                    </ImageBackground>
                </View>
                <View style={styles.mealDetail}>
                    <Text>
                        {props.meal.duration}m
                        </Text>
                    <Text>
                        {props.meal.complexity.toUpperCase()}
                    </Text>
                    <Text>
                        {props.meal.affordablity.toUpperCase()}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )

}

const styles = StyleSheet.create({
    card: {
        height: 200,
        margin: 14,
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: '#d4d4d4'

    },
    mealHeader: {
        flexDirection: 'row',
        height: '85%',
    },
    mealDetail: {
        flexDirection: 'row',
        height: '15%',
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },
    title: {
        fontFamily: 'open-sans-bold',
        color: 'white',
        fontSize: 16,
        backgroundColor: 'rgba(0,0,0,0.7)',
        paddingVertical: 5,
        paddingHorizontal: 10,
        textAlign: 'center'
    }
})

export default MealCard