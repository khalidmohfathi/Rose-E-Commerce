import React from 'react'
import { Inter } from 'next/font/google'
import style from "./faqs.module.css"

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
  })

export default function FAQS() {
  return <>
    <div className="container w-[80%] mx-auto">
        <h1 className='font-bold text-[30px] my-4'>Terms and conditions of use</h1>
        <div className="rule my-4">
            <h2 className="text-[26px] my-4">Rule 1</h2>
            <p  className={`${inter.className} text-[#797979] ${style.font}`}>Ipsam optio qui ut sit minima eveniet voluptatem molestiae distinctio. Magnam nulla qui doloremque voluptatem eum dolorem cum expedita.Ipsam optio qui ut sit minima eveniet voluptatem molestiae distinctio. Magnam nulla qui doloremque voluptatem eum dolorem cum expedita.Ipsam optio qui ut sit minima eveniet voluptatem molestiae distinctio. Magnam nulla qui doloremque voluptatem eum dolorem cum expedita.</p>
        </div>
        <div className="rule my-4">
            <h2 className="text-[26px] my-4">Rule 2</h2>
            <p  className={`${inter.className} text-[#797979] ${style.font}`}>Ipsam optio qui ut sit minima eveniet voluptatem molestiae distinctio. Magnam nulla qui doloremque voluptatem eum dolorem cum expedita.Ipsam optio qui ut sit minima eveniet voluptatem molestiae distinctio. Magnam nulla qui doloremque voluptatem eum dolorem cum expedita.Ipsam optio qui ut sit minima eveniet voluptatem molestiae distinctio. Magnam nulla qui doloremque voluptatem eum dolorem cum expedita.</p>
        </div>
        <div className="rule my-4">
            <h2 className="text-[26px] my-4">Rule 3</h2>
            <p  className={`${inter.className} text-[#797979] ${style.font}`}>Ipsam optio qui ut sit minima eveniet voluptatem molestiae distinctio. Magnam nulla qui doloremque voluptatem eum dolorem cum expedita.Ipsam optio qui ut sit minima eveniet voluptatem molestiae distinctio. Magnam nulla qui doloremque voluptatem eum dolorem cum expedita.Ipsam optio qui ut sit minima eveniet voluptatem molestiae distinctio. Magnam nulla qui doloremque voluptatem eum dolorem cum expedita.</p>
        </div>
    </div>
  </>
}
