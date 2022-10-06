import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/Main';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import About from './components/About/About';
import Shop from './components/Shop/Shop';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Shop></Shop>,
        },
        {
          path: '/orders',
          element: <Orders></Orders>,
        },
        {
          path: '/inventory',
          element: <Inventory></Inventory>,
        },
        {
          path: '/about',
          element: <About></About>,
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
