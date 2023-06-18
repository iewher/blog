import React from 'react';
import './style/style.scss';

import { Header } from './components/header/header.jsx';
import { Footer } from './components/footer/footer.jsx';

import { Main } from './pages/main/main';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
