import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { fadeInSmall } from '../variants'
import about1 from '../assets/video_lesson_2.mp4'
import about2 from '../assets/video_lesson_1.mp4'
import { Contact } from '../components/Contact'
import { ShoppingCart } from '@carbon/icons-react'

export const About = () => {
  return (
    <div className="App justify-center items-center bg-[#10100e] overflow-hidden scrollbar-none">
      <div className="flex justify-between fixed w-full py-2 px-10 z-[2] border-b border-[#464648] bg-[#10100e]">
        <Link to={'/'}>
          <h1 className='text-2xl font-title2 text-white glow uppercase'>Questival</h1>
        </Link>
        <div className='flex justify-center items-center font-body text-md gap-x-4'>
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
      <motion.div
        variants={fadeInSmall('up')}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: true, amount: 0.7 }}
        className="flex flex-col w-full h-screen w-full justify-center items-center border-b border-[#464648] scrollbar-none">
        <h1 className='text-[134px] font-title text-white text-center uppercase'>
          learn. write. share.
        </h1>
        <button className='font-body text-2xl text-[#464648] px-7 py-4 border border-[#464648] hover:bg-[#ff0d00] hover:border-[#ff0d00] hover:text-white transition-color duration-200'>Start Now!</button>
      </motion.div>
      <motion.div
        variants={fadeInSmall('left')}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: true, amount: 0.7 }}
        className="flex w-full h-screen w-full justify-center items-center">
        <div className="w-1/3 border-r border-[#464648]">
          <video
            src={about1}
            type='video/mp4'
            loop
            controls={false}
            muted
            autoPlay
            className="object-cover object-right w-full min-h-screen box-border overflow-hidden scrollbar-none opacity-60"
          />
        </div>
        <div className="w-2/3 flex flex-col gap-y-5 px-10">
          <h1 className='text-[108px] font-title text-white text-center uppercase'>
            learn. write. share.
          </h1>
          <p className='font-body text-5xl text-[#464648]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </motion.div>
      <motion.div
        variants={fadeInSmall('left')}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: true, amount: 0.7 }}
        className="flex w-full h-screen w-full justify-center items-center border-t border-[#464648]">
        <div className="w-2/3 flex flex-col gap-y-5 px-10">
          <h1 className='text-[108px] font-title text-white text-center uppercase'>
            learn. write. share.
          </h1>
          <p className='font-body text-5xl text-[#464648]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="w-1/3 border-l border-[#464648] left-[20%]">
          <video
            src={about2}
            type='video/mp4'
            loop
            controls={false}
            muted
            autoPlay
            className="object-cover object-center w-full min-h-screen box-border overflow-hidden scrollbar-none opacity-60"
          />
        </div>
      </motion.div>
      <motion.div
        variants={fadeInSmall('down')}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: true, amount: 0.7 }}
        className="flex w-full h-screen w-full justify-center items-center border-y border-[#464648]">
        <Contact />
      </motion.div>
    </div>
  )
}
