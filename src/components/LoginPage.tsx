import { useEffect } from 'react';
import { useAuthStore } from '../store/auth.store'

export const LoginPage = () => {

  const authStatus = useAuthStore( state => state.status)

  const login = useAuthStore( state => state.login);
  const logout = useAuthStore( state => state.logout);

  useEffect(() => {

    setTimeout(() => {
      logout();
    }, 1500)

  }, [])

  if(authStatus === 'checking'){
    return <h3>Loading</h3>
  }
  return (
    
    <>
    <h1>Login page</h1>

    {(authStatus === 'authenticated') ? <div>Autenticado como: {JSON.stringify(UserActivation, null, 2)}</div> : <div>No autenticado</div>}

    {
      (authStatus === 'authenticated') ? (<button onClick= {logout}>Logout</button>)
      : (<button onClick={() => login('ivan.rosero@outlook.com', '123')}>Login</button>)
    }
    
    </>
  )
}
