import React from 'react';
import { ScrollView, Image, View, Text, StyleSheet, Button } from 'react-native';

import { MEALS } from '../data/test-data1'

import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import ActionbarButton from '../components/ActionBarButton';

const ListItem = (props) => {
    return (
        <View style = {styles.listItem}>
            <Text>
                {props.children}
            </Text>
        </View>
    )
}

const MealDetailScreen = (props) => {

    const meal = MEALS.find(meal => meal.id === props.navigation.getParam('mealId'))


    return (
        <ScrollView >
            <Image style = {styles.image} source = {{uri: meal.imageUrl}} />
            <View style={styles.mealDetail}>
                    <Text>
                        {meal.duration}m
                        </Text>
                    <Text>
                        {meal.complexity.toUpperCase()}
                    </Text>
                    <Text>
                        {meal.affordablity.toUpperCase()}
                    </Text>
                </View>
            <Text style = {styles.title}>
                Ingredients
            </Text>
            {meal.ingredients.map((ingredient) => {
                return (
                    <ListItem key={ingredient}>
                        {ingredient}
                    </ListItem>
                )
            })}
            <Text style = {styles.title}>
                Steps
            </Text>
            {meal.instructions.map((instruction) => {
                return (
                    <ListItem key={instruction}>
                        {instruction}
                    </ListItem>
                )
            })}
        </ScrollView>
    )
}

MealDetailScreen.navigationOptions = (navigationData) => {

    const selectedID = navigationData.navigation.getParam('mealId')
    const meal = MEALS.find(meal => meal.id === selectedID)

    return (
        {
            headerTitle: meal.name,
            headerRight: () => {
                return (
                    <HeaderButtons HeaderButtonComponent={ActionbarButton}>
                        <Item title='Fav' iconName='ios-star' onPress={() => { console.log("fav") }} />
                    </HeaderButtons>
                )
            }
        }
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },
    mealDetail: {
        flexDirection: 'row',
        margin: 10,
        paddingHorizontal: 20,
        justifyContent: 'space-between',
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
      fontFamily: 'open-sans-bold',
      fontSize: 22,
      textAlign: 'center'  
    },
    listItem: {
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10
    }
})

export default MealDetailScreen;