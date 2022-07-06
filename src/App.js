import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import React, { useState, useEffect } from 'react';
import Modal from './components/Modal';
import MainContent from './components/MainContent';



function App() {
  const [showModal, setShowModal] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setShowModal(true)
        }, 2400)
        
    },[])

    const showModalHandler = ()=> {
        setShowModal(false)
    }
  return (
    <div>
      {showModal && <Modal showModalHandler={showModalHandler}/>}
      <Header />
      <MainContent />
     
      <Footer/>
    </div>
  );
}

export default App;
