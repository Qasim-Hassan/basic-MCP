import './App.css'
import { StytchLogin, IdentityProvider, useStytchUser, Products } from '@stytch/react';

function App() {
  const {user} = useStytchUser();
  const config = {
    products: [Products.emailMagicLinks],
    emailMagicLinksOptions: {
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
