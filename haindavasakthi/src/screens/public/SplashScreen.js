import React from 'react'
import { View, Text, Image } from 'react-native'
import Logo from '../../assets/logo.png'
import styles from '../../theme/Styles'
import { COLORS } from '../../theme/Theme'

const SplashScreen = () => {
    return (
        <View style={[styles.flex1, styles.vhCenter, {backgroundColor: COLORS.white}]}>
            <Image source={Logo} />
        </View>
    )
}

export default SplashScreen
