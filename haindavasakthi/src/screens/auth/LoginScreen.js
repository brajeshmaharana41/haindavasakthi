import React, { useState } from 'react'
import { View, TextInput, Image, TouchableOpacity, Alert } from 'react-native'
import { connect } from 'react-redux'
import { KeyboardAwareView } from 'react-native-keyboard-aware-view'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Logo from '../../assets/logo.png'
import styles from '../../theme/Styles'
import { COLORS, SIZES } from '../../theme/Theme'
import { RegularText, BoldText } from '../../components/UIComponents/Text'
import { validateEmail } from '../../utils/utils'
import { saveUserData } from '../../actions/loginActions'

const LoginScreen = props => {
    const { navigation, dispatch } = props
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = () => {
        console.log(email, password)
        if (!email) {
            alert("Please enter email")
            return
        }
        if (!validateEmail(email)) {
            alert("Please enter valid email address")
            return
        }
        if (!password) {
            alert("Please enter password")
            return
        }
        if (password.length < 6) {
            alert("Password should be more than 5 characters")
            return
        }
        axios.post('https://dev.haindavasakthi.com/api/auth/login', {
            email,
            password
        })
            .then(response => {
                setEmail('')
                setPassword('')
                dispatch(saveUserData(response.data))
                storeUserData(response.data)
                Alert.alert(
                    "Success",
                    response.data.message,
                    [
                        { text: "Ok" }
                    ]
                )
            })
            .catch(error => {
                console.log(error)
                alert("Please enter valid email and password")
            })
    }

    const storeUserData = async (data) => {
        try {
            const jsonValue = JSON.stringify(data)
            await AsyncStorage.setItem('userData', jsonValue)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View style={[styles.flex1, styles.bgWhite, styles.loginWrapper]}>
            <View style={[styles.flex1, styles.vhCenter]}>
                <Image source={Logo} style={styles.loginLogo} />
                <BoldText style={[styles.bold, styles.loginHeading]}>Login to your Account</BoldText>
                <TextInput
                    style={styles.input}
                    onChangeText={text => setEmail(text)}
                    value={email}
                    placeholder="Email"
                    placeholderTextColor={COLORS.light}
                    keyboardType="email-address"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={text => setPassword(text)}
                    value={password}
                    placeholder="Password"
                    placeholderTextColor={COLORS.light}
                    secureTextEntry={true}
                />
                <View style={styles.fpWrap}>
                    <TouchableOpacity
                        onPress={() => props.navigation.navigate('ForgotPassword')}
                        style={styles.link}
                        activeOpacity={0.7}
                    >
                        <BoldText style={[styles.linkText, styles.smallText]}>Forgot Password</BoldText>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={[styles.btn, styles.shadow, styles.btnLogin, styles.btnPrimary]}
                    activeOpacity={0.7}
                    onPress={() => submitHandler()}
                >
                    <BoldText style={styles.btnPrimaryText}>Sign in</BoldText>
                </TouchableOpacity>
                <View style={[styles.row, styles.mtLg]}>
                    <RegularText style={styles.lightText}>Don't have an account? </RegularText>
                    <TouchableOpacity
                        style={styles.link}
                        onPress={() => props.navigation.navigate('Signup')}
                        activeOpacity={0.7}
                    >
                        <BoldText style={styles.linkText}>Sign up</BoldText>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const mapStateToProps = (state) => ({
    userData: state.login.userData
})

export default connect(mapStateToProps)(LoginScreen)
// export default LoginScreen
