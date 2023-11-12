import { Link, useNavigate } from 'react-router-dom'
import hero from '../assets/Hero_Video.mp4'
import { ShoppingCart } from '@carbon/icons-react'
import { useEffect } from 'react'

export const Landing = () => {

  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      navigate('/about')
    }, 51000)
  })
  return (
    <div className="App justify-center items-center bg-[#10100e] h-screen">
      <div className="flex justify-between fixed w-full py-2 px-10 z-[2] bg-transparent">
        <h1 className='text-2xl font-title2 text-white glow uppercase'>Questival</h1>
        <div className='flex justify-center items-center font-body text-md text-white gap-x-4'>
          <Link className='text-[#aaaaaa] hover:text-white transition-color duration-200' to={'/about'}>questival</Link>
          <Link className='text-[#aaaaaa] hover:text-white transition-color duration-200' to={'/syllabus'}>syllabus</Link>
          <a className='text-[#aaaaaa] hover:text-white transition-color duration-200' href={'https://screenwriters.quest/mau/'}>about me</a>
          <Link className='text-[#aaaaaa] hover:text-white transition-color duration-200' to={'/'}>pricing</Link>
          <a className='text-[#aaaaaa] hover:text-white transition-color duration-200' href={'http://localhost:5173/'}>login</a>
          <Link className='text-[#aaaaaa] hover:text-white transition-color duration-200' to={'/'}>
            <ShoppingCart />
          </Link>
        </div>
      </div>
      <div
        className="flex w-full h-screen overflow-hidden scrollbar-none"
      >
        <video
          src={hero}
          type='video/mp4'
          loop
          controls={false}
          muted
          autoPlay
          className="object-cover w-full min-h-screen box-border overflow-hidden scrollbar-none opacity-60"
        />
      </div>
    </div>
  )
}
