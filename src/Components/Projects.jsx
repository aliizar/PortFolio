import './MyStyle.css'
import React from 'react';
import { Link } from 'react-router-dom';

export default function Projects() {
  return (
    <>
      <section id="projects" className="py-6 text-white border-t-2 border-white bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-white">Proj<span className='text-red-400'>ects</span></h2>
          <div className="flex flex-wrap -mx-4">
            <ProjectCard title="Watch Daily News" description="IT Contain All The Top Headlines All Around The World Based On the categories That i Made..." projectId="project1" />
            <ProjectCard title="Food Panda UI" description="This Is Basic UI Clone of FoodPanda Page Made With TailWind CSS Material UI and Chakra UI..." projectId="project2" />
            <ProjectCard title="My ProtFoilo" description=" Made Other projects  But These 2 I Provide Are enough to proof My Strength" projectId="project3" />
          </div>
        </div>
      </section>
    </>
  );
}

function ProjectCard({ title, description, projectId }) {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 ">
      <div className=" p-6 rounded-lg shadow bg-gray-700 border-2 border-white">
        <h3 className="text-xl font-bold mb-2 text-green-500">{title}</h3>
        <p className="text-yellow-400">{description}</p>
        <button className="mt-4">
          <Link to={`/projects/${projectId}`} className="  border-white border-y-2 px-5 py-1  rounded text-white hover:border-x-2 hover:border-y-0 hover:text-red-400">View Project</Link>
        </button>
      </div>
    </div>
  );
}
// mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded-full