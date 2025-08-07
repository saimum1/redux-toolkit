import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Todo from './Todo.jsx'
import {Provider} from 'react-redux'
import { Store } from './Redux/Store.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={Store}>
        <Todo/>
    </Provider>
    {/* <App /> */}
    
  </StrictMode>,
)
