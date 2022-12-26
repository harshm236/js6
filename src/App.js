// import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom'
// import Home from './components/Home';
import {Student} from "./components/Student"
import {Contact} from "./components/Contact"
import {Error} from "./components/Error"
import  {Homes}  from './components/Homes';
import AddStudent from './components/AddStudent';
import  {UpdateStudent}  from './components/UpdateStudent';



function App() {
  return (
    <Routes>
      <Route path="/home" element={<Homes/>} ></Route>
      <Route path="/student" element={<Student/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="*" element={<Error/>}></Route>
      <Route path="/addnew" element={<AddStudent/>}></Route>
      <Route path="/edit" element={<UpdateStudent/>}></Route>
    </Routes>
      //  <div>hello</div>
  )
}

export default App;
