import React from 'react';
import './App.css';
import PostPage from './routes/PostPage.jsx';
import SignIn from './routes/SignIn';
import {Routes, Route} from 'react-router-dom'
import NavFooter from './NavFooter'
import SignUp from './routes/SignUp'
function App() {
  
  return (
  <Routes>
  <Route path='/' element={<NavFooter />}>
  <Route index element={<PostPage />}/>
  <Route path='about' element= {<SignIn />}/>
  <Route path='connect' element= {<SignUp />}/>
  </Route>
  </Routes>
  
  
  );
}

export default App;


