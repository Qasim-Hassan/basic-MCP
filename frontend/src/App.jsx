import './App.css'
import { StytchLogin, IdentityProvider, useStytchUser } from '@stytch/react';

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
      <div>
        {!user ? <StytchLogin config={config}/> : <IdentityProvider />}
      </div>
    </>
  )
}

export default App
