import React from 'react'
import './Testimonial.css'

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


import IM1 from '../../assets/kash.png'
import IM2 from '../../assets/Baby.jpg'
import IM3 from '../../assets/Aaron.png'
import IM4 from '../../assets/Classy.png'
import IM5 from '../../assets/Daynette.png'
import IM6 from '../../assets/Liz.png'
import IM7 from '../../assets/maya.png'
import IM8 from '../../assets/MJ.png'
import IM9 from '../../assets/neek.png'
import IM10 from '../../assets/phills-blend.jpg'
import IM11 from '../../assets/philly.png'
import IM12 from '../../assets/PHILME.png'
import IM13 from '../../assets/sheena.png'
import IM14 from '../../assets/Look.jpg'
import IM15 from '../../assets/DAVE.png'

const data = [
  {
    id: 1,
    avatar: IM1,
    name: 'Kash',
    review: "Folarin has always taken care of his consumers, and his services have always been reliable and timely. I'd want to express my gratitude for designing my company's logo."
  },
  {
    id: 2,
    avatar: IM2,
    name: 'Maya',
    review: "I'm extremely happy with the design you come up with.Thank you very much"
  },
  {
    id: 3,
    avatar: IM3,
    name: 'Aaron',
    review: "Folarin has all that makes me keep coming back,He's wonderful and always working hard. Thank you!! I know how hard it can be sometimes but let me tell you all, Folarin is the best"
  },
  {
    id: 4,
    avatar: IM4,
    name: 'Jessy',
    review: "Folarin is  a graphics designer expert, mine came out gorgeous!.So call Folarin and he will work for you."
  },
  {
    id: 5,
    avatar: IM5,
    name: 'Daynette',
    review: "I like the design you came up with a lot. Many thanks."
  },
  {
    id: 6,
    avatar: IM6,
    name: 'Lizmarie',
    review: "Folarin has everything that keeps me going back; he's fantastic and constantly puts in the effort. Thank you very much!! I understand how difficult it might be at times, but let me assure you that Folarin is the greatest."
  },
  {
    id: 7,
    avatar: IM7,
    name: 'Maya Empower',
    review: "I'm quite pleased with the design you've created. Thank you kindly."
  },
  {
    id: 8,
    avatar: IM8,
    name: 'MJ',
    review: "Folarin has always taken care of his consumers, and his services have always been reliable and timely. I'd want to express my gratitude for designing my company's logo."
  },
  {
    id: 9,
    avatar: IM9,
    name: 'Neek',
    review: "If you choose Folarin, you're 100% right"
  },
  {
    id: 10,
    avatar: IM10,
    name: 'Philly Barbershop',
    review: "Folarin is an outstanding graphic designer, and mine turned out beautifully! So give Folarin a call and he'll get to work for you."
  },
  {
    id: 11,
    avatar: IM11,
    name: 'Philly Blends',
    review: "Folarin is a professional graphic designer, and my project turned out well! So give Folarin a call, and he'll do his best to help you."
  },
  {
    id: 12,
    avatar: IM12,
    name: 'Dj PhilMe',
    review: "Folarin is everything that keeps me going back; he's amazing and constantly works hard. Thank you very much!! I understand how difficult it might be at times, so let me tell you, Folarin is the greatest."
  },
  {
    id: 13,
    avatar: IM13,
    name: 'Sheena',
    review: "This Folarin is very good and convenient.Perfect for quick works.Extremely happy He got me covered always"
  },
  {
    id: 14,
    avatar: IM14,
    name: 'Look',
    review: "Folarin has always put his consumers first, and his services have always been dependable and fast. Thank you so much for creating the logo for my company."
  },
  {
    id: 15,
    avatar: IM15,
    name: 'Dave',
    review: "Folarin is an outstanding graphic designer, and mine turned out beautifully! So give Folarin a call and he'll get to work for you."
  }
]

const Testimonial = () => {
  return (
    <section id='testimonial'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonial__container"
        // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
        >
        {
          data.map(({id, name, review, avatar})=>{
            return(
            <SwiperSlide key={id} className="testimonial">
          <div className="client__image">
            <img src={avatar} alt={name} />
          </div>
          <h5 className='client__name'>{name}</h5>
          <small className='client__review'>{review}</small>
        </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonial