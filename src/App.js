import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Reviews from './components/Reviews/Reviews';
import Dashboard from './components/Dashboard/Dashboard';
import Blogs from './components/Blogs/Blogs';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/reviews' element={<Reviews/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/blogs' element={<Blogs/>} />
      </Routes>
    </div>
  );
}

export default App;
