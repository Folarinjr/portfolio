import React from 'react'
import './About.css'
import me1 from '../../assets/me1.jpg'
import {FaAward, FaUsers} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'


const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={me1} alt="me" />
          </div>

        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className="about__card">
              <div className="about__card-icon">
                <FaAward className="about__icon"/>
              </div>
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            <article className="about__card">
              <div className="about__card-icon">
                <FaUsers className="about__icon"/>
              </div>
              <h5>Clients</h5>
              <small>50+ Worldwide</small>
            </article>

            <article className="about__card">
              <div className="about__card-icon">
                <VscFolderLibrary className="about__icon"/>
              </div>
              <h5>Projects</h5>
              <small>50+ Completed</small>
            </article>
          </div>

          <p className='about__text'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Accusantium alias ex totam odio modi! Voluptatibus natus officia voluptatum? 
            Quod eum, repudiandae est recusandae sapiente corporis voluptates reiciendis 
            magnam autem dicta.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>

    </section>
  )
}

export default About