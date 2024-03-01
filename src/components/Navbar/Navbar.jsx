import React from 'react'
import './Navbar.css'
import { useState } from 'react'
import MobileNav from '../MobileNav/MobileNav';

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    }

    return (
        <>
            <MobileNav isOpen={openMenu} toggleMenu={toggleMenu}/>

            <nav className='nav-wrapper'>
                <div className='nav-content'>
                    <h1 className='name'>Anand Rao S G</h1>

                    <ul>

                        <li>
                            <a className='menu-item'>Home</a>
                        </li>

                        <li>
                            <a className='menu-item'>Skills</a>
                        </li>

                        <li>
                            <a className='menu-item'>Projects</a>
                        </li>
                        
                        
                        <li>
                            <a className='menu-item'>Certificates</a>
                        </li>

                        <li>
                            <a className='menu-item'>Work Experiences</a>
                        </li>

                        <li>
                            <a className='menu-item'>Contact Me</a>
                        </li>

                        <button className='contact-btn' onClick={()=>{}}>
                           <a href="https://drive.google.com/file/d/1OOpLsGtEf4et1jPLCOGKkc6ZvqBtIdgJ/view?usp=sharing">Hire Me</a> 
                        </button>

                    </ul>

                    <button class='menu-btn' onClick={toggleMenu}>
                        <span class={"material-symbols-outlined"}>
                            {openMenu ? 'close' : 'menu'}
                        </span>
                    </button>


                </div>
            </nav>
        </>
    )
}

export default Navbar

// 
