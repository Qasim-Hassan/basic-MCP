import './App.css'
import {StytchLogin, IdentityProvider, useStytchUser, Products} from "@stytch/react";

function App() {
    const {user} = useStytchUser();

    const config = {
      products: [Products.passwords],
      passwordOptions: {
        loginRedirectURL: 'https://www.stytch.com/login',
      },
      sessionOptions: {
        sessionDurationMinutes: 60,
      },
    };

  return (
    <div>
        {!user ? <StytchLogin config={config}/> : <IdentityProvider />}
    </div>
  )
}

export default App