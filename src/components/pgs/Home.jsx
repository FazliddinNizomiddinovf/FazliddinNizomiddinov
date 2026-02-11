import React from 'react'

export default function Home() {
  return (
    <div className='flex z-10 justify-between !items-center py-10'>
      <div className='z-10'>
        <h1 className='font-bold text-2xl mb-5'>Fazliddin Nizomiddinov  👋</h1>
        <h1 className='font-bold text-4xl flex gap-2 mb-5'>Frontend <h1 className='text-[#4770ff]'>Developer</h1></h1>
        <h1 className='font-semibold mb-2'>Html • Css • JavaScript • React • Tailwind</h1>
        <p className='font-medium w-[600px] mb-3'>I am currently a summer programmer, working on small projects, and have 2 months of experience 💻.</p>
        <div className='flex gap-5 items-center'>
          <a href="https://t.me/Fazliddin_iq"><button className='mt-6 px-6 py-3 flex gap-2 items-center bg-[#4770ff] text-white rounded-lg font-semibold hover:bg-[#476fffe9] transition-all duration-300'><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="text-[20px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path><path d="M15 7a2 2 0 0 1 2 2"></path><path d="M15 3a6 6 0 0 1 6 6"></path></svg>Contact me</button></a>
          <button className="mt-6 px-6 py-2.5 flex gap-2 items-center text-[#4770ff] font-semibold rounded-lg border-2 border-[#4770ff] hover:bg-[#4770ff] hover:text-white transition-all duration-300 shadow-[0_0_20px_#4770ff66] "><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-download  w-5 h-5" aria-hidden="true"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>Download CV</button>
        </div>
      </div>
      <div>
        <div className="relative w-[380px] h-[380px] flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-4 border-[#4770ff] shadow-[0_0_40px_#4770ff] animate-pulse">
          </div>
          <img src="/Fazliddin.png" alt="Fazliddin" className="relative z-10 w-[300px] h-[300px] rounded-full object-cover" />
        </div>
      </div>
    </div>
  )
}
