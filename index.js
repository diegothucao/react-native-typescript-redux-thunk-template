/**
 * @format
 */
// eslint-disable-next-line no-unused-vars
import React from 'react'
// eslint-disable-next-line no-unused-vars
import App from './src/components/App'
// eslint-disable-next-line no-unused-vars
import { Provider } from 'react-redux'
import {AppRegistry} from 'react-native'
import {name as appName} from './app.json'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import ReducerFactory from './src/redux/reducer/ReducerFactory'

const store = createStore(ReducerFactory, applyMiddleware(thunk))

const ReduxApp = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

AppRegistry.registerComponent(appName, () => ReduxApp)
