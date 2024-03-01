import React, { useRef } from 'react'
import './Projects.css'
import { PROJECTS } from '../../utiles/data'
import ProjectsCard from './ProjectsCard/ProjectsCard'
import Slider from 'react-slick'

const Projects = () => {

  const sliderRef = useRef()

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slideToShow: 4,
    slideToScroll: 1,
    arrows: false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slideToShow: 2,
          slideToScroll: 1,
        }
      }
    ]
  }


  const slideRight = () => {
    sliderRef.current.slickNext()
  }

  const slideLeft = () => {
    sliderRef.current.slickPrev()
  }

  return (
    <section className='projects-container'>
      <h5>Projects</h5>

      <div className='projects-content'>

        <div className='arrow-right' onClick={slideRight}>
          <span class='material-symbols-outlined'>chevron_right</span>
        </div>

        <div className='arrow-left' onClick={slideLeft}>
          <span class='material-symbols-outlined'>chevron_left</span>
        </div>

        <Slider ref={sliderRef} {...settings}>
          {PROJECTS.map((item) => (
            <ProjectsCard
              key={item.title} project={item} />
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default Projects