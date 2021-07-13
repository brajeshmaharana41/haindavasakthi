import React from 'react'
import { View, TouchableOpacity, Image } from 'react-native'
import Ionicon from 'react-native-vector-icons/Ionicons'
import styles from '../../theme/Styles'
import { COLORS } from '../../theme/Theme'

const Header = props => {
    const { navigation } = props

    return (
        <View style={styles.headerWrapper}>
            <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.mlMd}>
                <Ionicon name="menu" size={25} color={COLORS.white} />
            </TouchableOpacity>
            <Image source={require('../../assets/logo.png')} resizeMode='contain' style={{height: 50}} />
        </View>
    )
}

export default Header
