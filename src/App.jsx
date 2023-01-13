import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/shared/Navigation/NavBar';
import Home from './pages/Home/Home';
import './App.css';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';

function App() {
  return (
  <div>
  
    <Router>
    <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
        <Routes>
          <Route path='/register' element={<Register/>}/>
        </Routes>
        <Routes>
          <Route path='/login' element={<Login/>}/>
        </Routes>
    </Router>
  </div>
  );
}

// const GuestRoute =({...rest})=>{
//   return (
//     <Routes>
//       <Route {...rest} render={({location}) => {
//         isAuth ? 
//         <Navigate to={
//           {

//           }
//         }/>
//       }} />
//     </Routes>
//   )
// }

export default App;