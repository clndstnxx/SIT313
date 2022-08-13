import React from 'react';
import './App.css';
import Header from './Header'
import CardList from './CardList'
import Image from './Image';
import Footer from './Footer';
import Button from './button';
import Subscribe from './Subscribe';
function App() {
  return (
    <div>
    <Header 
    />
    <Image/>
   <CardList />
   <Button text = "See all articles"/>
   <CardList />
   <Button text = "See all tutorials"/>
   <Subscribe/>
   <Footer />

    </div>
  );
}

export default App;
