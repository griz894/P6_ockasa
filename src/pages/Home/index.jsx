import React from 'react';
import './App.scss';
import Banner from '../../components/banner';
import bannerImage from '../../assets/homebanner.png'; 
import CardList from '../../components/cardList';

function App() {
  return (
    <div className="App">
      <Banner imageUrl={bannerImage} altText="Kasa Home Banner" showTitle={true}/>
      <div className='card-wrapper'>
      <CardList />
      </div>
    </div>
  );
}

export default App;
