import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/Home';
import AboutPage from './pages/About';
import Header from './components/Header';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
      <ContactForm/>
    </>
  );
}

export default App;
