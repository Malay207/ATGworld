
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Header from './components/Header';
import Body from './components/Body';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Body />
        <Routes>

        </Routes >
      </Router>


    </>
  );
}

export default App;
