import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { fadeInSmall } from '../variants'
import about1 from '../assets/video_lesson_2.mp4'
import about2 from '../assets/video_lesson_1.mp4'

export const About = () => {
  return (
    <div className="App justify-center items-center bg-[#10100e]">
      <div className="flex justify-between fixed w-full py-2 px-10 z-[2] border-b border-[#464648] bg-[#10100e]">
        <Link to={'/'}>
          <h1 className='text-2xl font-title2 text-white glow uppercase'>Questival</h1>
        </Link>
        <div className='flex justify-center items-center font-body text-md text-white gap-x-4'>
          <Link to={'/about'}>about</Link>
          <Link to={'/'}>services</Link>
          <Link to={'/'}>pricing</Link>
          <Link to={'/'}>login</Link>
        </div>
      </div>
      <motion.div
        variants={fadeInSmall('up')}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: true, amount: 0.7 }}
        className="flex flex-col w-full h-screen w-full justify-center items-center border-b border-[#464648]">
        <h1 className='text-[120px] font-title text-white text-center uppercase'>
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
        <div className="w-2/3">
          <h1 className='text-[120px] font-title text-white text-center uppercase'>
                        learn. write. share.
          </h1>
        </div>
      </motion.div>
      <motion.div
        variants={fadeInSmall('left')}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: true, amount: 0.7 }}
        className="flex w-full h-screen w-full justify-center items-center border-y border-[#464648]">
        <div className="w-2/3">
          <h1 className='text-[120px] font-title text-white text-center uppercase'>
                        learn. write. share.
          </h1>
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
    </div>
  )
}
