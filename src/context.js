import React, { useContext, useReducer, useEffect } from 'react'
import reducer from './reducer'
import { auth } from './firebase'
const AppContext = React.createContext()

const initalState = {
  user: null,
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initalState)

  const register = (name, profilePicUrl, email, password) => {
    if (!name) {
      return alert('Please enter a full name')
    }
    auth
      .createUserWithEmailAndPassword(email.trim(), password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profilePicUrl,
          })
          .then(() => {
            dispatch({
              type: 'USER_LOGIN',
              payload: {
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoUrl: profilePicUrl,
              },
            })
          })
      })
      .catch((error) => alert(error.message))
  }

  const loginToApp = (email, password) => {
    auth
      .signInWithEmailAndPassword(email.trim(), password)
      .then((userAuth) => {
        dispatch({
          type: 'USER_LOGIN',
          payload: {
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            profilePicUrl: userAuth.user.photoURL,
          },
        })
      })
      .catch((error) => console.log(error))
  }
  const logoutOfApp = () => {
    dispatch({ type: 'USER_LOGOUT' })
    auth.signOut()
  }
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch({
          type: 'USER_LOGIN',
          payload: {
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.profilePicUrl,
          },
        })
      } else {
        dispatch({ type: 'USER_LOGOUT' })
      }
    })
  }, [])
  return (
    <AppContext.Provider
      value={{
        ...state,
        register,
        logoutOfApp,
        loginToApp,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider, useGlobalContext }
