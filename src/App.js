import './App.css';
import { useTranslation } from "react-i18next";
import React, { useState } from 'react';
import Image from './components/Image';
import MainPart from './components/MainPart';
import Footer from './components/Footer';
import Modal from './components/Modal';
import EmailForm from './components/EmailForm';
import Header from './components/Header';


function App() {
  const [activeModal, setActiveModal] = useState(false);
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="wrapper">
      <Header changeLanguage={changeLanguage} />
      <Image />
      <MainPart setActiveModal={setActiveModal} />
      <Footer />
      <Modal active={activeModal} setActiveModal={setActiveModal}>
        <EmailForm />
      </Modal>
    </div>
  );
}

export default App;
