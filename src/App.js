import './App.css'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'

function App() {
  return (
    <div className='app'>
      {/* Header */}
      <Header />
      {/* App Boddy */}
      <div className='app__body'>
        <Sidebar />
      </div>
      {/* Sidebar */}
      {/* Feed */}
      {/* Widgets */}
    </div>
  )
}

export default App
