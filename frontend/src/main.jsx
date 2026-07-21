import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { StytchProvider } from '@stytch/react';
import { createStytchUIClient } from '@stytch/react/ui';

import './index.css'
import App from './App.jsx'

const stytch = createStytchUIClient('public-token-test-55e71ffa-8f25-4632-8479-ca4a193b7464');


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <StytchProvider stytch={stytch}>
        <App />
      </StytchProvider>
  </StrictMode>,
)
