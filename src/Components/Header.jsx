import React, { useState, useEffect } from 'react';
import './MyStyle.css';
export default function Header() {

    const texts = ['HTML', 'CSS', 'JavaScript' , 'React']; 
    const [index, setIndex] = useState(0); 
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }, 1500); 
      return () => clearInterval(intervalId);
    }, [index, texts.length]); 

  return (
    <>
    <header className="bg-gray-700 text-white py-8 border-t-2 border-white">
        <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold">Ali Zar</h1>
            <p className="text-lg text-red-400"><span className='text-white'>Front End</span> Web Developer <span className='font-bold text-white'>|</span> Experties in <span className='nav-link cursor-pointer text-white font-bold underline'> {texts[index]}</span>   </p>
        </div>
    </header>
    </>
  )
}


