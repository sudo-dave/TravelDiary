import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import AddPage from "./pages/AddPage";
import SettingsPage from "./pages/SettingsPage";
const App = () => {
return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddPage/>} />
        <Route path="/settings" element={<SettingsPage/>} />
        <Route path="*" element={<Error errorCode={404} msg="Page Not Found"/>} />
      </Routes>
    </Router>
  );
};
export default App
