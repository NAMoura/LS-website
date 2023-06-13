import Navbar from './Navbar';
import Footer from './Footer';
import HeroSection from './HeroSection';


export default function Layout({ children }) {
  return (
    
    
    <div className="layout">
      <Navbar />
      
      <header>  
      
      </header>

      <div className="page-content">
        {children}
      </div>

      <Footer />
    </div>
  );
}