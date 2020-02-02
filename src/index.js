import React from 'react'
import { Provider } from 'react-redux'

import Routes from './routes'
import Store from './redux/store'

const store = Store();

export default () => (
    <Provider store ={store} >
        <Routes />  
    </Provider>

)