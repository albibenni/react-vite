import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Search from './search/pages/Search';
import Home from './search/pages/Home';
import MyWeirdCounts from './search/pages/MyWeirdCounts';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/math" element={<MyWeirdCounts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
