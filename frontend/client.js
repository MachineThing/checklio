import App from './src/index.jsx'
import React from 'react'
import { hydrateRoot } from 'react-dom/client'

import './src/style/index.less'

hydrateRoot(document.getElementById("root"), <App />)