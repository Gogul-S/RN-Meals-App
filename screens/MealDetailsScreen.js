import React,{useEffect,useCallback} from 'react';
import { ScrollView, Image, View, Text, StyleSheet, Button } from 'react-native';

import { useSelector,useDispatch } from 'react-redux'

import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import ActionbarButton from '../components/ActionBarButton';
import { toggleFavorite } from '../store/actions/meals';

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
    const meals = useSelector( (state) => {
        return state.meal.meals
    } )
    const mealId = props.navigation.getParam('mealId');
    const meal = meals.find(meal => meal.id === mealId)
    const isFavoriteMeal = useSelector(state => state.meal.favoriteMeals.some( meal => meal.id === mealId ))
    const dispatch = useDispatch();

    const favoriteToggleHandler = useCallback( () => {
        dispatch(toggleFavorite(meal.id))
    },[meal.id,dispatch] )

    useEffect( () => {
        props.navigation.setParams({toggleFav: favoriteToggleHandler})
    }, [favoriteToggleHandler])

    useEffect( () => {
        props.navigation.setParams({isFav: isFavoriteMeal})
    },[isFavoriteMeal])

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

    // const selectedID = navigationData.navigation.getParam('mealId')
    // const meal = MEALS.find(meal => meal.id === selectedID)
    const mealTitle = navigationData.navigation.getParam('mealTitle');
    const toggleFavorite = navigationData.navigation.getParam('toggleFav');
    const isFav = navigationData.navigation.getParam('isFav');
    return (
        {
            headerTitle: mealTitle,
            headerRight: () => {
                return (
                    <HeaderButtons HeaderButtonComponent={ActionbarButton}>
                        <Item title='Fav' iconName={ isFav ? 'ios-star' : 'ios-star-outline'} onPress={toggleFavorite} />
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