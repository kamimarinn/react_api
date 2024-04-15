import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import{ BicameraMovie, Bisearchalt2} from 'react-icons/bi';

import './Navbar.css';

const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e)=>{
   e.preventDefault();
  
   if(!search) return

   navigate(`/search?q=${search}`)
   setSearch("");
  };
  
  
  return(
        <nav id='navbar'>
          <h2>
            <link to='/'><BicameraMovie/> Movies Lib</link>
          </h2>
         <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Busque um filme" onchange={(e) => setSearch(e.ta.value)} />
        value={search}
        <button type="submit">
            <Bisearchalt2/>
        </button>
         </form>
    </nav>
    )
}

export default Navbar;