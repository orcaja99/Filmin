
import './navbar.css';
export default function Navbar1() {
    return <nav className="nav">
        <a href="/" className="site-title">Filmin</a>
        
         <ul>
            <li>
                <a href='/populer'>Populer</a>
            </li>
            <li>
                <a href="/toprated">Top Rated</a>
            </li>
         </ul>
    </nav>
}