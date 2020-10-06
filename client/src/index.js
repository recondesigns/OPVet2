import React from 'react'
import ReactDOM from 'react-dom'
import Store from './providers/Store'
import App from './App'
import './index.css'

function Index() {
    return (
        <Store>
            <App />
        </Store>
    )
}

ReactDOM.render(<Index />, document.getElementById('root'))
