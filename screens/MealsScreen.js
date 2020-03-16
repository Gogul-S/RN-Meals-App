import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { MEALCATEGORIES, MEALS } from '../data/test-data1';
import meal from '../model/meal';
import MealCard from '../components/MealCard';

const MealsScreen = (props) => {

    const categoryId = props.navigation.getParam('categoryId');
    const selectedCategory = MEALCATEGORIES.find((category) => {

        return category.id === categoryId;
    })

    const mealClickHandler = (item) => {
        props.navigation.navigate({
            routeName: 'MealDetails',
            params: {
                mealId: item.id
            }
        })
    }

    const renderMeal = (itemData) => {

        return (
            <MealCard meal={itemData.item} onSelectMeal={mealClickHandler.bind(this, itemData.item)} />
        )
    }

    const meals = MEALS.filter(meal => meal.categoryIds.indexOf(categoryId) >= 0)

    return (
        <View style={styles.screen}>
            <FlatList data={meals}
                style={{ width: '100%' }}
                renderItem={renderMeal} />
        </View>
    )
};

MealsScreen.navigationOptions = (navigationData) => {
    const categoryId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = MEALCATEGORIES.find((category) => {

        return category.id === categoryId;
    })

    return {
        headerTitle: selectedCategory.name
    }
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default MealsScreen;