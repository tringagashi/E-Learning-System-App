import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from "./Login";
import Signup from "./Signup";
import Home from './Home';
import Courses from './Courses';
import Aboutus from './Aboutus';
import Certificates from './Certificates';





function App() {
  return (
    <BrowserRouter>
      
      <Routes>

          <Route path = '/' element = {<Login />}></Route>
          <Route path = '/signup' element = {<Signup />}></Route>
          <Route path = '/home' element = {<Home />}></Route>
          <Route path = '/courses'element ={<Courses />}></Route>
          <Route path ='/aboutus' element={<Aboutus />}></Route>
          <Route path ='/certificates' element ={<Certificates />}></Route>
  return <h1>Hello E-Learning System</h1>;
  // trigger linguist recalc





      </Routes>

    </BrowserRouter>
  );
}

export default App;
