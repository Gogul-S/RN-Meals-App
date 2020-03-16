import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { MEALS } from '../data/test-data1';
import MealCard from '../components/MealCard';
import FilterScreen from './FiltersScreen';
import ActionBarButton from '../components/ActionBarButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';


const FavoriteScreen = (props) => {

    const mealClickHandler = (item) => {
        props.navigation.navigate({
            routeName: 'MealDetails',
            params: {
                mealId: item.id
            }
        })
    }

    const meals = MEALS.filter(
        (meal) => {
            return (meal.id === 'm1' || meal.id === 'm2')
        }
    )

    const renderMeal = (itemData) => {

        return (
            <MealCard meal={itemData.item} onSelectMeal={mealClickHandler.bind(this, itemData.item)} />
        )
    }


    return (
        <View style={styles.screen}>
            <FlatList data={meals}
                style={{ width: '100%' }}
                renderItem={renderMeal} />
        </View>
    )
}

FavoriteScreen.navigationOptions = (navigationData) => {
    return {
        headerLeft: () => {
            return (
                <HeaderButtons HeaderButtonComponent={ActionBarButton}>
                    <Item title="Menu" iconName='ios-menu' onPress = { () => {
                        navigationData.navigation.toggleDrawer()
                    }}/>
                </HeaderButtons>
            )
        }
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default FavoriteScreen;