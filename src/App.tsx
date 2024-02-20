import React from 'react';
import { useContext, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import UserProvider, {UserContext} from './contexts/userContext';

function UserDetails(){
  const {user} = useContext(UserContext)

  return(
    <>
    <p> User Name: {user.name}</p>
    <p> User Email: {user.email}</p>
    </>
  )
}

function AnotherComponent(){

  const {user, setUser} = useContext(UserContext)

  useEffect(()=>{
    setUser({
      name: 'ABC',
      email: 'ABC@email.com'
    })
  },[])

  return(
    <>
    <p>Some other component</p>
    </>
  )
}

function App() {
  return (
    <div >
      <UserProvider>
        <UserDetails />
        <AnotherComponent />
      </UserProvider>
    </div>
  );
}

export default App;
