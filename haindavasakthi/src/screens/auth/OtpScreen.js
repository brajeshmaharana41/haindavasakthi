import React, { useState } from 'react'
import { View, TextInput, Image, TouchableOpacity, Alert } from 'react-native'
import { KeyboardAwareView } from 'react-native-keyboard-aware-view'
import axios from 'axios'
import Logo from '../../assets/logo.png'
import styles from '../../theme/Styles'
import { COLORS, SIZES } from '../../theme/Theme'
import { RegularText, BoldText } from '../../components/UIComponents/Text'

const OtpScreen = props => {
    const { navigation, route } = props
    const { email } = route.params
    const [otp, setOtp] = useState('')

    const submitHandler = () => {
        console.log(email, otp)
        axios.post('https://dev.haindavasakthi.com/api/auth/verifyAccount', {
            email,
            emailOTP: Number(otp)
        })
            .then(response => {
                console.log("otp response...................! " + JSON.stringify(response))
                setOtp('')
                Alert.alert(
                    "Success",
                    response.data.message,
                    [
                        { text: "Ok", onPress: () => navigation.navigate("Login") }
                    ]
                )
            })
            .catch(error => {
                console.log(error)
                if(error.response.status === 400){
                    alert("Please enter valid OTP.")
                }
            })
    }

    const resendOtp = () => {
        console.log(email)
        setOtp('')
        axios.post('https://dev.haindavasakthi.com/api/auth/resendEmailOTP', {
            email
        })
            .then(response => {
                console.log("otp response...................! " + JSON.stringify(response))
                alert(response.data.Message)
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <View style={[styles.flex1, styles.bgWhite, styles.loginWrapper]}>
            <View style={[styles.flex1, styles.vhCenter]}>
                <Image source={Logo} style={styles.loginLogo} />
                <BoldText style={[styles.bold, styles.loginHeading]}>Please enter OTP that we sent to your email address</BoldText>
                <TextInput
                    style={styles.input}
                    onChangeText={text => setOtp(text)}
                    value={otp}
                    placeholder="OTP"
                    placeholderTextColor={COLORS.light}
                    keyboardType="number-pad"
                />
                <View style={styles.fpWrap}>
                    <TouchableOpacity
                        onPress={() => resendOtp()}
                        style={styles.link}
                        activeOpacity={0.7}
                    >
                        <BoldText style={[styles.linkText, styles.smallText]}>Resend OTP</BoldText>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={[styles.btn, styles.shadow, styles.btnLogin, styles.btnPrimary]}
                    activeOpacity={0.7}
                    onPress={() => submitHandler()}
                >
                    <BoldText style={styles.btnPrimaryText}>Submit</BoldText>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default OtpScreen
