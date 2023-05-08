import Head from "@/components/Header";
import Navbar from "@/components/NavbarScreen";
import Test from "@/components/Test";
import Footer from "@/components/footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image'

export default function About() {
    return (
        <>
            {/* <Head title="about of me"/>
            <Navbar/> */}
            <Head />
            
                <div>
                    <main className="main">

                        <section className="about">
                            <div className="container">
                                <h1 className="about_txt">About Us</h1>
                                <p className="about_para">FillerBoy - your reliable partner in quality and affordability. As a leading industrial minerals supplier, we offer premium materials and exceptional customer service. Trust us for top-notch products and a commitment to excellence.</p>

                                <div className="row about_box_top">
                                    <h2>Who Are We?</h2>
                                    <div className="col-md-7 about_box_top_left">
                                        <p>Premium Quality & consistency Are Our Ultimate Goal! <br/></p>
                                        <p>The FillerBoy Pvt. Ltd is one of the leading companies when it comes to supplying industrial minerals. Our team is immensely dedicated to providing all the customer's industry-standard materials at an extremely competitive price point. Our company initiated the journey in 2004. We are mainly focusing on B2B chain delivering all types of minerals of all grades found and mined all over the state of Rajasthan, Gujarat, Madhya Pradesh, and Uttarakhand. We are aiming to be the pioneer of the mineral industry. Our headquarter is at Udaipur, Rajasthan is one of the most researched cities in India in terms of mining. We are arguably the best mineral supplier in Rajasthan.</p>
                                    </div>
                                    <div className="col-md-5 about_box_top_right">
                                        <Image src="/about-pic.png" width={400} height={400} alt='fillerboy' />

                                    </div>
                                </div>

                                <div className="choose_us">
                                    <h2>WHY CHOOSE US?</h2>
                                    <div className="choose_us_panel">
                                        <div className="choose_us_box">
                                            <Image src="/icon.png" width={50} height={50} alt='Rectangle.png'/>
                                            <h5>Upgraded Technology</h5>
                                            <p>At FillerBoy, quality is at the heart of everything we do. We're proud to be known as the top mineral supplier in India</p>
                                        </div>
                                        <div className="choose_us_box">
                                            <Image src="/icon.png" width={50} height={50} alt='Rectangle.png'/>
                                            <h5>Hassle-free Service</h5>
                                            <p>At FillerBoy, quality is at the heart of everything we do. We're proud to be known as the top mineral supplier in India</p>
                                        </div>
                                        <div className="choose_us_box">
                                            <Image src="/icon.png" width={50} height={50} alt='Rectangle.png'/>
                                            <h5>Incomparable Quality</h5>
                                            <p>At FillerBoy, quality is at the heart of everything we do. We're proud to be known as the top mineral supplier in India</p>
                                        </div>
                                        <div className="choose_us_box">
                                            <Image src="/icon.png" width={50} height={50} alt='Rectangle.png'/>
                                            <h5>Free Consultation</h5>
                                            <p>At FillerBoy, quality is at the heart of everything we do. We're proud to be known as the top mineral supplier in India</p>
                                        </div>
                                        <div className="choose_us_box">
                                            <Image src="/icon.png" width={50} height={50} alt='Rectangle.png'/>
                                            <h5>Skilled Work Force</h5>
                                            <p>At FillerBoy, quality is at the heart of everything we do. We're proud to be known as the top mineral supplier in India</p>
                                        </div>
                                        <div className="choose_us_box">
                                            <Image src="/icon.png" width={50} height={50} alt='Rectangle.png'/>
                                            <h5>Easiest Accountancy Available</h5>
                                            <p>At FillerBoy, quality is at the heart of everything we do. We're proud to be known as the top mineral supplier in India</p>
                                        </div>
                                        <div className="choose_us_box">
                                            <Image src="/icon.png" width={50} height={50} alt='Rectangle.png'/>
                                            <h5>Supplying a Wide Range of Minerals</h5>
                                            <p>At FillerBoy, quality is at the heart of everything we do. We're proud to be known as the top mineral supplier in India</p>
                                        </div>
                                        <div className="choose_us_box">
                                            <Image src="/icon.png" width={50} height={50} alt='Rectangle.png'/>
                                            <h5>Quality at its Core</h5>
                                            <p>At FillerBoy, quality is at the heart of everything we do. We're proud to be known as the top mineral supplier in India</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="testi">
                                    <h2 className="faq_txt">Happy Customer</h2>

                                    <div className="testi_panel">
                                        <div className="testi_box">
                                            <div className="testi_box_top">
                                                <Image src="/Testimonial/Ankit.jpg" width={50} height={50} alt='Rectangle.png'/>
                                                <p>I Proudly Say Fillerboy Minerals is Very Good industrial minerals supplier, I have the best experience with this company. They provide best quality quartz powder and feldspar lumps at reasonable prices</p>
                                            </div>

                                        </div>
                                        <div className="testi_box">
                                            <div className="testi_box_top">
                                                <Image src="/Testimonial/Rahul-Sen.jpg" width={50} height={50} alt='Rectangle.png'/>
                                                <p>I really appreciate Fillerboy Minerals Team and Mr. Sanjay Patel for their countless effort for providing me excellent service and wide range of Quartz powder at affordable price.very good Minerals,</p>
                                            </div>

                                        </div>
                                        <div className="testi_box">
                                            <div className="testi_box_top">
                                                <Image src="/Testimonial/Sonam-sarkar.jpg" width={50} height={50} alt='Rectangle.png'/>
                                                <p>I must mention that Fillerboy Pvt Ltd is an excellent firm that supplies us with high-quality soapstone that meets our specifications. We got a great deal and hope to do more business in the future.</p>
                                            </div>

                                        </div>
                                    </div>
                                    {/* <div className="indicators text-center">
                                        <ul>
                                            <li><i className="fa fa-circle actv"></i></li>
                                            <li><i className="fa fa-circle-o"></i></li>
                                            <li><i className="fa fa-circle-o"></i></li>
                                        </ul>
                                    </div> */}

                                </div>


                                {/* <div className="faq">
                                    <h2 className="faq_txt">FAQ</h2>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="accordion" id="accordionExample">
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="headingOne">
                                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                            How to get product ?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                        <div className="accordion-body">
                                                            I Proudly Say Fillerboy Minerals is Very Good industrial minerals supplier, I have the best experience.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="headingTwo">
                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                            How to get product ?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                        <div className="accordion-body">
                                                            I Proudly Say Fillerboy Minerals is Very Good industrial minerals supplier, I have the best experience.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="headingThree">
                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                            How to get product ?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                                        <div className="accordion-body">
                                                            I Proudly Say Fillerboy Minerals is Very Good industrial minerals supplier, I have the best experience.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="accordion" id="accordionExample">
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="headingOne">
                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                                            How to get product ?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                        <div className="accordion-body">
                                                            I Proudly Say Fillerboy Minerals is Very Good industrial minerals supplier, I have the best experience.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="headingTwo">
                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                            How to get product ?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                        <div className="accordion-body">
                                                            I Proudly Say Fillerboy Minerals is Very Good industrial minerals supplier, I have the best experience.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="headingThree">
                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                            How to get product ?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                                        <div className="accordion-body">
                                                            I Proudly Say Fillerboy Minerals is Very Good industrial minerals supplier, I have the best experience.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </section>

                    </main>
                </div>

         
<Footer/> 
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>

        </>
        
    )
}