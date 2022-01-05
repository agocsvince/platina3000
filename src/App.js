import React from "react";
import { Routes, Route } from 'react-router-dom';
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import { ReferenceProvider } from './components/ReferenceContext';
import { MostEpulProvider } from './components/MostEpulContext';
import Main from './components/pages/Main';


const App = props => {
  return (
    <div className="App">
      <Header />
      <ReferenceProvider>
      <MostEpulProvider>
      <Routes>
            <Route exact path='/' element={<Main />}/>
        </Routes>
      </MostEpulProvider>
      </ReferenceProvider>
      <Footer />
    </div>
  );
}

export default App;
