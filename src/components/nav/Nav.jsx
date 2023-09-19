import { useState } from "react";
import Link from "../link/Link";
import { AiOutlineMenuUnfold, AiOutlineCloseCircle } from 'react-icons/ai';

const Nav = () => {

    const [open , setopen] = useState(false);

    const routes = [
        { path: '/', name: 'Home', id: 'home' },
        { path: '/about', name: 'About', id: 'about' },
        { path: '/services', name: 'Services', id: 'services' },
        { path: '/portfolio', name: 'Portfolio', id: 'portfolio' },
        { path: '/contact', name: 'Contact', id: 'contact' }
      ];
      
    return (
        <div>
            <div onClick={ () => setopen(!open)} className="text-2xl md:hidden">
                {
                    open === true ? <AiOutlineCloseCircle></AiOutlineCloseCircle>
                     : <AiOutlineMenuUnfold></AiOutlineMenuUnfold>
                }
            </div>
           <ul className={`md:flex duration-1000 px-6 py-8
           ${ open ? 'top-8' : '-top-64'}
            absolute md:static bg-blue-400`}>
                {
                  routes.map(route => <Link key={route.id} route={route}></Link>)
                } 
           </ul>
        </div>
    );
};

export default Nav;