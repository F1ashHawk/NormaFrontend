import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Containers/App/App.tsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom';
import {DefaultTheme} from './Theme/defaultTheme.ts';
import {ThemeProvider} from 'styled-components';
import {Provider} from 'react-redux';
import {setupStore} from './Store/store.ts';

const store = setupStore()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={DefaultTheme}>
      <App />
        </ThemeProvider>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
