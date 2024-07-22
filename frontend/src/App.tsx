import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Home } from "./pages/home"
import { Resources } from "./pages/resources"
import { Products } from './pages/products'
import { About } from './pages/about'

const router = createBrowserRouter([
  {
    path: "/Home",
    element: <Home/>
  },
  {
    path: "/Resources",
    element: <Resources />
  },
  {
    path: "/Products",
    element: <Products />
  },
  {
    path: "/About",
    element: <About />
  },
])

export default function App() {
  return <RouterProvider router={router} />
}