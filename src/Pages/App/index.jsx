import { useRoutes , BrowserRouter } from 'react-router-dom';
import Home from '../Home';
import Developers from '../Developers'
import Navbar from '../../Components/Navbar';
import Projects from '../Projects';
import About_Me from '../About_Me';
import './App.css'
import Footer from '../../Components/Footer';
import Contact from '../Contact';

const AppRoutes = () => {
  let routes = useRoutes([
    { path:'/', element:<Home />},
    { path: '/Developers', element: <Developers /> },    
    { path: '/Projects', element: <Projects /> },    
    { path: '/About_Me', element: <About_Me /> },
    { path: '/Contact', element: <Contact /> },
  ])
  return routes
}

const App = () => {

  return (
    <BrowserRouter>      
      <Navbar/>
      <AppRoutes />
      <Footer/>
    </BrowserRouter>
  )
}
export default App
