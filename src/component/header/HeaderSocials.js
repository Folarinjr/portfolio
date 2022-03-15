import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer"><BsLinkedin style={{color:"var(--color-primary)"}}/></a>
        <a href="https://github.com/Folarinjr" target="_blank" rel="noreferrer"><BsGithub style={{color:"var(--color-primary)"}}/></a>
        <a href="https://instagram.com/graphicz_gallery" target="_blank" rel="noreferrer"><BsInstagram style={{color:"#bc2a8d"}}/></a>
    </div>
  )
}

export default HeaderSocials