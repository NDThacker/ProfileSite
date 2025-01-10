import '../styles/navbar.scss';
import { NavLink } from 'react-router';
import { useLocation } from 'react-router-dom';

export default function Navbar() {
	const location = useLocation();
	
	return (
		<nav className='navbarContainer'>
			<ul className='navbar'>
				<li className={`navItem ${location.pathname === '/home' || location.pathname === '/' ? 'activeTab' : ''}`}>
					<NavLink to='/home' end>
						Home
					</NavLink>
				</li>
				<li className={`navItem ${location.pathname === '/skills' ? 'activeTab' : ''}`}>
					<NavLink to='/skills' end>
						Skills
					</NavLink>
				</li>
				<li className={`navItem ${location.pathname === '/blogs' ? 'activeTab' : ''}`}>
					<NavLink to='/blogs' end>
						Blogs
					</NavLink>
				</li>
				<li className={`navItem ${location.pathname === '/about-me' ? 'activeTab' : ''}`}>
					<NavLink to='/about-me' end>
						About Me
					</NavLink>
				</li>
				<li className={`navItem ${location.pathname === '/contact-me' ? 'activeTab' : ''}`}>
					<NavLink to='/contact-me' end>
						Contact Me
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}
