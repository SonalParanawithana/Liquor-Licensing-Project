import { Link } from 'react-router-dom';
import logo from '../Images/exciselogo.jpeg';   

const Navbar = () => {
    return ( 

        <nav className='navbar'>
            <img src={logo} className="navbarlogo" width={400} height={90} alt="Liquor" />
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/apply">Apply</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
            </ul>
        </nav>
     );
}
 
export default Navbar;