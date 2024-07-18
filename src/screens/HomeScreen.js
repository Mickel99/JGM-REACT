import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Profile from '../components/Profile';
import '../styles.css';

const HomeScreen = () => (
  <div className="container">
    <Header />
    <Profile />
    <div className="buttonsContainer">
      <div className="buttonRow">
        <Link to="/fotoalbum" className="button">
          <i className="fa fa-photo" />  
          <span className="buttonText">Fotoalbum</span>
        </Link>
        <Link to="/dokument" className="button">
          <i className="fa fa-file" />  
          <span className="buttonText">Dokument</span>
        </Link>
      </div>
      <div className="buttonRow">
        <Link to="/kalender" className="button">
          <i className="fa fa-calendar" />  
          <span className="buttonText">Kalender</span>
        </Link>
        <Link to="/chat" className="button">
          <i className="fa fa-comments" />  
          <span className="buttonText">Chat</span>
        </Link>
      </div>
      <div className="buttonRow">
        <Link to="/vistelsesummering" className="button">
          <i className="fa fa-list" />  
          <span className="buttonText">Vistelsesummering</span>
        </Link>
        <Link to="/halsa" className="button">
          <i className="fa fa-heartbeat" />  
          <span className="buttonText">Hälsa</span>
        </Link>
      </div>
    </div>
  </div>
);

export default HomeScreen;
