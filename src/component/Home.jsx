import React from 'react'
import vg from "../img/img2.png";
import { AiFillAmazonCircle, AiFillGoogleCircle, AiFillInstagram, AiFillYoutube } from 'react-icons/ai'

function Home() {
    return (
        <>
            <div className='home' id='home'>
                <main>
                    <h1>TechyStar</h1>
                    <p>solution to all your problme</p>
                </main>
            </div>

            <div className="home2">
                <img src={vg} alt="Grapics" />

                <div>
                    <p>
                        we are one and only solution to the tech probelem to the fatch to every day.we are leading tech compney whose aim we to inctease the probelem solving ebility to the children.
                    </p>
                </div>
            </div>

            <div className="home3" id='about'>
                <div>

                    <h1>who we are?</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, hic. Asperiores amet officia perferendis suscipit enim est quis quae, veritatis, cum quo, eum sint vel neque? Vitae aut eaque recusandae alias?
                        Aperiam qui suscipit iste asperiores quasi voluptatum magni? Consequuntur nulla corrupti hic unde illum voluptatum repellendus. Officia molestias fugit quod aut facere vel nisi tempora ut expedita non adipisci ex,
                        ad et dignissimos eaque doloremque iusto inventore perferendis recusandae amet eveniet. Quia, earum. Repellendus quod voluptatum laborum tempore iure iste assumenda dignissimos sunt. Magnam adipisci consequatur amet consequuntur necessitatibus nisi, et impedit cumque error quod quibusdam dolore, enim dignissimos.


                    </p>
                </div>
            </div>


            <div className="home4 " id='brands'>
                <div>
                    <h1>Brands</h1>
                    <article>


                        <div style={
                            {
                                animationDelay: "0.3s",
                            }
                        }>
                            <AiFillGoogleCircle />
                            <p>Google</p>
                        </div>
                        <div style={
                            {
                                animationDelay: "0.5s",
                            }
                        }>
                            <AiFillInstagram />
                            <p>Instagram</p>
                        </div>
                        <div style={
                            {
                                animationDelay: "0.7s",
                            }
                        }>
                            <AiFillAmazonCircle />
                            <p>Amazon</p>
                        </div>
                        <div style={
                            {
                                animationDelay: "1s",
                            }
                        }>
                            <AiFillYoutube />
                            <p>YouTube</p>
                        </div>
                    </article>
                </div>
            </div>
        </>
    )
}

export default Home