import React from 'react'
import { Inter } from 'next/font/google'
import style from "./delivery.module.css"

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
  })

export default function Delivery() {
  return <>
    <div className="container w-[80%] mx-auto">
        <p className={`font-bold text-[30px] my-4 ${inter.className} ${style.font}`}>Delivery</p>
        <p className={`font-bold text-[26px] my-4 ${inter.className} ${style.font}`}>Shipments and returns</p>
        <p className={`font-bold text-[26px] my-4 ${inter.className} ${style.font}`}>Your pack shipment</p>
        <div className="rule my-4">
            <p  className={`${inter.className} text-[#797979] ${style.font}`}>Ipsam optio qui ut sit minima eveniet voluptatem molestiae distinctio. Magnam nulla qui doloremque voluptatem eum dolorem cum expedita.Ipsam optio qui ut sit minima eveniet voluptatem molestiae distinctio. Magnam nulla qui doloremque voluptatem eum dolorem cum expedita.Ipsam optio qui ut sit minima eveniet voluptatem molestiae distinctio. Magnam nulla qui doloremque voluptatem eum dolorem cum expedita.</p>
        </div>
        <div className="rule my-4">
            <p  className={`${inter.className} text-[#797979] ${style.font}`}>Ipsam optio qui ut sit minima eveniet voluptatem molestiae distinctio. Magnam nulla qui doloremque voluptatem eum dolorem cum expedita.Ipsam optio qui ut sit minima eveniet voluptatem molestiae distinctio. Magnam nulla qui doloremque voluptatem eum dolorem cum expedita.Ipsam optio qui ut sit minima eveniet voluptatem molestiae distinctio. Magnam nulla qui doloremque voluptatem eum dolorem cum expedita.</p>
        </div>
        <div className="rule my-4">
            <p  className={`${inter.className} text-[#797979] ${style.font}`}>Ipsam optio qui ut sit minima eveniet voluptatem molestiae distinctio. Magnam nulla qui doloremque voluptatem eum dolorem cum expedita.Ipsam optio qui ut sit minima eveniet voluptatem molestiae distinctio. Magnam nulla qui doloremque voluptatem eum dolorem cum expedita.Ipsam optio qui ut sit minima eveniet voluptatem molestiae distinctio. Magnam nulla qui doloremque voluptatem eum dolorem cum expedita.</p>
        </div>
    </div>
  </>
}
