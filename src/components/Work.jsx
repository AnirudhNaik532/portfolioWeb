import React from 'react'
import WorkItems from './WorkItems'
const data = [
    {
        year: '2022',
        title: 'Java Developer',
        duration: '1 year',
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        year: '2021',
        title: 'Java Developer',
        duration: '1 year',
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },    {
        year: '2023',
        title: 'Java Developer',
        duration: '1 year',
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },    {
        year: '2020',
        title: 'Java Developer',
        duration: '1 year',
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    }
]
const Work = () => {
  return (
    <div id='work' className='max-w-[1024px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#00008B]'>Work</h1>
        {data.map((item, idx) => (
            <WorkItems key={idx} year={item.year} title={item.title} duration={item.duration} details={item.details}/>
        ))}
    </div>
  )
}

export default Work