import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Home } from './pages/Home';
import { Timeline } from './pages/Timeline';
import { KeyFigures } from './pages/KeyFigures';
import { Battles } from './pages/Battles';
import { Treaty } from './pages/Treaty';
import { Legacy } from './pages/Legacy';
import { Sources } from './pages/Sources';
import { Quiz } from './pages/Quiz';
import { Footer } from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-stone-50 to-stone-100">
        <Navigation />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/key-figures" element={<KeyFigures />} />
            <Route path="/battles" element={<Battles />} />
            <Route path="/treaty" element={<Treaty />} />
            <Route path="/legacy" element={<Legacy />} />
            <Route path="/sources" element={<Sources />} />
            <Route path="/quiz" element={<Quiz />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;