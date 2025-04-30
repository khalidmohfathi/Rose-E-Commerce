import React from 'react'
import CategoryCard from './CategoryCard'

export default function CategoryCardWrapper() {

  const categories: CategoryCardProps[] = [
    {
      image: '/assets/images/gift-box.svg',
      name: "Gift Box",
      url: '/',
      noOfItems: 30
    },
    {
      image: '/assets/images/home.svg',
      name: "Home & Living Gifts",
      url: '/',
      noOfItems: 25
    },
    {
      image: '/assets/images/jewelry.svg',
      name: "Jewelry & Accessories",
      url: '/',
      noOfItems: 15
    },
    {
      image: '/assets/images/garment.svg',
      name: "Garment Care",
      url: '/',
      noOfItems: 5
    },
    {
      image: '/assets/images/office.svg',
      name: "Office & Stationary",
      url: '/',
      noOfItems: 30
    },
  ]

  return (
    <div className='grid grid-cols-5 gap-8'>
      {
        categories.map((item, i) => {
          return (
            <CategoryCard key={i} image={item.image} name={item.name} noOfItems={item.noOfItems} url={item.url} />
          )
        })
      }
    </div>
  )
}
