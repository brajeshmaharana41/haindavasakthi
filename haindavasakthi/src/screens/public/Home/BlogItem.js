import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import Ionicon from 'react-native-vector-icons/Ionicons'
import { BoldText, RegularText } from '../../../components/UIComponents/Text'
import styles from '../../../theme/Styles'
import { COLORS } from '../../../theme/Theme'

const BlogItem = ({ item }) => {
    return (
        <View style={styles.homeBlogItemWrap}>
            <Image source={item.image} style={[styles.homeBlogImage]} />
            <View style={[styles.shadow, styles.homeBlogItemContent]}>
                <RegularText style={styles.homeBlogItemType}>{item.type}</RegularText>
                <View style={[styles.homeBlogItemContentInner]}>
                    <BoldText style={styles.homeBlogItemTitle}>{item.title}</BoldText>
                    <View style={[styles.row, styles.spaceBetween, styles.mtMd]}>
                        <View style={[styles.row, { alignItems: 'center' }]}>
                            <Ionicon name="md-eye" size={30} color={COLORS.red} style={{ paddingRight: 5 }} />
                            <RegularText style={{ fontSize: 20 }}>{item.views}</RegularText>
                        </View>
                        <View style={[styles.row, { alignItems: 'center' }]}>
                            <Ionicon name="md-thumbs-up-sharp" size={30} color={COLORS.red} style={{ paddingRight: 5 }} />
                            <RegularText style={{ fontSize: 20 }}>{item.likes}</RegularText>
                        </View>
                        <View style={[styles.row, { alignItems: 'center' }]}>
                            <Ionicon name="md-mail-sharp" size={30} color={COLORS.red} style={{ paddingRight: 5 }} />
                            <RegularText style={{ fontSize: 20 }}>{item.comments}</RegularText>
                        </View>
                        <RegularText style={styles.mtMd}>{item.desc}</RegularText>
                        <View style={[styles.row, styles.spaceBetween, styles.mtMd, { width: '100%' }]}>
                            <View style={[styles.row]}>
                                <BoldText>Posted by</BoldText>
                                <BoldText style={styles.redText}>{" "}Brian Wright</BoldText>
                            </View>
                            <TouchableOpacity>
                                <BoldText>READ MORE</BoldText>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default BlogItem
