import React from 'react'
import { View, TouchableOpacity, ImageBackground } from 'react-native'
import { BoldText, RegularText } from '../../../components/UIComponents/Text';
import styles from '../../../theme/Styles';

const CarouselItem = ({ item }) => {
    return (
        <ImageBackground source={item.image} style={[styles.itemWrapper, styles.vhCenter]}>
            <View style={styles.overlay} />
            <RegularText style={[styles.bold, styles.itemHeader]}>{item.title}</RegularText>
            <RegularText style={styles.itemDesc}>{item.desc}</RegularText>
            <TouchableOpacity style={[styles.btn, styles.itemBtn]}>
                <BoldText style={[styles.itemBtnText]}>CONNECT WITH US</BoldText>
            </TouchableOpacity>
        </ImageBackground>
    )
}

export default CarouselItem