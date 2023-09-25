import { BrowserRouter, Route, Routes } from "react-router-dom";

export function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/about" element={<div>About</div>} />
      </Routes>
    </BrowserRouter>
  )
}


