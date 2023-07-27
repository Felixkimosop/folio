import React from 'react'

function About() {
  return (
    <div name="about" className='w-full h-screen bg-[#0a192f] text-gray-300'>

        <div className='flex flex-col justify-center items-center w-full f-full'>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
            <div className='sm:text-right pb-8 px-4'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
            </div>
            <div>

            </div>
            </div>
            <div className='max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8 '> 
            <div className='sm:text-right text-4xl font-bold'>
                <p> Hi, I'm Felix, nice to meet you, please take a look around.</p>
            </div>
            <div>
                <p>Welcome to my world of code! I'm Felix Kipruto, a dedicated and
            skilled software developer with a burning passion for crafting
            innovative solutions that make a real-world impact. My journey in
            the tech industry began when I graduated from Moringa School, a
            renowned institution that helped me hone my coding skills and laid
            the foundation for my exciting career.</p>
            </div>

            </div>
            
        </div>
    </div>
  )
}

export default About