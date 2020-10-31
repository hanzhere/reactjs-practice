import React from 'react'
import Navbar from '../Navbar'
import { HeroContainer, HeroContent, HeroH1, HeroBtn, HeroItems, HeroP } from './HeroElements'

function Hero() {
    return (
        <HeroContainer>
            <Navbar />
            <HeroContent>
                <HeroItems>
                    <HeroH1>Greatest Pizza</HeroH1>
                    <HeroP>Ready in 60 seconds</HeroP>
                    <HeroBtn>Order</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
