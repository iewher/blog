import React from 'react';
import './style/style.scss';

import { Header } from './components/header/header.jsx';
import { Footer } from './components/footer/footer.jsx';

import { Home } from './pages/home/home';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
