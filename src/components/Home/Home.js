import './Home.css'
import React from 'react'
import { Carousel ,CarouselItem } from 'react-bootstrap'

const Home = () => {
    return (
        <div className='Home'>
            <Carousel className='carusel'>
                <CarouselItem interval={3000}>
                    <div className='place'></div>
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </CarouselItem>
                <CarouselItem interval={2000}>
                    <div className='place'></div>
                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </CarouselItem>
                <CarouselItem interval={3000}>
                    <div className='place'></div>
                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </CarouselItem>
            </Carousel>
        </div>
    )
}

export default Home
