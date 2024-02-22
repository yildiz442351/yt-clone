import { BrowserRouter, Routes, Route } from "react-router-dom";

import Feed from "./pages/Feed";
import SearchResults from "./pages/SearchResults";
import VideoDetail from "./pages/VideoDetail";
import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Feed/>} />
        <Route path="/watch" element={<SearchResults/>} />
        <Route path="/results" element={<VideoDetail/>} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;