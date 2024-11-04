import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/home";
import { UserProvider } from "./context/loginContext";
import { LogoutProvider } from "./context/logoutContext";
import About from "./pages/About";
import TripPlan from "./pages/trip";

function App() {
  return (
    <LogoutProvider>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/plan-your-trip" element={<TripPlan />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </LogoutProvider>
  );
}

export default App;
