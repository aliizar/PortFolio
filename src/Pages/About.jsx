import React from 'react';

import pic2 from './AssestsPages/IMG_20231211_204124_522.jpg'

export default function About() {
  document.body.style.backgroundColor = 'hsl(0, 0, 20)'
  return (
    <>
      <section id="about" className="py-16  bg-gray-700 border-t-2 border-white">
        <div className="container mx-auto flex items-center">
          <div className="w-1/2">
            <img
              src={pic2} 
              alt="Profile"
              className="rounded-full h-64 w-64 object-cover"
            />
          </div> 
          <div className="w-1/2 h-80 pl-8 bg-gray-600 rounded border-2 border-white">
            <h2 className="text-3xl text-green-500 font-bold mb-4 mt-6">About Me</h2>
            <p className="mb-6 text-white">
              Hi, I'm Ali zar, a passionate web developer with expertise in HTML5, CSS3, and JavaScript.
              I love creating responsive and user-friendly web applications using React.
            </p>
            <h3 className="text-xl font-bold mb-2 text-red-400">Interests</h3>
            <ul className="list-disc pl-6">
              <li className='text-blue-500'>Frontend Development</li>
              <li className='text-green-400'>UI/UX Design</li>
              <li className='text-yellow-400'>Problem Solving</li>
              <li className='text-purple-500'>Continuous Learning</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}



