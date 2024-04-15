import { outlet } from "react-router-dom";
import "./App.css";
import Navbar from './components/navbar';

function App() {
  

  return (
    
      <div className="App">

        {/* <nav id='navbar'>
          <h2>
            <link to='/'>Movies Lib</link>
          </h2>
          <link to='/movie/1'>Movies Lib</link>
          <link to='/search'>Search</link>
        </nav> */}
        {/* <h2>Movies Lib</h2> */}
        <Navbar />
        <Outlet />
        </div>
        
    
  )
}

export default App;
