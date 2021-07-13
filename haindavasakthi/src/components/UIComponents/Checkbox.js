import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import Ionicon from 'react-native-vector-icons/Ionicons'
import styles from '../../theme/Styles'
import { COLORS } from '../../theme/Theme'
import { RegularText } from './Text'

const Checkbox = props => {
    const { checkbox, setCheckbox, text } = props
    const checkboxHandler = () => {
        setCheckbox(!checkbox)
    }

    return (
        <TouchableOpacity
            onPress={() => checkboxHandler()}
            style={[styles.row, styles.mbMd, { alignSelf: 'flex-start' }]}
            activeOpacity={0.7}
        >
            <View
                style={[styles.checkbox, styles.vhCenter, {
                    backgroundColor: checkbox ? COLORS.primary : COLORS.white,
                    borderColor: checkbox ? COLORS.primary : COLORS.light
                }]}
            >
                {checkbox && <Ionicon name='md-checkmark' size={15} color={checkbox ? COLORS.white : COLORS.black} />}
            </View>
            <RegularText>{text}</RegularText>
        </TouchableOpacity>
    )
}

export default Checkbox
