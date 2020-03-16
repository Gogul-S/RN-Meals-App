import React from 'react'
import { StyleSheet, TouchableOpacity, TouchableNativeFeedback,Platform, View, Text } from 'react-native'


const CategoryCard = (props) => {

    let TouchComponent = TouchableOpacity;
    if(Platform.OS === 'android' && Platform.Version > 21){
        TouchComponent = TouchableNativeFeedback
    }

    return (
        <View style={styles.gridItem}>
        <TouchComponent style = {styles.touch}  onPress={props.navigationHandler.bind(this, props.item)}>
            <View style={{ ...styles.container, ...{ backgroundColor: props.item.color } }}>
                <Text style={styles.title} numberOfLines={2}>
                    {props.item.name}
                </Text>
            </View>
        </TouchComponent>
        </View>
    )
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        height: 150,
        margin: 10,
        elevation: 4,
        borderRadius: 10,
        overflow: (Platform.OS === 'android' && Platform.Version > 21) ? 'hidden' : 'visible'
    },
    container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 10,
        padding: 15,
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },
    title: {
        fontFamily: 'open-sans',
        fontSize: 20,
        textAlign:'right'
    },
    touch: {
        flex: 1
    }
})


export default CategoryCard