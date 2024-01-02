import React from 'react';
export default function Skills() {
  return (
    <>
      <section className="py-4 border-t-2 border-b-2 border-white  bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-4xl text-white font-bold mb-4 ">S<span className='text-red-400'>kils</span></h2>
          <div className="flex flex-wrap">
            <SkillBar skill="HTML5" level={90} color="bg-blue-500" />
            <SkillBar skill="CSS3" level={85} color="bg-green-500" />
            <SkillBar skill="JavaScript" level={80} color="bg-yellow-500" />
            <SkillBar skill="React" level={75} color="bg-purple-500" />
          </div>
        </div>
      </section>
    </>
  );
}

function SkillBar({ skill, level, color }) {
  return (
    <div className="w-full mb-4">
      <p className="mb-2 text-white">{skill}</p>
      <div className="relative pt-1">
        <div className={`flex mb-2 items-center justify-between ${color}`}>
          <div className="flex-1 flex items-center">
            <div className={`text-white text-xs font-semibold inline-block ${color} ${level === 100 ? 'rounded-full' : 'rounded-l-full'} px-4`}>
              {level}%
            </div>
          </div>
        </div>
        <div className="flex mb-2 items-center justify-between">
          <div className={`flex-1 ${color} ${level === 100 ? 'rounded-full' : 'rounded-l-full'} h-2`}></div>
        </div>
      </div>
    </div>
  );
}


