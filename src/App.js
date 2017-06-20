import React, { PureComponent } from 'react'
import Page from './containers/PageContainer'

import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

const store = configureStore()

class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <Page />
      </Provider>
    )
  }
}

export default App
