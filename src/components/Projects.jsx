import React from 'react'
import Projectitems from './Projectitems'
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.jpg'
import project3 from '../assets/project3.jpg'
import project4 from '../assets/project4.jpg'
const Projects = () => {
    return (
        <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#00008B]'>Projects</h1>
            <p className='text-center py-8'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae repellat, maxime eum quos 
                consequatur voluptatem non harum nisi repellendus voluptate sequi, 
                aliquam consectetur eaque minima ut. 
                Dolorem maiores facere fuga.
            </p>
            <div className='grid sm:grid-cols-2 gap-12'>
                <Projectitems img={project1} title='Project 1'/>
                <Projectitems img={project2} title='Project 2'/>
                <Projectitems img={project3} title='Project 3'/>
                <Projectitems img={project4} title='Project 4'/>
            </div>
        </div>
    )
}

export default Projects