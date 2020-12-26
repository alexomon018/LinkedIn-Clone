import './App.css'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Feed from './components/Feed/Feed'
import { useGlobalContext } from './context'
import Login from './components/Login/Login'
function App() {
  const { user, register, loginToApp } = useGlobalContext()
  console.log(user)

  return (
    <div className='app'>
      <Header />
      {!user ? (
        <Login register={register} loginToApp={loginToApp} />
      ) : (
        <div className='app__body'>
          <Sidebar user={user} />
          <Feed user={user} />
        </div>
      )}
    </div>
  )
}

export default App
