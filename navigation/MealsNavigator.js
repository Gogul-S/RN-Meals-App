import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import CategoriesScreen from '../screens/CategoriesScreen';
import MealsScreen from '../screens/MealsScreen';
import FavoritesScreen from '../screens/FavoritesScreen'
import MealDetailsScreen from '../screens/MealDetailsScreen';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import FilterScreen from '../screens/FiltersScreen'
import React from 'react';

import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createDrawerNavigator, toggleDrawer } from 'react-navigation-drawer';


const MealsNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen,
    },
    Meals: {
        screen: MealsScreen,
    },
    MealDetails: MealDetailsScreen
}, {
    mode: 'modal',
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.select({ android: 'green', ios: 'white' })
        },
        headerTitleStyle:{
            fontFamily: 'open-sans-bold'
        },
        headerBackTitleStyle:{
            fontFamily: 'open-sans'
        },
        headerTintColor: Platform.select({
            ios: 'green',
            android: 'white'
        })
    }
})

const FavoriteStack = createStackNavigator({
    Favorites: {
        screen: FavoritesScreen
    },
    MealDetails: {
        screen: MealDetailsScreen
    }
}, {
    mode: 'modal',
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.select({ android: 'green', ios: 'white' })
        },
        headerTintColor: Platform.select({
            ios: 'green',
            android: 'white'
        })
    }
})

const screenConfig = {
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />
            }
        }
    },
    Favorites: {
        screen: FavoriteStack,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />
            },
        }
    }
}

const BottomTabNavigator = Platform.select({
    ios: createBottomTabNavigator(screenConfig, {
        tabBarOptions: {
            labelStyle: {
                fontFamily: 'open-sans-bold',
                fontSize: 14,
            },
            activeTintColor: 'green'

        }
    }),
    android: createMaterialBottomTabNavigator(screenConfig, {
        activeColor: 'green',
        shifting: true,
        barStyle: {
            backgroundColor: 'white'
        },
        labelStyle:{
            fontFamily: 'open-sans-bold'
        }
    })
})

const FilterContainer = createStackNavigator({
    Filter: FilterScreen
}, {
    mode: 'modal',
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.select({ android: 'green', ios: 'white' })
        },
        headerTitleStyle:{
            fontFamily: 'open-sans-bold'
        },
        headerTintColor: Platform.select({
            ios: 'green',
            android: 'white'
        })
    },
    navigationOptions: {

    }
})

const RootNavigator = createDrawerNavigator({
    Home: {
        screen: BottomTabNavigator,
        navigationOptions: {
            drawerLabel: 'Meals'
        }
    },
    Filter: {
        screen: FilterContainer
    }
},{
    contentOptions:{
        activeTintColor: 'green',
        labelStyle: {
            fontFamily: 'open-sans-bold',
        }
    }
})

export default createAppContainer(RootNavigator);