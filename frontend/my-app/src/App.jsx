// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import BookList from './Components/BookList';
import BookDetail from './Components/BookDetail';
import Profile from './Pages/Profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookList />} />
        <Route path="/books/:id" element={<BookDetail />} />
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
    </Router>
  );
}

  


export default App
