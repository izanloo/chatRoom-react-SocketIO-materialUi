import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ChatRoom from './pages/ChatRoom';
import Login from './pages/Login';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<Login />} />
        <Route path='/chatRoom' element={<ChatRoom />} />
      </Routes>
    </BrowserRouter>

  );
}