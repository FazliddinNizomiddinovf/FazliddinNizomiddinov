import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/pgs/Home'
import About from './components/pgs/About'
import Projects from './components/pgs/Projects'

function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Navbar/>,
      children:[
        { path: '/', element: <Home/> },
        { path: '/about', element: <About/> },
        { path: '/projects', element: <Projects/> }
        ]
    },
  ])
  return (
    <div className='container'>
      <RouterProvider router={routes} />
    </div>
  )
}

export default App
