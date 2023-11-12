import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import mau from '../assets/mau2.png'
import { fadeInSmall } from '../variants'

export const Contact = () => {

  const form = useRef()

  const submit = async (e) => {
    e.preventDefault()

    emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, import.meta.env.VITE_PUBLIC_KEY)
      .then((result) => {
        console.log(result.text)
      }, (error) => {
        console.log(error.text)
      })

    e.target.reset()
  }

  return (
    <div
      id='contact'
      className='flex w-screen h-screen overflow-hidden'
    >
      <motion.div
        variants={fadeInSmall('up', 0.2)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: true, amount: 0.7 }}
        className="hidden sm:flex justify-center items-center w-1/4 border-r border-[#464648]"
      >
        <img src={mau} className='h-full w-full object-cover' />
      </motion.div>
      <motion.div
        variants={fadeInSmall('down', 0.2)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: true, amount: 0.7 }}
        className="flex flex-col justify-center items-center w-screen sm:w-3/4"
      >
        <form ref={form} onSubmit={submit}>
          <div className="flex flex-col justify-start gap-y-2">
            <h1 className='font-title tracking-tighter text-white text-[108px] uppercase my-5 text-start'>{'Let\'s work together.'}</h1>
            <label className='font-body text-3xl text-white' htmlFor='name'>Your name:</label>
            <input required className='h-8 w-full text-white w-[40%]' type='text' id='name' name="user_name" />
            <label className='font-body text-3xl text-white' htmlFor='email'>Your email:</label>
            <input required className='h-8 w-full text-white w-[60%]' type='email' id='email' name="user_email" />
            <label className='font-body text-3xl text-white' htmlFor='message'>Your message:</label>
            <textarea required className='h-8 w-full h-[120px] text-white w-4/5' type='text' id='message' name="message" />
            <div className='flex justify-end items-center mt-5'>
              <motion.button
                onClick={submit}
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                className='font-carbon text-[10px] border-2 p-4 rounded-full w-[90px] h-[90px] bg-[#10100e] text-white hover:bg-white hover:text-[#3b1950] active:bg-[#10100e] active:text-white font-body'
              >Submit</motion.button>
            </div>
          </div>
        </form>
      </motion.div>
    </div>
  )
}
