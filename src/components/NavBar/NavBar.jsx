// import React from 'react';

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
            
            <ul className="flex md:justify-end">
                
               {

                routes.map((route)=> <li className="m-10" key={route.id}><a className="text-2xl font-medium" href={route.path}>{route.name}</a></li>)

               }
                
                

            </ul>


        </nav>
    
    
    );
};

export default NavBar;