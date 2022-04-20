import "./App.css";
import Home from "./Home";
import NewCustomer from "./NewCustomer";
import WaiverForm from "./WaiverForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <ToastContainer position="top-center" />
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route path="/NewCustomer" element={<NewCustomer />} />

          <Route path="/WaiverForm" element={<WaiverForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
