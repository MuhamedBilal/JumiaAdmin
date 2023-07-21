import './App.css';
import Router from "../src/Components/router/router.jsx";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navigator from './Components/Navigator/Navigator';

function App() {
  return (
    <div className="App">
        <Navigator />
        <ToastContainer />
    <Router  />
  </div>
  );
}

export default App;
