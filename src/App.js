import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Components/Router/Router';

function App() {
  return (
    <div className='container mx-auto'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
