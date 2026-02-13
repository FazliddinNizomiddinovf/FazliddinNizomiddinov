import React from 'react'
import { Link } from 'react-router-dom'

export default function Notfound() {
    return (
        <div className='py-5'>
            <div className='container flex mb-20 -z-40 items-center justify-center text-center'>
                <svg width="173" height="205" viewBox="0 0 173 205" fill="#025BC2" xmlns="http://www.w3.org/2000/svg" aria-label="icon" class="inline-flex error-four -mb-4 w-14 sm:w-auto"><path d="M172.218 166V129.496H141.018V0.639984H116.682L0.929688 153.832V166H99.5217V205H141.018V166H172.218ZM99.5217 129.496H59.2737L99.5217 75.52V129.496Z" fill="white"></path></svg>
                <svg width="270" className='transition-all max-ll:w-[90px] duration-300 animate' xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 640 640"><path d="M168.1 531.1L156.9 540.1C153.7 542.6 149.8 544 145.8 544C136 544 128 536 128 526.2L128 256C128 150 214 64 320 64C426 64 512 150 512 256L512 526.2C512 536 504 544 494.2 544C490.2 544 486.3 542.6 483.1 540.1L471.9 531.1C458.5 520.4 439.1 522.1 427.8 535L397.3 570C394 573.8 389.1 576 384 576C378.9 576 374.1 573.8 370.7 570L344.1 539.5C331.4 524.9 308.7 524.9 295.9 539.5L269.3 570C266 573.8 261.1 576 256 576C250.9 576 246.1 573.8 242.7 570L212.2 535C200.9 522.1 181.5 520.4 168.1 531.1zM288 256C288 238.3 273.7 224 256 224C238.3 224 224 238.3 224 256C224 273.7 238.3 288 256 288C273.7 288 288 273.7 288 256zM384 288C401.7 288 416 273.7 416 256C416 238.3 401.7 224 384 224C366.3 224 352 238.3 352 256C352 273.7 366.3 288 384 288z" /></svg>
                <svg width="173" height="205" viewBox="0 0 173 205" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="icon" class="inline-flex error-four -mb-4 w-14 sm:w-auto"><path d="M172.218 166V129.496H141.018V0.639984H116.682L0.929688 153.832V166H99.5217V205H141.018V166H172.218ZM99.5217 129.496H59.2737L99.5217 75.52V129.496Z" fill="white"></path></svg>
            </div>
            <h1 className='text-center items-center font-semibold text-xl py-5 px-36'>  The page you are looking for is not found or has been deleted completely. Please check the URL or return to the homepage.</h1>
            <div className='flex items-center justify-center'>
                <Link to="/"><button  className="mt-6 px-6 py-2.5 flex gap-2 items-center text-[#4770ff] font-semibold rounded-lg border-2 border-[#4770ff] hover:bg-[#4770ff] hover:text-white transition-all duration-300 shadow-[0_0_20px_#4770ff66] group"><svg className="w-7 fill-[#4770ff] transition-all duration-300 group-hover:fill-white rotate-[180deg]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z" /></svg>Orqaga qaytish</button></Link>
            </div>
        </div>
    )
}
