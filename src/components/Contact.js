import React from 'react'

function Contact() {
  return (
    <div name="contact" className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='post' action='https://getform.io/f/72aea117-b99e-4607-847d-b738d92a477d' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-b'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-700' >Contact</p>
                <p className='text-gray-300 p-4'>Submit the form below</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='name' name="name"/>
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='email' name="email"/>
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10"></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto text-center'>Lets work together</button>


        </form>
    </div>
  )
}

export default Contact