import React, { useState, useEffect } from 'react'
import { View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import jwt_decode from "jwt-decode"
import Header from '../../../components/UIComponents/Header'
import styles from '../../../theme/Styles'
import { BoldText, RegularText } from '../../../components/UIComponents/Text'
import { saveUserData } from '../../../actions/loginActions'

const ProfileScreen = props => {
    const { navigation, userData, dispatch } = props
    const [profileData, setProfileData] = useState({})

    useEffect(() => {
        console.log("Profile userData state: " + JSON.stringify(userData))
        getUserData()
    }, [])

    const getUserData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('userData')
            const data = jsonValue != null ? JSON.parse(jsonValue) : {}
            const decoded = jwt_decode(data.token)
            // console.log("decoded: " + JSON.stringify(decoded))
            setProfileData(decoded)
            return data
        } catch (error) {
            console.log("Profile getUserData error: " + error)
        }
    }

    const signOut = async () => {
        try {
            await AsyncStorage.removeItem('userData')
            await dispatch(saveUserData({}))
        } catch (error) {
            console.log("Profile signOut error: " + error)
        }
    }

    return (
        <View>
            <Header navigation={navigation} />
            <View style={{ padding: 20 }}>
                <BoldText style={[styles.fs18, styles.mbMd]}>Profile Screen</BoldText>
                <View style={[styles.row]}>
                    <BoldText>First Name: </BoldText>
                    <RegularText>{profileData.firstName}</RegularText>
                </View>
                <View style={[styles.row]}>
                    <BoldText>Last Name: </BoldText>
                    <RegularText>{profileData.lastName}</RegularText>
                </View>
                <View style={[styles.row]}>
                    <BoldText>Email: </BoldText>
                    <RegularText>{profileData.email}</RegularText>
                </View>
                <View style={styles.mtMd}>
                    <TouchableOpacity
                        style={[styles.btn, styles.shadow, styles.btnLogin, styles.btnPrimary]}
                        onPress={() => signOut()}
                        activeOpacity={0.7}
                    >
                        <BoldText style={styles.btnPrimaryText}>Sign out</BoldText>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const mapStateToProps = (state) => ({
    userData: state.login.userData
})

export default connect(mapStateToProps)(ProfileScreen)
