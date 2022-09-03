
import React, {useState} from 'react';
import Header from '../Header'
import CardList from '../CardList';
import {Outlet} from "react-router-dom"
function  HomePage() {
    const [searchTerm , setsearchTerm] = useState('')
  
    return (
      
      <div>
        <p>Post Page</p>
        
      </div>
      
    );
}
export default HomePage;