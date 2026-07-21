import './App.css'
import { createStytchClient, StytchProvider } from '@stytch/react';
import { StytchLogin, IdentityProvider, useStytchUser } from '@stytch/react';

const stytch = createStytchClient('public-token-test-55e71ffa-8f25-4632-8479-ca4a193b7464');

function App() {

  const {user: User} = useStytchUser();
  const config = {
    products: [Products.oauth],
    oauthOptions: {
      providers: [{ type: OAuthProviders.Google }],
      loginRedirectURL: 'https://www.stytch.com/login',
      signupRedirectURL: 'https://www.stytch.com/signup',
    },
    sessionOptions: {
      sessionDurationMinutes: 60,
    },
  };

  return (
    <>
      <StytchProvider stytch={stytch}>
        <div>
          {!user ? <StytchLogin config={config}/> : <IdentityProvider />}
        </div>
      </StytchProvider>
    </>
  )
}

export default App
