import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Search from './search/pages/Search';
import Home from './search/pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
