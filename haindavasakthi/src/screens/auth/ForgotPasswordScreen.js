import React, { useState } from 'react'
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import { KeyboardAwareView } from 'react-native-keyboard-aware-view'
import Ionicon from 'react-native-vector-icons/Ionicons'
import Logo from '../../assets/logo.png'
import { BoldText } from '../../components/UIComponents/Text'
import styles from '../../theme/Styles'
import { COLORS, SIZES } from '../../theme/Theme'

const ForgotPasswordScreen = (props) => {
    const [email, setEmail] = useState('')

    const submitHandler = () => {
        alert("Please check your email")
        console.log(email)
    }

    return (
        <View style={[styles.flex1, styles.bgWhite, styles.loginWrapper]}>
            <View style={{ position: 'absolute', top: 15, left: 30 }}>
                <TouchableOpacity 
                    onPress={() => props.navigation.goBack()}
                    activeOpacity={0.7}
                >
                    <Ionicon name={Platform.OS === 'ios' ? 'ios-arrow-back' : 'md-arrow-back'} size={SIZES.lg - 5} color={COLORS.primary} />
                </TouchableOpacity>
            </View>
            <View style={[styles.flex1, styles.vhCenter]}>
                <Image source={Logo} style={styles.loginLogo} />
                <BoldText style={[styles.bold, styles.loginHeading]}>Forgot Password</BoldText>
                <TextInput
                    style={styles.input}
                    onChangeText={text => setEmail(text)}
                    value={email}
                    placeholder="Email"
                    placeholderTextColor={COLORS.light}
                    keyboardType="email-address"
                />
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

export default ForgotPasswordScreen
