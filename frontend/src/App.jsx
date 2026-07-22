import './App.css'

function App() {
    const {user} = useStytchUser();

    const config = {
      products: [Products.passwords],
      passwordOptions: {
        loginRedirectURL: 'https://www.stytch.com/login',
        resetPasswordRedirectURL: 'https://www.stytch.com/reset-password',
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