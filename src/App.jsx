import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './Layout/AppLayout'
import ErrorPage from './Components/ErrorPage'
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import Products from './Pages/Products'
import Strategy from './Pages/Strategy'
import PrivacyPolicy from './Pages/Privacy'
import TermsConditions from './Pages/Terms'
import Contact from './Pages/Contact'

const App = () => {

  const router=createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
      errorElement:<ErrorPage/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"/services",
          element:<Services/>
        },
        {
          path:"/products",
          element:<Products/>
        },
        {
          path:"/strategy",
          element:<Strategy/>
        },
        {
          path:"/contact",
          element:<Contact/>
        },
        {
          path:"/privacy-policy",
          element:<PrivacyPolicy/>
        },
        {
          path:"/terms-conditions",
          element:<TermsConditions/>
        },
      ]
    }
  ])
  
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App