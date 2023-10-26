import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { AboutPage } from "./pages/AboutPage.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { UsersPage } from "./pages/UsersPage.jsx";
import { NotFoundPage } from "./pages/NotFoundPage.jsx";
import { NavBar } from "./components/NavBar.jsx";
import { UserPage } from "./pages/userPage.jsx";
import { Dashboard } from "./pages/Dashboard.jsx";

export function App() {

  return (
    <BrowserRouter>

      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/usuarios" element={<Navigate to="/users" />} />
        <Route path="/users/:userId" element={<UserPage />} />
        <Route path="/dashboard/*" element={<Dashboard />} >
          <Route path="welcome" element={<h1>Welcome</h1>} />
          <Route path="goodbye" element={<h1>goodbye</h1>} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}
