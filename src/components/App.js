import React from 'react';

import Header from './ui/header';
import Main from './ui/main/main';
import Footer from './ui/footer';

import '../assets/styles/general.styles.scss';

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