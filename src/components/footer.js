import React, { Component } from 'react'
import Head from 'next/head'
import Image from 'next/image'
export default function Footer(props) {

    return (

        <footer class="footer">
            <div class="fot_top">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 fot_top_txt">
                            <h3 class="">Fillerboy Products</h3>
                            <p>Dolomite , Calcite , Soapstone , China-Clay , Calcined-clay , Wollastonite , Quartz , Feldspar , Manganese , Precipitated-Calcium-Carbonate, Hydrated-Lime , Diatomite</p>
                        </div>
                        <div class="col-md-3 fot_logo">
                            <Image src="/logo.png" alt="" class="" width={150} height={30} />
                            <p>At FillerBoy, we're on a mission to revolutionize the world of industrial minerals. Our focus is simple - to create a unique and unparalleled experience for our customers.</p>
                            <ul class="social">
                                <li><i class="fa fa-facebook"></i></li>
                                <li><i class="fa fa-twitter"></i></li>
                                <li><i class="fa fa-instagram"></i></li>
                                <li><i class="fa fa-youtube-play"></i></li>
                            </ul>
                        </div>
                        <div class="col-md-3 ">
                            <h4 class="fot_title">RESOURCES</h4>
                            <ul class="company_menu">
                                <li><a href="/about">About</a></li>
                                <li><a href="/service">Service</a></li>
                                <li><a href="/product">Product</a></li>
                                
                            </ul>
                        </div>
                        <div class="col-md-3">
                            <h4 class="fot_title">RESOURCES</h4>
                            <ul class="resource_menu">
                            <li><a href="/blog">Blog</a></li>
                                {/* <li><a href="/contact">Contact</a></li> */}
                                <li><a href="/contact">Sitemap</a></li>
                            </ul>
                        </div>
                        <div class="col-md-3 fot_logo">
                            <p><b>Address -:</b> Bhagat Singh Marg, Hatora, C-Zone, Durgapur, West Bengal 713214</p>
                            <p><b>Email -:</b> info@fillerboy.com</p>
                            <p><b>Call -:</b> +91 81421 01923</p>
                            
                        </div>
                        {/* <div class="col-md-3">
                            <h4 class="fot_title">SUPPORT</h4>
                            <ul class="support_menu">
                                <li><a href="">Privacy & policy</a></li>
                                <li><a href="">Terms & condition</a></li>
                                <li><a href="">Shipping policy</a></li>
                            </ul>
                        </div> */}
                    </div>
                </div>
            </div>
            <div class="fot_bot">
                <p>© 2023 Fillerboy. All rights reserved.</p>
            </div>

        </footer>


    )

}