import React, { useState } from 'react'
import { Accordion, AccordionItem } from '@nextui-org/react'
import { syllabusPage1 } from '../utils/syllabus'
import { DotMark, ArrowLeft, ArrowRight } from '@carbon/icons-react'
import { motion } from 'framer-motion'
import { fadeInSmall } from '../variants'
import { Link } from 'react-router-dom'
import { ShoppingCart } from '@carbon/icons-react'

export const Syllabus = () => {

  const [currentPage, setCurrentPage] = useState(syllabusPage1.filter(elem => parseInt(elem.pos) < 8))
  const [title, setTitle] = useState('Month I')

  const firstPage = syllabusPage1.filter(elem => parseInt(elem.pos) < 8)
  const secondPage = syllabusPage1.filter(elem => parseInt(elem.pos) > 7 && parseInt(elem.pos) < 15)
  const thirdPage = syllabusPage1.filter(elem => parseInt(elem.pos) > 14)

  const handlePageUp = () => {
    if (currentPage[currentPage.length - 1].pos === '7') {
      setCurrentPage(secondPage)
      setTitle('Month II')
    }
    else if (currentPage[currentPage.length - 1].pos === '14') {
      setCurrentPage(thirdPage)
      setTitle('Month III')
    }
    console.log(currentPage)
  }

  const handlePageDown = () => {
    if (currentPage[currentPage.length - 1].pos === '14') {
      setCurrentPage(firstPage)
      setTitle('Month I')
    }
    else if (currentPage[currentPage.length - 1].pos === '21') {
      setCurrentPage(secondPage)
      setTitle('Month II')
    }
  }

  return (
    <div className="w-screen flex flex-col h-screen bg-[#10100e] font-body overflow-y-hidden">
      <div className="flex justify-between fixed w-full py-2 px-10 z-[2] border-b border-[#464648] bg-[#10100e] scrollbar-none">
        <Link to={'/'}>
          <h1 className='text-2xl font-title2 text-white glow uppercase'>Questival</h1>
        </Link>
        <div className='flex justify-center items-center text-md gap-x-4'>
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
        variants={fadeInSmall('left', 0.2)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.7 }}>
        <h1 className='text-8xl font-title2 uppercase text-white mb-10 mt-10 w-full pt-12 px-10 text-right'>{title}</h1>
        <div className="flex justify-center h-[50vh] items-start overflow-y-scroll">
          <div className="w-full">
            {
              currentPage.map(lesson => (
                <Accordion key={lesson.id} variant="splitted">
                  <AccordionItem key={lesson.pos} aria-label="Accordion 1" className='font-body text-4xl text-[#aaaaaa] hover:text-white transition-color duration-200 border-b border-[#464648]' title={lesson.title}>
                    <ul className='text-2xl mb-10'>
                      {
                        lesson.elements.map(item => (
                          <div key={item} className='flex items-center gap-x-2 px-5'>
                            <DotMark size={10} />
                            <li>{item}</li>
                          </div>
                        ))
                      }
                    </ul>
                  </AccordionItem>
                </Accordion>
              ))
            }
          </div>
        </div>
        <div className="flex justify-end pr-10 items-center w-full pl-20 gap-x-5 mt-10 pt-10 border-t border-[#464648]">
          <button onClick={handlePageDown}>
            <ArrowLeft size={32} className='flex text-black w-[150px] h-auto hover:text-[#aaaaaa] active:scale-105 transition-all duration-200' />
          </button>
          <button onClick={handlePageUp} >
            <ArrowRight size={32} className='flex text-black w-[150px] h-auto hover:text-[#aaaaaa] active:scale-105 transition-all duration-200' />
          </button>
        </div>
      </motion.div>
    </div>
  )
}
