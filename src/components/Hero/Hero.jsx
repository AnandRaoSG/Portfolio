import React from 'react'
import './Hero.css'

const Hero = () => {
    return (
        <section className='hero-container'>

            <div className='hero-content'>
                <h2>Building Digital Experiences that Inspire  </h2>
                <p>Passoniate Frontend Developer | Transforming Ideas into Seamless and
                    Visually Stunning Web Solutions
                </p>
            </div>

            <div className='hero-img'>
                <div>
                    <div className='tech-icon'>
                        <img src="./Images/React.jpg" />
                    </div>
                    <img className='anand' src="./Images/Anand_1.png" />
                </div>

                <div>
                    <div className='tech-icon'>
                        <img src="./Images/HTML.jpg" />
                    </div>

                    <div className='tech-icon'>
                        <img src="./Images/CSS.jpg" />
                    </div>

                    <div className='tech-icon'>
                        <img src="./Images/Javascript.jpg" />
                    </div>

                    <div className='tech-icon'>
                        <img src="./Images/java.jpg" />
                    </div>

                    <div className='tech-icon'>
                        <img src="./Images/productmanagement_1.png" />
                    </div>
                </div>



            </div>
        </section>
    )
}

export default Hero