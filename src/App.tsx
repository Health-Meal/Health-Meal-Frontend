import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<></>} />
        <Route path="/login" element={<></>} />
        <Route path="/pageTwo" element={<></>} />
        <Route path="/pageThree" element={<></>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
