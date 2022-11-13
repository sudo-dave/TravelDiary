import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Error from "./routes/Error";
import AddPage from "./routes/AddPage";
import Settings from "./routes/Settings";
const App = () => {
return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddPage/>} />
        <Route path="/settings" element={<Settings/>} />
        <Route path="*" element={<Error errorCode={404} msg="Page Not Found"/>} />
      </Routes>
    </Router>
  );
};
export default App
