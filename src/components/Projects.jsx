import React from 'react'
import { Tilt } from 'react-tilt'
import Projectitems from './Projectitems'
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.jpg'
import project3 from '../assets/project3.jpg'
import project4 from '../assets/project4.jpg'

const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            30,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          500,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

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
            <div className='grid sm:grid-cols-2 gap-11'>
                <Tilt options={defaultOptions} style={{ height: 250, width: 300 }}>
                    <Projectitems img={project1} title='Project 1'/>
                </Tilt>
                <Tilt options={defaultOptions} style={{ height: 250, width: 300 }}>
                    <Projectitems img={project2} title='Project 2'/>
                </Tilt>
                <Tilt options={defaultOptions} style={{ height: 250, width: 300 }}>
                    <Projectitems img={project3} title='Project 3'/>
                </Tilt>
                <Tilt options={defaultOptions} style={{ height: 250, width: 300 }}>
                    <Projectitems img={project4} title='Project 4'/>
                </Tilt>
            </div>
        </div>
    )
}

export default Projects