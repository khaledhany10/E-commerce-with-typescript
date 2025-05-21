import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Pages/layout'
import Categories from './Pages/Categories'
import Login from './Pages/login'
import Register from './Pages/rigester'
import Products from './Pages/Producs'
import Contact from './Pages/contact'
import Error from './Pages/Error'
import About from './Pages/about'
import { Provider } from 'react-redux'
import configStore from "./Redux/store"
import ProductDetails from './Components/ProductDetails/ProductDetails'


const router = createBrowserRouter([
  {path: '/', element: <Layout /> ,children:[
    {path: '/', element: <Products />},
    {path: '/Categories', element: <Categories />},
    {path: '/login', element: <Login />},
    {path: '/about', element: <About />},
    {path: '/rigester', element: <Register />},
    {path: '/Contact', element: <Contact />},
    {path: '/ProductDetails/:id', element: <ProductDetails />},
    {path: '/*', element: <Error />},
  ]}
])



function App() {

  return (
    <>
    <Provider store={configStore}>
    <RouterProvider router={router} />
    </Provider>
    </>
  )
}

export default App
