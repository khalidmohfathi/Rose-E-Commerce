import React from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({
  subsets: ["latin"],
})

export default function CategoryCard({ image, name, noOfItems, url }: CategoryCardProps) {
  return (
    <Link href={url} className='bg-primary-subtle rounded-[20px] p-4 flex justify-center items-center cursor-pointer'>
      <div className='flex items-center gap-4'>
        <div className='bg-primary p-5 rounded-full'>
          <Image src={image} width={50} height={50} alt={name} />
        </div>
        <div>
          <p className={`${inter.className} text-main text-lg font-semibold leading-5`}>{name}</p>
          <p className='text-slate-gray leading-7'>{noOfItems} Items</p>
        </div>
      </div>
    </Link>
  )
}
