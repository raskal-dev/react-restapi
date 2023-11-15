import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/login/Login';
import Menu from './pages/menu/Menu';

function App() {
  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route path='/' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
