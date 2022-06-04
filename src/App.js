import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Body from './components/Body';
import { useContext } from 'react';
import { CountContext } from './contexts/CountContext';

function App() {
  const {count}=useContext(CountContext);
  return (
    <div className={`App ${count ? "" : "dark"}`}>
    <Navbar/>
    <Body/>
    </div>
  );
}

export default App;
