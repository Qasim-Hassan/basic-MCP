import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createStytchClient, StytchProvider } from '@stytch/react';

const stytch = createStytchClient('public-token-test-55e71ffa-8f25-4632-8479-ca4a193b7464');

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StytchProvider stytch={stytch}>
      <App />
    </StytchProvider>
  </StrictMode>,
)
