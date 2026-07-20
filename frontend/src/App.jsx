import './App.css'
import { createStytchClient, StytchProvider } from '@stytch/react';

const stytch = createStytchClient($YOUR_PUBLIC_KEY);

function App() {

  return (
    <>
      <StytchProvider stytch={stytch}>
        {/* Your app code */}
      </StytchProvider>
    </>
  )
}

export default App
