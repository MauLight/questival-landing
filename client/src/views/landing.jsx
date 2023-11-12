import { Link } from 'react-router-dom'
import hero from '../assets/Hero_Video.mp4'

export const Landing = () => {
  return (
    <div className="App justify-center items-center bg-[#10100e] h-screen">
      <div className="flex justify-between fixed w-full py-2 px-10 z-[2] bg-transparent">
        <h1 className='text-2xl font-title2 text-white glow ippercase'>Questival</h1>
        <div className='flex font-body text-xl text-white gap-x-4'>
          <Link to={'/about'}>about</Link>
          <Link to={'/'}>services</Link>
          <Link to={'/'}>pricing</Link>
          <Link to={'/'}>login</Link>
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
