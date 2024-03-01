import React from 'react'
import './Certificates.css'
import CertificatesCard from './CertificatesCard/CertificatesCard'
import { CERTIFICATES, } from '../../utiles/data'
import { useRef } from 'react'
import Slider from 'react-slick'

const Certificates = () => {

  const sliderRef = useRef()

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slideToShow: 3,
    slideToScroll: 2,
    arrows: false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 769,
        settings:{
          slideToShow: 2,
          slideToScroll: 1,
        }
      }
    ]
  }


  const slideRight = () =>{
    sliderRef.current.slickNext()
  }

  const slideLeft = () =>{
    sliderRef.current.slickPrev()
  }


  return (
    <section className='certificates-container'>
      <h5>Certificates</h5>

      <div className='certificates-content'>

        <div className='arrow-right' onClick={slideRight}>
          <span class='material-symbols-outlined'>chevron_right</span>
        </div>

        <div className='arrow-left' onClick={slideLeft}>
          <span class='material-symbols-outlined'>chevron_left</span>
        </div>

        <Slider ref={sliderRef} {...settings}>
          {CERTIFICATES.map((item) => (
            <CertificatesCard
              key={item.title} detail={item} />
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default Certificates