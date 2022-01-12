import React, { Suspense } from "react";
import { Routes, Route } from 'react-router-dom';
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import Main from './components/pages/Main';
import Elado from './components/pages/Elado';
import References from './components/pages/References';
import MostEpuls from './components/pages/MostEpuls';
import ReferenceDetail from './components/ReferenceDetail';
import MostEpulDetail from './components/MostEpulDetail';
const ReferenceProvider  = React.lazy(() => import('./components/ReferenceContext'));
const MostEpulProvider  = React.lazy(() => import('./components/MostEpulContext'));

const App = props => {
  return (
    <div className="App">
      <Header />
      <Suspense fallback={<div>Betoltes...</div>}>
      <ReferenceProvider>
      <MostEpulProvider>
        <Routes>
            <Route exact path='/' element={<Main />}/>
            <Route path='/referenciak' element={<References />}/>
            <Route path='/referenciak/:project' element={<ReferenceDetail />}/>
            <Route path='/most-epul' element={<MostEpuls />}/>
            <Route path='/most-epul/:project' element={<MostEpulDetail />}/>
            <Route path='/elado' element={<Elado />}/>
        </Routes>
      </MostEpulProvider>
      </ReferenceProvider>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
