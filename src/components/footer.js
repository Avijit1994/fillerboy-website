import React, { Component } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
export default function Footer(props) {

    return (

        <footer className="footer">
            <div className="fot_top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 fot_top_txt">
                            <h3 className="">Fillerboy Products</h3>
                            <p>Dolomite , Calcite , Soapstone , China-Clay , Calcined-clay , Wollastonite , Quartz , Feldspar , Manganese , Precipitated-Calcium-Carbonate, Hydrated-Lime , Diatomite</p>
                        </div>
                        <div className="col-md-3 fot_logo">
                            <Image src="/logo.png" alt='fillerboy' className="" width={150} height={30}  />
                            <p>At FillerBoy, we're on a mission to revolutionize the world of industrial minerals. Our focus is simple - to create a unique and unparalleled experience for our customers.</p>
                            <ul className="social">
                                <li><i className="fa fa-facebook"></i></li>
                                <li><i className="fa fa-twitter"></i></li>
                                <li><i className="fa fa-instagram"></i></li>
                                <li><i className="fa fa-youtube-play"></i></li>
                            </ul>
                        </div>
                        <div className="col-md-3 ">
                            <h4 className="fot_title">RESOURCES</h4>
                            <ul className="company_menu">
                                <li><Link href="/about">About</Link></li>
                                <li><Link href="/service">Service</Link></li>
                                <li><Link href="/product">Product</Link></li>
                                
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h4 className="fot_title">RESOURCES</h4>
                            <ul className="resource_menu">
                            <li><Link href="/blog">Blog</Link></li>
                                {/* <li><a href="/contact">Contact</a></li> */}
                                <li><Link href="/contact">Sitemap</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-3 fot_logo">
                            <p><b>Address -:</b> Bhagat Singh Marg, Hatora, C-Zone, Durgapur, West Bengal 713214</p>
                            <p><b>Email -:</b> info@fillerboy.com</p>
                            <p><b>Call -:</b> +91 81421 01923</p>
                            
                        </div>
                        {/* <div className="col-md-3">
                            <h4 className="fot_title">SUPPORT</h4>
                            <ul className="support_menu">
                                <li><a href="">Privacy & policy</a></li>
                                <li><a href="">Terms & condition</a></li>
                                <li><a href="">Shipping policy</a></li>
                            </ul>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className="fot_bot">
                <p>© 2023 Fillerboy. All rights reserved.</p>
            </div>

        </footer>


    )

}