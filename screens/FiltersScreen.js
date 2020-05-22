import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, Switch, Platform } from 'react-native';
import ActionBarButton from '../components/ActionBarButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useDispatch } from 'react-redux';
import { setFilters } from '../store/actions/meals';

const FilterSwitch = (props) => {
    return (
        <View style={styles.filterContainer}>
            <Text> {props.label} </Text>
            <Switch
                trackColor={{
                    true: 'green'
                }}
                thumbColor={
                    Platform.select({
                        ios: 'white',
                        android: 'green'
                    })
                }
                value={props.value}
                onValueChange={props.onValueChange} />
        </View>
    )
}


const FilterScreen = (props) => {

    const { navigation } = props;
    const [vegan, setVegan] = useState(false);
    const [sugarFree, setSugarFree] = useState(false);
    const [lactoseFree, setLactoseFree] = useState(false);
    const [vegetarian, setVegetarian] = useState(false);

    const dispatch = useDispatch();

    const saveFilter = useCallback(() => {
        const saveFilter = {
            vegan: vegan,
            sugarFree: sugarFree,
            lactoseFree: lactoseFree,
            vegetarian: vegetarian
        }
        
        dispatch(setFilters(saveFilter));
        
    }, [vegetarian, vegan, lactoseFree, sugarFree,])

    useEffect(() => {
        navigation.setParams({ save: saveFilter })
    }, [saveFilter])

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>
                Available Filters
            </Text>
            <FilterSwitch label='Sugar-free' value={sugarFree} onValueChange={(newValue) => { setSugarFree(newValue) }} />
            <FilterSwitch label='Vegan' value={vegan} onValueChange={(newValue) => { setVegan(newValue) }} />
            <FilterSwitch label='Lacotose-free' value={lactoseFree} onValueChange={(newValue) => { setLactoseFree(newValue) }} />
            <FilterSwitch label='Vegetarian' value={vegetarian} onValueChange={(newValue) => { setVegetarian(newValue) }} />
        </View>
    )
}

FilterScreen.navigationOptions = (navigationData) => {
    return {
        headerLeft: () => {
            return (
                <HeaderButtons HeaderButtonComponent={ActionBarButton}>
                    <Item title="Menu" iconName='ios-menu' onPress={() => {
                        navigationData.navigation.toggleDrawer()
                    }} />
                </HeaderButtons>
            )
        },
        headerRight: () => {
            return (
                <HeaderButtons HeaderButtonComponent={ActionBarButton}>
                    <Item title="Save" iconName='ios-save' onPress={
                        navigationData.navigation.getParam('save')
                    } />
                </HeaderButtons>
            )
        }
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        margin: 20,
        textAlign: 'center'
    },
    filterContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '80%',
        margin: 10
    }
})

export default FilterScreen;