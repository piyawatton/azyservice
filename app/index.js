import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { CookiesProvider } from 'react-cookie'
import App from './App'
import Maid from './Maid'
import configureStore from './store/configureStore'
import './index.scss'

// import registerServiceWorker from './registerServiceWorker';
const store = configureStore()

const renderRootEl = () => {
  if(document.getElementById('app')) { renderApp(App) }
  if(document.getElementById('maid-app')) { renderApp(Maid) }
}

const findRootEl = () => {
  if(document.getElementById('app')) return document.getElementById('app')
  if(document.getElementById('maid-app')) return document.getElementById('maid-app')
  return undefined
}
const rootEl = findRootEl()

const renderApp = (Component) => {
  render(
    <Provider store={store}>
      <CookiesProvider>
        <Component />
      </CookiesProvider>
    </Provider >
    ,
    rootEl
  )
}

renderRootEl()

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextRoot = require('./App').default // eslint-disable-line global-require
    renderApp(NextRoot)
  })
}