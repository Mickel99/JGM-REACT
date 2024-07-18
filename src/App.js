import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import FotoalbumScreen from './screens/FotoalbumScreen';
import DokumentScreen from './screens/DokumentScreen';
import KalenderScreen from './screens/KalenderScreen';
import ChatScreen from './screens/ChatScreen';
import VistelsesummeringScreen from './screens/VistelsesummeringScreen';
import HalsaScreen from './screens/HalsaScreen';
import KontaktbokScreen from './screens/KontaktbokScreen';
import RaknaScreen from './screens/RaknaScreen';
import './styles.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/fotoalbum" element={<FotoalbumScreen />} />
        <Route path="/dokument" element={<DokumentScreen />} />
        <Route path="/kalender" element={<KalenderScreen />} />
        <Route path="/chat" element={<ChatScreen />} />
        <Route path="/vistelsesummering" element={<VistelsesummeringScreen />} />
        <Route path="/halsa" element={<HalsaScreen />} />
        <Route path="/kontaktbok" element={<KontaktbokScreen />} />
        <Route path="/rakna" element={<RaknaScreen />} />
      </Routes>
    </Router>
  );
};

export default App;
