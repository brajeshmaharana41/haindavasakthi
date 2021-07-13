import React, { useState } from 'react'
import { View, TextInput, Image, TouchableOpacity, Platform, Alert } from 'react-native'
import { KeyboardAwareView } from 'react-native-keyboard-aware-view'
import Ionicon from 'react-native-vector-icons/Ionicons'
import axios from 'axios'
import Logo from '../../assets/logo.png'
import Checkbox from '../../components/UIComponents/Checkbox'
import { BoldText } from '../../components/UIComponents/Text'
import styles from '../../theme/Styles'
import { COLORS, SIZES } from '../../theme/Theme'
import { validateEmail } from '../../utils/utils'

const SignupScreen = props => {
    const { navigation } = props
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [contactNumber, setContactNumber] = useState('')
    const [password, setPassword] = useState('')
    const [viewPassword, setViewPassword] = useState(true)
    const [checkbox, setCheckbox] = useState(false)

    const submitHandler = () => {
        if (!firstName) {
            alert("Please enter first name")
            return
        }
        if (!lastName) {
            alert("Please enter last name")
            return
        }
        if (!email) {
            alert("Please enter email")
            return
        }
        if (!validateEmail(email)) {
            alert("Please enter valid email address")
            return
        }
        if (!contactNumber) {
            alert("Please enter contact number")
            return
        }
        if (Number(contactNumber).length < 10) {
            alert("Please enter valid contact number")
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
        if (!checkbox) {
            alert("Please accept terms & privacy")
            return
        }
        console.log("Submitted: ", firstName, lastName, contactNumber, checkbox, email, password)

        axios.post('https://dev.haindavasakthi.com/api/auth/register', {
            firstName,
            lastName,
            email,
            phone: contactNumber,
            password,
            terms: checkbox
        })
            .then(response => {
                console.log("signup response...................! " + JSON.stringify(response))
                setFirstName('')
                setLastName('')
                setEmail('')
                setContactNumber('')
                setPassword('')
                setCheckbox(false)
                Alert.alert(
                    "Success",
                    response.data.Message,
                    [
                        { text: "Ok", onPress: () => navigation.navigate("OTP", { email }) }
                    ]
                )
            })
            .catch(error => {
                console.log(error)
                if(error.response.status === 400){
                    alert("Email already exists. Please enter different email.")
                }
            })
    }

    const viewPasswordHandler = () => {
        setViewPassword(!viewPassword)
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
                <BoldText style={[styles.bold, styles.loginHeading]}>Create your Account</BoldText>
                <TextInput
                    style={styles.input}
                    onChangeText={text => setFirstName(text)}
                    value={firstName}
                    placeholder="First Name*"
                    placeholderTextColor={COLORS.light}
                    keyboardType="name-phone-pad"
                    maxLength={50}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={text => setLastName(text)}
                    value={lastName}
                    placeholder="Last Name*"
                    placeholderTextColor={COLORS.light}
                    keyboardType="name-phone-pad"
                    maxLength={50}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={text => setEmail(text)}
                    value={email}
                    placeholder="Email*"
                    placeholderTextColor={COLORS.light}
                    keyboardType="email-address"
                    maxLength={50}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={text => setContactNumber(text)}
                    value={contactNumber}
                    placeholder="Contact Number*"
                    placeholderTextColor={COLORS.light}
                    keyboardType="number-pad"
                    maxLength={10}
                />
                <View style={[styles.inputView]}>
                    <TextInput
                        style={[styles.viewInput, { paddingRight: 55 }]}
                        onChangeText={text => setPassword(text)}
                        value={password}
                        placeholder="Password*"
                        placeholderTextColor={COLORS.light}
                        secureTextEntry={viewPassword}
                        minLength={6}
                        maxLength={50}
                    />
                    <TouchableOpacity style={styles.inputViewBtn} onPress={() => viewPasswordHandler()}>
                        <Ionicon name={viewPassword ? 'md-eye-off-sharp' : 'md-eye-sharp'} size={25} color={COLORS.black} />
                    </TouchableOpacity>
                </View>
                <Checkbox checkbox={checkbox} setCheckbox={setCheckbox} text="I accept Terms of Use & Privacy Policy." />
                <TouchableOpacity
                    style={[styles.btn, styles.shadow, styles.btnLogin, styles.btnPrimary]}
                    activeOpacity={0.7}
                    onPress={() => submitHandler()}
                >
                    <BoldText style={styles.btnPrimaryText}>Sign up</BoldText>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SignupScreen
