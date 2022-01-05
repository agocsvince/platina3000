import React from "react";
import { Routes, Route } from 'react-router-dom';
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import { ReferenceProvider } from './components/ReferenceContext';
import { MostEpulProvider } from './components/MostEpulContext';
import Main from './components/pages/Main';
import Elado from './components/pages/Elado';
import References from './components/pages/References';
import MostEpuls from './components/pages/MostEpuls';


const App = props => {
  return (
    <div className="App">
      <Header />
      <ReferenceProvider>
      <MostEpulProvider>
      <Routes>
            <Route exact path='/' element={<Main />}/>
            <Route path='/referenciak' element={<References />}/>
            <Route path='/most-epul' element={<MostEpuls />}/>
            <Route path='/elado' element={<Elado />}/>
        </Routes>
      </MostEpulProvider>
      </ReferenceProvider>
      <Footer />
    </div>
  );
}

export default App;
