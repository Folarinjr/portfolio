import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio1.webp'
import IMG2 from '../../assets/portfolio2.webp'
import IMG3 from '../../assets/portfolio3.webp'
import IMG4 from '../../assets/portfolio4.webp'
import IMG5 from '../../assets/portfolio5.webp'
import IMG6 from '../../assets/portfolio6.webp'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Time Tracker',
    github: 'https://github.com/Folarinjr/time-tracker.git',
    demo: 'https://time-tracker-jeremy.netlify.app'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Advice App',
    github: 'https://github.com/Folarinjr/advice-app.git',
    demo: 'https://app-advice-gen.netlify.app'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Github Finder',
    github: 'https://github.com/Folarinjr/github-finder.git',
    demo: 'https://githubfinder87667.netlify.app'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Nexter Project',
    github: 'https://github.com/Folarinjr/nexter.git',
    demo: 'https://nexter-hotel-project.netlify.app'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Natours Project',
    github: 'https://github.com/Folarinjr/Natours.git',
    demo: 'https://natour-project-app.netlify.app'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Food Mataz',
    github: 'https://github.com/Folarinjr/food-mataz.git',
    demo: 'https://food-mataz.netlify.app'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, title, image, github, demo})=>{
            return (
              <article key={id} className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
            <a href={github} className='btn' target='_blank'>Github</a>
            <a href={demo} className="btn btn-primary" target='_blank'>Live Demo</a>
          </div>
        </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio