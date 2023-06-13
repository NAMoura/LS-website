import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import '@fortawesome/fontawesome-free/css/all.css';




function Navbar() {
const [click, setClick] = useState(false);
const [button, setButton] = useState(true);

const handleClick = () => setClick(!click);
const closeMobileMenu = () => setClick(false);

useEffect(() => {
    const showButton = () => {
      if (typeof window !== 'undefined' && window.innerWidth <= 960) {
        setButton(false);
      } else {
        setButton(true);
      }
    };

    showButton();

    const handleResize = () => {
      showButton();
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);


  return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link href="/" className="navbar-logo">
                    LS
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link href="/projects/" className='nav-links' onClick={closeMobileMenu}>PROJECTS</Link>
                    </li>
                    <li className='nav-item'>
                        <Link href="/about/" className='nav-links' onClick={closeMobileMenu}>ABOUT</Link>
                    </li>
                    <li className='nav-item last-item'>
                        <Link href="/contacts/" className='nav-links' onClick={closeMobileMenu}>CONTACTS</Link>
                    </li>
                </ul>
            </div>
        </nav>

    </>
  )
}

export default Navbar