import UserConetxtProvider from './Context/Usercontextprovider'
import './App.css'
import Login from './Components/Login'
import Profile from './Components/Profile'

function App() {
  

  return (
    <UserConetxtProvider>
      <h1>Context API</h1>
      <Login></Login>
      <Profile></Profile>
    </UserConetxtProvider>
  )
}

export default App
