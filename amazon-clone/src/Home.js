import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className='home'>
            <div className='home__container'>
                <img
                    className='home__image'
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_TallHero_NonPrime_v2_en_US_1x._CB403670067_.jpg"
                    alt=""
                />

                <div className='home__row'>
                    <Product title="The learn startup" price={29.99} rating={5} image='https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg' />
                    <Product title="Queen" price={59.99} rating={5} image='https://images-na.ssl-images-amazon.com/images/I/A1PVpROyK5L.jpg' />
                </div>

                <div className='home__row'>
                    <Product title="Queen" price={59.99} rating={5} image='https://frenchculture.org/sites/default/files/styles/huge/public/field/image/varam.jpg?itok=yLokFLzO' />
                    <Product title="Queen" price={59.99} rating={5} image='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT1bLXKdm1pcJr_8Yu-GGXtpk3d1T7ErjbYUw&usqp=CAU' />
                    <Product title="Queen" price={59.99} rating={5} image='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS26Y93886yipciK9swHSfyMQ74b6CSuMEEww&usqp=CAU' />


                </div>

                <div className='home__row'>
                    <Product title="Queen" price={59.99} rating={5} image='https://pyxis.nymag.com/v1/imgs/069/183/388ddc58764fb03e968ba761eca7aecb78-breasts-and-eggs.rdeep-vertical.w245.jpg' />

                </div>

            </div>
        </div>
    )
}

export default Home
