import React from 'react';
import { View, StyleSheet, TouchableOpacity, Button, FlatList } from 'react-native';
import CategoryCard from '../components/CategoryCard';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { MEALCATEGORIES, MEALS } from '../data/test-data1';
import ActionBarButton from '../components/ActionBarButton';

const CategoriesScreen = (props) => {

    const navigateToMealsList = (item) => {
        props.navigation.navigate({
            routeName: 'Meals',
            params: {
                categoryId: item.id
            }
        })
    }

    const renderGridItem = (itemData) => {
        return (
            <CategoryCard item={itemData.item} navigationHandler={navigateToMealsList} />
        )
    }

    return (

        <FlatList
            data={MEALCATEGORIES}
            renderItem={renderGridItem}
            numColumns={2} />

    )
}

CategoriesScreen.navigationOptions = (navigationData) => {
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

export default CategoriesScreen;