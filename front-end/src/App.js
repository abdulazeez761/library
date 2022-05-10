import './App.css';
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import Nav from './components/nav';
import Home from './pages/Home';
import About from './pages/About';
import Filter from './pages/filter';
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
      <Route path='*'  element={<Error/>}/>
    </Routes>
    </div>  
    </BrowserRouter>
    
  );
}

export default App;
