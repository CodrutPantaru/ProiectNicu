import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Header from './components/Header';
import Description from './components/Description';
import CardList from './components/Cards/CardList';
import Services from './components/Services/Services'
import TestimonialList from './components/Testimonials/TestimonialList'
import Footer from './components/Footer/Footer';

function App() {
  const [availableSections, setAvailableSections] = useState({});
  const [appData, setAppData] = useState({});
  
  useEffect(() => {
    axios.get('./assets/configs/app-config.json').then((dt) => {
      setAvailableSections(dt.data.availableSections);
      setAppData(dt.data);
    })
  }, [])
  return (
    <div>
      <div className="App">
        <Header id="header" title={appData.title} author={appData.author} email={appData.email}>

        </Header>
        {availableSections.projects ? <Description description={appData.description}></Description> : null}
        {availableSections.projects ? <CardList></CardList> : null}
        {availableSections.services ? <Services></Services> : null}
        {availableSections.testimonials ? <TestimonialList></TestimonialList> : null}
      </div>
      <Footer address={appData.address} email={appData.email}></Footer>
    </div>
  );
}

export default App;
