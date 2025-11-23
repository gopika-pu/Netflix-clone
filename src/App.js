
import NavBar from './Components/NavBar/NavBar'
import './App.css'
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'
import Footer from "./Components/Footer/Footer";
import { action,horror,originals,comedy } from './urls'
import Login from "./Components/pop-up/login";
import React, { useState } from "react";
 
function App() {

  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="App">
        <NavBar/>
        <Banner onLoginClick={() => setShowLogin(true)}/>
        <RowPost url={originals} title='Netflix Orginals'/>
        <RowPost url={action} title='Action' isSmall />
        <RowPost url={comedy} title='ComedyMovies'/>
        <RowPost url={horror} title='HorrorMovies'/>
        {showLogin && (
        <Login closePopup={() => setShowLogin(false)} />
      )}
        <Footer/>
    </div>
  );
}
 
export default App;