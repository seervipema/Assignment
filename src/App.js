import { Provider } from 'react-redux';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import StudentInfo from './components/StudentInfo';
import appStore from './utils/store/appStore';

function App() {
  const appRoutes = createBrowserRouter(
    [
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/student-info/:student',
        element:<StudentInfo/>
      }
    ]
    )
  return (
    <div>
      <Provider store={appStore}> <RouterProvider router={appRoutes}/></Provider>
    </div>
  );
}

export default App;
