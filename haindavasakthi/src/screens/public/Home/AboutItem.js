import React from 'react'
import { View, TouchableOpacity, ImageBackground } from 'react-native'
import { BoldText, RegularText } from '../../../components/UIComponents/Text';
import styles from '../../../theme/Styles';
import { COLORS } from '../../../theme/Theme';

const AboutItem = ({ item }) => {
    return (
        <View style={[styles.aboutItemWrapper, styles.vhCenter]}>
            <RegularText style={[styles.bold, styles.itemHeader, {color: COLORS.black}]}>{item.title}</RegularText>
            <RegularText style={[styles.itemDesc, {color: COLORS.dark}]}>{item.desc}</RegularText>
        </View>
    )
}

export default AboutItem