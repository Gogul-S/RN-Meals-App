import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ActionBarButton from '../components/ActionBarButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';


const FilterScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text>
                FilterScreen
            </Text>
        </View>
    )
}

FilterScreen.navigationOptions = (navigationData) => {
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

export default FilterScreen;