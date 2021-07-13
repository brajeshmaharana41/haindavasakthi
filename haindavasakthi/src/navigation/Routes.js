import React, { useState, useEffect } from 'react'
import { TouchableOpacity, Image } from 'react-native'
import Ionicon from 'react-native-vector-icons/Ionicons'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { connect } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'

// Screens
import SplashScreen from '../screens/public/SplashScreen'
import LoginScreen from '../screens/auth/LoginScreen'
import SignupScreen from '../screens/auth/SignupScreen'
import ForgotPasswordScreen from '../screens/auth/ForgotPasswordScreen'
import PermissionsScreen from '../screens/auth/PermissionsScreen'
import PermissonsPOC from '../screens/poc/PermissonsPOC'
import HomeScreen from '../screens/public/Home/HomeScreen'
import AboutScreen from '../screens/public/AboutScreen'
import VideosScreen from '../screens/public/VideosScreen'
import DepartmentsScreen from '../screens/public/DepartmentsScreen'
import DonationsScreen from '../screens/public/DonationsScreen'
import NewsScreen from '../screens/public/NewsScreen'
import ContactsScreen from '../screens/public/ContactsScreen'
import ShopScreen from '../screens/public/ShopScreen'
import DashboardScreen from '../screens/private/Dashboard/DashboardScreen'
import { COLORS } from '../theme/Theme'
import OtpScreen from '../screens/auth/OtpScreen'
import CustomDrawerContent from './CustomDrawerContent'
import ProfileScreen from '../screens/private/Profile/Profile'
import { saveUserData } from '../actions/loginActions'

// stacks
const SplashStack = createStackNavigator()
const HomeStack = createStackNavigator()
const AuthStack = createStackNavigator()
const MainStack = createStackNavigator()
const Drawer = createDrawerNavigator()
const AuthDrawer = createDrawerNavigator()
const Tab = createBottomTabNavigator()

const SplashStackNavigator = ({ navigation }) => (
    <SplashStack.Navigator screenOptions={{ headerShown: false }}>
        <SplashStack.Screen name="Splash" component={SplashScreen} />
    </SplashStack.Navigator>
)

const HomeStackNavigator = ({ navigation }) => (
    <HomeStack.Navigator
        screenOptions={{
            headerShown: true,
            headerStyle: {
                backgroundColor: COLORS.primary
            },
            headerTitle: props => (
                <Image
                    style={{ left: -30, height: 50 }}
                    source={require('../assets/logo.png')}
                    resizeMode='contain'
                />
            ),
            headerLeft: () => (
                <TouchableOpacity
                    onPress={() => navigation.openDrawer()}
                >
                    <Ionicon name="menu" size={25} color={COLORS.white} />
                </TouchableOpacity>
            ),
            headerLeftContainerStyle: {
                paddingLeft: 15
            }
        }}
        initialRouteName="Home"
    >
        <HomeStack.Screen name="Home" component={HomeScreen} />
        <HomeStack.Screen name="About" component={AboutScreen} />
        <HomeStack.Screen name="Videos" component={VideosScreen} />
        <HomeStack.Screen name="Departments" component={DepartmentsScreen} />
        <HomeStack.Screen name="Donations" component={DonationsScreen} />
        <HomeStack.Screen name="News" component={NewsScreen} />
        <HomeStack.Screen name="Contacts" component={ContactsScreen} />
        <HomeStack.Screen name="Shop" component={ShopScreen} />
        <HomeStack.Screen name="Login" component={LoginScreen} />
    </HomeStack.Navigator>
)

const DashboardTabNavigator = ({ navigation }) => (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={DrawerNavigator} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
)

const Routes = props => {
    const { userData, dispatch } = props
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getUserData()
        setTimeout(() => {
            setLoading(false)
        }, 1500)
    }, [])

    const getUserData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('userData')
            const data = jsonValue != null ? JSON.parse(jsonValue) : {}
            dispatch(saveUserData(data))
            console.log("getUserData " + JSON.stringify(userData))
        } catch (error) {
            console.log(error)
        }
    }

    // navs
    const AuthStackNavigator = ({ navigation }) => (
        <AuthStack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
            <AuthStack.Screen name="PermissonsPOC" component={PermissonsPOC} />
            <AuthStack.Screen name="Login" component={LoginScreen} />
            <AuthStack.Screen name="Signup" component={SignupScreen} />
            <AuthStack.Screen name="OTP" component={OtpScreen} />
            <AuthStack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        </AuthStack.Navigator>
    )

    const AuthDrawerNavigator = ({ navigation }) => (
        <AuthDrawer.Navigator
            initialRouteName="Home"
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            drawerContentOptions={{
                activeTintColor: COLORS.white,
                activeBackgroundColor: COLORS.primary,
                inactiveTintColor: COLORS.dark,
                inactiveBackgroundColor: COLORS.white
            }}
        >
            <AuthDrawer.Screen name="Home" component={HomeScreen} />
            <AuthDrawer.Screen name="About" component={AboutScreen} />
            <AuthDrawer.Screen name="Videos" component={VideosScreen} />
            <AuthDrawer.Screen name="Departments" component={DepartmentsScreen} />
            <AuthDrawer.Screen name="Donations" component={DonationsScreen} />
            <AuthDrawer.Screen name="News" component={NewsScreen} />
            <AuthDrawer.Screen name="Contacts" component={ContactsScreen} />
            <AuthDrawer.Screen name="Shop" component={ShopScreen} />
            <AuthDrawer.Screen name="Login" component={AuthStackNavigator} />
        </AuthDrawer.Navigator>
    )

    const DrawerNavigator = ({ navigation }) => (
        <Drawer.Navigator
            initialRouteName="Dashboard"
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            drawerContentOptions={{
                activeTintColor: COLORS.white,
                activeBackgroundColor: COLORS.primary,
                inactiveTintColor: COLORS.dark,
                inactiveBackgroundColor: COLORS.white
            }}
        >
            <Drawer.Screen name="Home" component={HomeScreen} />
            {userData.token && <Drawer.Screen name="Dashboard" component={DashboardScreen} />}
            {userData.token && <Drawer.Screen name="Profile" component={ProfileScreen} />}
            <Drawer.Screen name="About" component={AboutScreen} />
            <Drawer.Screen name="Videos" component={VideosScreen} />
            <Drawer.Screen name="Departments" component={DepartmentsScreen} />
            <Drawer.Screen name="Donations" component={DonationsScreen} />
            <Drawer.Screen name="News" component={NewsScreen} />
            <Drawer.Screen name="Contacts" component={ContactsScreen} />
            <Drawer.Screen name="Shop" component={ShopScreen} />
            {!userData.token && <Drawer.Screen name="Login" component={LoginScreen} />}
            {!userData.token && <Drawer.Screen name="Login" component={AuthStackNavigator} />}
        </Drawer.Navigator>
    )

    return (
        <NavigationContainer>
            {loading ? <SplashStackNavigator /> : !userData.token || !userData ? <AuthDrawerNavigator /> : <DrawerNavigator />}
        </NavigationContainer>
    )
}

const mapStateToProps = (state) => ({
    userData: state.login.userData
})

export default connect(mapStateToProps)(Routes)