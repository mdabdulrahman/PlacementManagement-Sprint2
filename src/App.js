import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './pages/Home'
import Modify from './pages/Modify';
import Add from './pages/Add';
function App() {

  return (
    
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/modify" element={<Modify/>}/>
      <Route path='/add' element={<Add/>}/>
    </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
