
import NavBar from './Components/NavBar/NavBar'
import './App.css'
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'
import Footer from "./Components/Footer/Footer";
import { action,horror,originals,comedy } from './urls'
 
function App() {
  return (
    <div className="App">
        <NavBar/>
        <Banner/>
        <RowPost url={originals} title='Netflix Orginals'/>
        <RowPost url={action} title='Action' isSmall />
        <RowPost url={comedy} title='ComedyMovies'/>
        <RowPost url={horror} title='HorrorMovies'/>
        <Footer/>
    </div>
  );
}
 
export default App;