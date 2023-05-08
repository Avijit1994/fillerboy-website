import Head from "@/components/Header";
import Navbar from "@/components/NavbarScreen";
import Test from "@/components/Test";
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image'
import Footer from "@/components/footer";

export default function () {
    return (
        <>
            {/* <Head title="about of me"/>
            <Navbar/> */}
            <Head title="Fillerboy | About" />
        
                <div>
                    <main className="main">

                    <section className="service">
			<div className="container">
				<h1 className="service_txt">Our Services</h1>
				<p className="service_para">We are mainly focusing on B2B chains delivering all types of industrial minerals of all grades. Our mining chain is spread all over the state of Rajasthan, Gujarat, Uttarakhand, and Madhya Pradesh.</p>
				<div className="ser_box_top">
					<h4>The service we offer is specifically designed to meet your needs</h4>
					<p>We are a production and manufacturer company focused on establishing a stable long-term relationship with our esteemed customers.</p>
				</div>
				<div className="row ser_box_top">
					<h2>Why Choose Us?</h2>
					<div className="col-md-5 ser_box_top_left">
						<h3>The service we offer is specifically designed to meet your needs</h3>
						<p>FillerBoy Pvt. Ltd is one of the leading companies in India in terms of supplying industrial minerals and mineral powders. The entire team is dedicated to serving industry-standard materials at an extremely competitive price point to all our customers. Our journey started in 2004, with a dream of being the pioneer of the mineral industry. We typically deal with products like dolomite, calcite, china clay, soapstone, quartz, feldspar, calcined clay, manganese, hydrated lime, and other industrial minerals. Customization of mineral products is our key. We deliver mineral powders according to the need of the customers. Our team build-up is entirely dependent on fulfilling the customer's needs as that is our utmost priority.</p>
					<p></p>
					</div>
					<div className="col-md-7 ser_box_top_right">
						<Image alt='fillerboy'  src="/fillerboy-SupplyChain-banner.png" width={500} height={500}/>
					</div>
				</div>
				<div className="choose_us">
                                    <h2>WHY CHOOSE US?</h2>
                                    <div className="choose_us_panel">
                                        <div className="choose_us_box">
                                            <Image alt='fillerboy'  src="/icon.png" width={50} height={50}/>
                                            <h5>Upgraded Techno</h5>
                                            <p>At FillerBoy, quality is at the heart of everything we do. We're proud to be known as the top mineral supplier in India</p>
                                        </div>
                                        <div className="choose_us_box">
                                            <Image alt='fillerboy'  src="/icon.png" width={50} height={50}/>
                                            <h5>Hassle-free Service</h5>
                                            <p>At FillerBoy, quality is at the heart of everything we do. We're proud to be known as the top mineral supplier in India</p>
                                        </div>
                                        <div className="choose_us_box">
                                            <Image alt='fillerboy'  src="/icon.png" width={50} height={50}/>
                                            <h5>Incomparable Quali</h5>
                                            <p>At FillerBoy, quality is at the heart of everything we do. We're proud to be known as the top mineral supplier in India</p>
                                        </div>
                                        <div className="choose_us_box">
                                            <Image  alt='fillerboy'  src="/icon.png" width={50} height={50}/>
                                            <h5>Free Consultation</h5>
                                            <p>At FillerBoy, quality is at the heart of everything we do. We're proud to be known as the top mineral supplier in India</p>
                                        </div>
                                        <div className="choose_us_box">
                                            <Image alt='fillerboy'  src="/icon.png" width={50} height={50}/>
                                            <h5>Skilled Work Force</h5>
                                            <p>At FillerBoy, quality is at the heart of everything we do. We're proud to be known as the top mineral supplier in India</p>
                                        </div>
                                        <div className="choose_us_box">
                                            <Image alt='fillerboy'  src="/icon.png" width={50} height={50}/>
                                            <h5>Easiest Accountan</h5>
                                            <p>At FillerBoy, quality is at the heart of everything we do. We're proud to be known as the top mineral supplier in India</p>
                                        </div>
                                        <div className="choose_us_box">
                                            <Image alt='fillerboy'  src="/icon.png" width={50} height={50}/>
                                            <h5>Supplying a Wid</h5>
                                            <p>At FillerBoy, quality is at the heart of everything we do. We're proud to be known as the top mineral supplier in India</p>
                                        </div>
                                        <div className="choose_us_box">
                                            <Image alt='fillerboy'  src="/icon.png" width={50} height={50}/>
                                            <h5>Quality at its Core</h5>
                                            <p>At FillerBoy, quality is at the heart of everything we do. We're proud to be known as the top mineral supplier in India</p>
                                        </div>
                                    </div>
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

        </>
    )
}