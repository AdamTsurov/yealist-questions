import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './styles/normalize.scss'
import './styles/index.scss'
import { AppRouter } from './router'
import { Provider } from 'react-redux'
import { store } from './store/config/store'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </StrictMode>
)
