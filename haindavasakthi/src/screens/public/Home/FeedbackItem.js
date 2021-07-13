import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import MdIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { BoldText, RegularText } from '../../../components/UIComponents/Text'
import styles from '../../../theme/Styles'
import { COLORS, SIZES } from '../../../theme/Theme'

const FeedbackItem = ({ item }) => {
    return (
        <View>
            <View style={[styles.homeBlogItemWrap, styles.homeFeedbackItemWrap]}>
                <View style={[styles.homeFeedbackItemInner, styles.itemsCenter]}>
                    <View style={[styles.row]}>
                        <MdIcon name="comma" size={30} color={COLORS.red} />
                        <MdIcon name="comma" size={30} color={COLORS.red} style={{ left: -14 }} />
                    </View>
                    <BoldText style={[styles.mtMd, { fontSize: SIZES.lg - 7 }]}>{item.title}:</BoldText>
                    <RegularText style={[styles.mtMd, styles.textCenter]}>{item.desc}</RegularText>
                    <BoldText style={[styles.mtMd, { fontSize: SIZES.md }]}>{item.author}</BoldText>
                    <BoldText style={[styles.mtMd]}>Founder</BoldText>
                    <Image source={item.founder} style={[styles.homeFeedbackImage, styles.selfCenter]} />
                </View>
            </View>
        </View>
    )
}

export default FeedbackItem
