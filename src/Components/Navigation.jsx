import React from 'react';
import { Link } from 'react-router-dom';
import './MyStyle.css';
import pic3 from '../Pages/AssestsPages/IMG_20231211_204124_522.jpg'
const Navigation = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <div className="flex items-center">
        <div className="text-3xl font-bold">
          Port<span className='text-red-500'>Folio</span>
        </div>
        <img src={pic3} alt="Profile" className="ml-2 h-10 w-10 rounded-full" />
      </div>
      <ul className="flex space-x-8">
        <li>
          <Link to="/" className="nav-link">
            <span className="text-xl">H</span><span className='text-red-500'>ome</span>
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-link">
            <span className="text-xl">A</span><span className='text-red-500'>bout</span>
          </Link>
        </li>
        <li>
          <Link to="/contact" className="nav-link">
            <span className="text-xl">C</span><span className='text-red-500'>ontact</span>
          </Link>
        </li>
        
        <li>
          <Link to="/skills" className="nav-link">
            <span className="text-xl">S</span><span className='text-red-500'>kills</span>
          </Link>
        </li>
        <li>
          <Link to="/contact" className="nav-link text-3xl font-bold">
            Ali<span className='text-red-500'>Zar</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;









