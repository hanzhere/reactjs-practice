// import React from 'react'

// function Feature() {
//     return (
//         <FeatureContainer>
//             <h1>Pizza of the Day</h1>
//             <p>Truffle alfredo sauce topped with 24 carrat</p>
//         </FeatureContainer>
//     )
// } 

// export default Feature
import React from 'react'
import { FeatureContainer, FeatureButton } from './FeatureElements'

function Feature() {
    return (
        <FeatureContainer>
            <h1>Pizza of the Day</h1>
            <p>Truffle alfredo sause topped with 24 carat</p>
            <FeatureButton>Order now</FeatureButton>
        </FeatureContainer>
    )
}

export default Feature
