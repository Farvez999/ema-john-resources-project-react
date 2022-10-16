import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/Main';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import About from './components/About/About';
import Shop from './components/Shop/Shop';
import { productsAndCartLoaders } from './loaders/productsAndCartLoaders';
import LogIn from './components/LogIn/LogIn';
import SignUp from './components/SignUp/SignUp';
import Shipping from './components/Shipping/Shipping';
import PrivateRoute from './routes/PrivateRoute';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => (fetch('products.json')),
          element: <Shop></Shop>,
        },
        {
          path: '/orders',
          loader: productsAndCartLoaders,
          element: <Orders></Orders>,
        },
        {
          path: '/inventory',
          element: <Inventory></Inventory>,
        },
        {
          path: '/about',
          element: <About></About>,
        },
        {
          path: '/login',
          element: <LogIn></LogIn>,
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>,
        },
        {
          path: '/shipping',
          element: <PrivateRoute><Shipping></Shipping></PrivateRoute>,
        }
      ]
    }
  ]);


  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
