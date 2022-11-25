import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from './Components/Form';
import Read from './Components/Read';

function App() {
  return (
    <div className="container">
      <h1 className='text-center'>CRUD OPERATION</h1>
   
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />}/>
        <Route path="/:id" element={<Form />}/>
          <Route path="/read" element={<Read />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
