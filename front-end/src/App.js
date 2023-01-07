import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/nav';
import Home from './pages/Home';
import About from './pages/About';
import ProfilePage from './pages/profilePage'
import CollagePage from './pages/colllagePage'
import Login from './pages/login';
import Register from './pages/register';
import ChatPage from './pages/chatePage';
import Error from './pages/Error'
import AddBooks from './pages/addBooks';
import PersistLogin from './components/PersistLogin'
import RequireAuth from './components/RequireAuth';
import ProductsGenrePage from './pages/ProductsGenrePage';
import ProductInfoPage from './components/productInfoPage';
import NoProfile from './components/npProfile';
const ROLES = {
  "User": 2001,
  "Editor": 1984,
  "Admin": 5150
}

function App() {

  return (
    <BrowserRouter>
      <Nav />
      <div className='App'>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          {/* this page can be accessed by the user how has 2001 role */}
          <Route element={<PersistLogin />}>
            <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
              <Route path='add-books' element={<AddBooks />} />
              {/* <SelectedUserProvider> */}
              <Route path='/:userName' element={<ProfilePage />} />
              <Route path='direct/*' element={<ChatPage />} />
              {/* </SelectedUserProvider> */}
            </Route>
          </Route>
          {/* <Route path='profile/:userName' element={<NotLogedInUserProfile />} /> */}
          <Route path='noprofile' element={<NoProfile />} />
          <Route path='college/:name/:id' element={<CollagePage />} />
          <Route path='college/:name/:id/:genre' element={<ProductsGenrePage />} />
          <Route path='college/:name/:id/:genre/:bookID' element={<ProductInfoPage />} />
          <Route path='profile/:bookID' element={<ProductInfoPage />} />
          <Route path='*' element={<Error />} />
        </Routes>

      </div>
    </BrowserRouter>
  );

}

export default App;
