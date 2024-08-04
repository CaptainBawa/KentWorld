import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import BusinessDetails from './components/BusinessDetails';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/business/:contact" element={<BusinessDetails />} />
    </Routes>
  </BrowserRouter>
);

export default App;
