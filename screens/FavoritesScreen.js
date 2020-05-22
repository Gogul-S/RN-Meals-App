import React from 'react';
import { View,Text, FlatList, StyleSheet } from 'react-native';
import MealCard from '../components/MealCard';
import ActionBarButton from '../components/ActionBarButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux'


const FavoriteScreen = (props) => {
    const favoriteMeals = useSelector(state => state.meal.favoriteMeals)
    const mealClickHandler = (item) => {
        const isFav = favoriteMeals.some( meal => meal.id === item.id );
        props.navigation.navigate({
            routeName: 'MealDetails',
            params: {
                mealId: item.id,
                mealTitle: item.name,
                isFav: isFav
            }
        })
    }
    const renderMeal = (itemData) => {

        return (
            <MealCard meal={itemData.item} onSelectMeal={mealClickHandler.bind(this, itemData.item)} />
        )
    }

    if(!favoriteMeals || favoriteMeals.length === 0){
        return (
            <View style = {styles.screen}>
                <Text style = {styles.textTitle}>{'No Favorites !\nTry adding some !'}</Text>
            </View>
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
    },
    textTitle: {
        fontSize: 22,
        color: 'black',
        textAlign: 'center',
        letterSpacing: 2
    }
})

export default FavoriteScreen;