import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../img/c1.webp'
import img2 from '../img/c2.jpeg'
import img3 from '../img/c3.webp'

function Service() {
    return (
        <div className='service'>
            <Carousel infiniteLoop
                autoPlay
                showStatus={false}
                showArrows={false}
                showThumbs={false}
                interval={1000} >
                <div>
                    <img src={img1} alt="item1" />
                    <p className='legend'>mern stack</p>
                </div>
                <div>
                    <img src={img3} alt="item3" />
                    <p className='legend'>blog</p>
                </div>

            </Carousel>
        </div>
    )
}

export default Service