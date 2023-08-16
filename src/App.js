// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter,Link } from 'react-router-dom';
import ListPage from './pages/ListPage';
import DetailsPage from './pages/DetailsPage';

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListPage />} />
          <Route path="/details/:id" element={<DetailsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
