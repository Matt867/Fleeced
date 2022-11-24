import { BrowserRouter, createBrowserRouter, Route, Routes } from 'react-router-dom';
import Basket from './frontend/components/Basket.js';
import Login from './frontend/components/Login.js'

// const router = createBrowserRouter({
//   path: '/login',
//   element: <Login/>
// })

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Login/>} path='/login'/>
        <Route element={<Basket/>} path='/basket'/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
