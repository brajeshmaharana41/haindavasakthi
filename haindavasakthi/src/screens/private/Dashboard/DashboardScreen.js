import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import Header from '../../../components/UIComponents/Header'
import styles from '../../../theme/Styles'
import Map from './Map'
import { saveUserData } from '../../../actions/loginActions'


const DashboardScreen = props => {
    const { navigation, userData } = props

    useEffect(() => {
        console.log("Profile userData state: " + JSON.stringify(userData))
    }, [])

    return (
        <>
            <Header navigation={navigation} />
            <View style={styles.dashboardWrapper}>
                <Map />
            </View>
        </>
    )
}

const mapStateToProps = (state) => ({
    userData: state.login.userData
})

export default connect(mapStateToProps)(DashboardScreen)
