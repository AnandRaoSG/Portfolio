import React from 'react'
import './MobileNav.css'


const MobileNav = ({ isOpen, toggleMenu }) => {
    return (
        <>
            <div className={`mobile-menu ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>

                <div className='mobile-menu-container'>

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

                        <button className='contact-btn' onClick={() => { }}>
                           <a href="https://drive.google.com/file/d/1OOpLsGtEf4et1jPLCOGKkc6ZvqBtIdgJ/view?usp=sharing">Hire Me</a> 
                        </button>

                    </ul>

                </div>

            </div>
        </>
    )
}

export default MobileNav