import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons'
import { Ionicons } from '@expo/vector-icons'
import { Platform } from 'react-native'

const ActionbarButton = (props) => {
    return (
        <HeaderButton {...props}
            IconComponent={Ionicons}
            iconSize={23}
            color={Platform.select({ ios: 'green', android: 'white' })} />
    )
}

export default ActionbarButton;