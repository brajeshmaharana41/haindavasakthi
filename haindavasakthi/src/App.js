import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers'
import Routes from './navigation/Routes'
import { SafeAreaView, StatusBar } from 'react-native'
import styles from './theme/Styles'
import { COLORS } from './theme/Theme'

const App = () => {
    const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
    const StatusBarStyle = Platform.OS === 'ios' ? 'dark-content' : 'light-content'

    return (
        <>
            <StatusBar barStyle={StatusBarStyle} backgroundColor={COLORS.primary} />
            <SafeAreaView style={[styles.flex1, styles.bgWhite]}>
                <Provider store={store}>
                    <Routes />
                </Provider>
            </SafeAreaView>
        </>
    )
}

export default App
