import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import Navbar from './UIComponents/Navbar';
import Home from './screens/Home';
import Contact from './screens/Contact';
import About from './screens/About';
import Skills from './screens/Skills';
import Blogs from './screens/Blogs';

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/home' element={<Home />} />
				<Route path='/skills' element={<Skills />} />
				<Route path='/blogs' element={<Blogs />} />
				<Route path='/about-me' element={<About />} />
				<Route path='/contact-me' element={<Contact />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
