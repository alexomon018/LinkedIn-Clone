import React, { useContext, useReducer, useEffect } from 'react'
import reducer from './reducer'
const AppContext = React.createContext()

const initalState = {
  user: null,
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initalState)

  return (
    <AppContext.Provider
      value={{
        ...state,
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
