import './App.css';
import { Route, Routes } from 'react-router-dom';
import Clients from 'views/clients';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Clients />} />
        <Route path="/Clients" element={<Clients />} />
      </Routes>
    </div>
  );
}
