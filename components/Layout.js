import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <Link href="/" >   
            <h1>
              <span>LS</span>
              <span>PROJECTS</span>
            </h1>
            <h2>Spread The Joy</h2>      
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