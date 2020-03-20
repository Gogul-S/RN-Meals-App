import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import MealCard from '../components/MealCard';
import ActionBarButton from '../components/ActionBarButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux'


const FavoriteScreen = (props) => {

    const mealClickHandler = (item) => {
        props.navigation.navigate({
            routeName: 'MealDetails',
            params: {
                mealId: item.id,
                mealTitle: item.iconName
            }
        })
    }

    const favoriteMeals = useSelector( (state) => {
        return state.meal.favoriteMeals
    } )


    const renderMeal = (itemData) => {

        return (
            <MealCard meal={itemData.item} onSelectMeal={mealClickHandler.bind(this, itemData.item)} />
        )
    }


    return (
        <View style={styles.screen}>
            <FlatList data={favoriteMeals}
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