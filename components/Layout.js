import Link from 'next/link';
import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    
    
    <div className="layout">
      <Navbar />
      
      <header>  
        <Link href="/" >   
            <h1>
              <span>LS</span>
              <span>Architecture</span>
            </h1>
            <h2>solutions made for you</h2>      
        </Link>
      </header>

      <div className="page-content">
        {children}
      </div>

      <footer>
        <p>Copyright 2021 Luis Santos</p>
      </footer>
    </div>
  );
}