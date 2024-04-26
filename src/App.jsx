import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import Regintration from "./pages/Regintration"
import Login from "./pages/Login"

function App() {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <Home/> ,
    },
    {
      path: "/regi",
      element: <Regintration/> ,
    },
    {
      path: "/login",
      element: <Login/> ,
    },
    
  ]
  )
 

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
