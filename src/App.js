import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/login/Login';
import ToDoTask from './pages/toDoTask/ToDoTask';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/todo' element={<ToDoTask />} />
      </Routes>
    </div>
  );
}

export default App;
