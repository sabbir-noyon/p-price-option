// import React from 'react';
import Links from "../Links/Links";

import {RiMenu2Fill } from 'react-icons/ri';
import {AiOutlineClose} from 'react-icons/ai';

import { useState } from "react";

const NavBar = () => {
    
    
    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "*", name: "NotFound" },
      ];

      const [open,setOpen] = useState(false);
    
    
    return (
        <nav>
            
            
            
            <ul className="flex md:justify-end lg:justify-end flex-col md:flex-row lg:flex-row">
                <div onClick={()=>setOpen(!open)}>
                    {
                      open === true ? <RiMenu2Fill className="text-4xl mt-10 md:hidden ml-12 md:ml-0 lg:ml-0"></RiMenu2Fill> : <AiOutlineClose className="text-4xl mt-10 md:hidden ml-12 md:ml-0 lg:ml-0"></AiOutlineClose>
                    }
                    
                    
                </div>
                
               {

                routes.map((route)=> <Links key={route.id} route={route} ></Links>)

               }
                
                

            </ul>


        </nav>
    
    
    );
};

export default NavBar;