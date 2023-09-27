import './App.css';
import {Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import TodoList from './Components/TodoList';
import Login from './Components/Login';
import Signup from './Components/Signup';



function App() {
  return (
   <>
   <Navbar/>
     <Routes>
         <Route exact path='/' element={<Home/>}>Home</Route>
         <Route exact path='/TodoList' element={<TodoList/>}>Home</Route>
         <Route exact path='/Login' element={<Login/>}>Home</Route>
         <Route exact path='/signup' element={<Signup/>}>Home</Route>
         
     </Routes>
    
   </>
      
  );
}

export default App;