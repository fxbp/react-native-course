import React, { useState, useEffect } from 'react'
import { Provider } from 'react-redux'
import * as Font from 'expo-font'
import { Spinner } from 'native-base'


import Routes from './routes'
import Store from './redux/store'

const store = Store();
const ROBOTO = require('../node_modules/native-base/Fonts/Roboto.ttf')
const ROBOTO_MEDIUM = require('../node_modules/native-base/Fonts/Roboto_medium.ttf')

export default () => {
    const [fontsLoaded, setFontsLoaded] = useState(false);
    
    useEffect(() => {
        if (!fontsLoaded) {
            loadFonts()
        }
    }, [fontsLoaded])

    const loadFonts = async () => {
        await Font.loadAsync({
            'Roboto': ROBOTO,
            'Roboto_medium': ROBOTO_MEDIUM
        })

        setFontsLoaded(true)
    }

    if (!fontsLoaded) {
        return <Spinner color ="pink" />
    }
    return (
    <Provider store = {store} >
        <Routes />  
    </Provider>

)}