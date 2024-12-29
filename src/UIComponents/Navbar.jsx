import '../styles/navbar.scss';
import { NavLink } from 'react-router';

export default function Navbar() {
	return (
		<nav className='navbarContainer'>
			<ul className='navbar'>
				<li className='navItem'>
					<NavLink to='/home' end>
						Home
					</NavLink>
				</li>
				<li className='navItem'>
					<NavLink to='/skills' end>
						Skills
					</NavLink>
				</li>
				<li className='navItem'>
					<NavLink to='/about-me' end>
						About Me
					</NavLink>
				</li>
				<li className='navItem'>
					<NavLink to='/blogs' end>
						Blogs
					</NavLink>
				</li>
				<li className='navItem'>
					<NavLink to='/contact-me' end>
						Contact Me
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}
