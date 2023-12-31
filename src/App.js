import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import './App.css';
import Home from './Container/Home';
import Todolist from './Container/Todolist';

function App() {
  return (
    <div className="App">
<Router>
  <Link to='/Home'>Home</Link>
  <Link to='/Todolist'>Todolist</Link>
 <Routes>
  <Route path='/' element={<Home />} />
  <Route path='/Home' element={<Home />} />
  <Route path='/Todolist' element={<Todolist />} />
 </Routes>

</Router>
     
     
     
    </div>
  );
}

export default App;
