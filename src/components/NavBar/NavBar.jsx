// import React from 'react';
import Links from "../Links/Links";

const NavBar = () => {
    
    
    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "*", name: "NotFound" },
      ];
    
    
    return (
        <nav>
            
            <ul className="flex md:justify-end flex-col md:flex-row">
                
               {

                routes.map((route)=> <Links key={route.id} route={route} ></Links>)

               }
                
                

            </ul>


        </nav>
    
    
    );
};

export default NavBar;