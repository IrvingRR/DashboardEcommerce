import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';

// Pages
import Home from './pages/Home/Home';
import Dashboard from './pages/Dashboard/Dashboard';
import Profile from './pages/Profile/Profile';
import Users from './pages/Users/Users';
import Products from './pages/Products/Products';
import Orders from './pages/Orders/Orders';
import Messages from './pages/Messages/Messages';
import Page404 from './pages/Page404/Page404';

function App() {

  const [reduceSidebar, setReduceSidebar] = useState(false);

  return (
    <div className="App">
      <Router>
        <div className="global-container">
          <Sidebar reduceSidebar={reduceSidebar} />
          <main className="main">
            <Header reduceSidebar={reduceSidebar} setReduceSidebar={ setReduceSidebar}/>
            <div className="content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/users" element={<Users />} />
                <Route path="/products" element={<Products />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/messages" element={<Messages />} />
                <Route path="/*" element={<Page404 />} />
              </Routes>
            </div>
          </main>
        </div>
        
      </Router>
    </div>
  );
}

export default App;