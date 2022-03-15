import React from 'react'
import './Header.css'
import Cta from './Cta'
import me2 from '../../assets/me2.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Junior Folarin</h1>
        <h5 className="text-light">
          Frontend Developer
        </h5>
        <Cta />

        <div className="me">
          <img src={me2} alt="my image" className='me2' />
        </div>

        <a href="#contact" className="scroll__down">Scroll Down &rarr;</a>

        <HeaderSocials />

      </div>
    </header>
  )
}

export default Header