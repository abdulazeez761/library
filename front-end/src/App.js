import './App.css';
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import Nav from './components/nav';
import Home from './pages/Home';
import About from './pages/About';
import Filter from './pages/filter';
import CollagePage from './pages/colllagePage'
import Login from './pages/login';
import Register from './pages/register';
import Error from './pages/Error'
function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className='App'>
    <Routes>
      <Route path='/'   element={<Home/>}/>
      <Route path='about'   element={<About/>}/>
      <Route path='filter'   element={<Filter/>}/>
      <Route path='filter'   element={<Filter/>}/>
      <Route path='login'   element={<Login/>}/>
      <Route path='register'   element={<Register/>}/>
      <Route path='college/:name/:id' element={<CollagePage/>}/>
      <Route path='*'  element={<Error/>}/>
    </Routes>
    </div>  
    </BrowserRouter>
    
  );
}

export default App;
