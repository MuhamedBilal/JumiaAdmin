import './App.css';
import Router from "../src/Components/router/router.jsx";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App">
        <ToastContainer />
    <Router  />
  </div>
  );
}

export default App;
