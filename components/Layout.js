import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    
    
    <div className="layout">
      <Navbar />
      
      <header>  
        
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