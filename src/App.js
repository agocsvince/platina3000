import React, { Suspense } from "react";
import { Routes, Route } from 'react-router-dom';
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
const Main = React.lazy(() => import('./components/pages/Main'));
const Elado = React.lazy(() => import('./components/pages/Elado'));
const References = React.lazy(() => import('./components/pages/References'));
const MostEpuls = React.lazy(() => import('./components/pages/MostEpuls'));
const ReferenceDetail = React.lazy(() => import('./components/ReferenceDetail'));
const MostEpulDetail = React.lazy(() => import('./components/MostEpulDetail'));


const ReferenceProvider = React.lazy(async () => await import('./components/ReferenceContext'))
const MostEpulProvider = React.lazy(async () => await import('./components/MostEpulContext'))

const App = props => {
  return (
    <div className="App">
      <Header />
      <Suspense fallback={<h1>Betöltés…</h1>}> 
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
