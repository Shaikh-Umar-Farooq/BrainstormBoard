import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Homescreen from './screens/home/homescreen.jsx'
import { ThemeContext } from './context/themecontext.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AddNewScreen from './screens/newIdea/AddNewScreen.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homescreen />
  },
  {
    path: '/new',
    element: <AddNewScreen />
  }
])

function App() {
  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState('light')

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
  <div className=' flex flex-col items-center justify-center p-4 md:p-10'  data-theme={theme}  >
    <div className='max-w-2xl w-full items-center  '>

      <RouterProvider router={router} />
    </div>

  </div>
  </ThemeContext.Provider>
  )
}

export default App
