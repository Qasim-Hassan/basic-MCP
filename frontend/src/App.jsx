import './App.css'
import { createStytchClient, StytchProvider } from '@stytch/react';
import { StytchLogin, IdentityProvider, useStytchUser } from '@stytch/react';

const stytch = createStytchClient('public-token-test-55e71ffa-8f25-4632-8479-ca4a193b7464');

function App() {

  const {user: User} = useStytchUser();
  
  return (
    <>
      <StytchProvider stytch={stytch}>
        {/* Your app code */}
      </StytchProvider>
    </>
  )
}

export default App
