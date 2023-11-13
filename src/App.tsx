import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import {PostsPage} from './pages/Posts';
import {PostDetailsPage} from './pages/PostDetails';
import {NotFoundPage} from './pages/notFound'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PostsPage />} />
        <Route path="posts/:postId" element={<PostDetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
