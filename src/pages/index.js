
import Image from 'next/image'
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css';
// import '../styles/responsive.css';
import Head from "@/components/Header";
import Footer from "@/components/footer";
import Link from 'next/link';
const inter = Inter({ subsets: ['latin'] })



export default function Home() {

	return (
		<>

			<Head>
				<title> | Fillerboy</title>
				<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" />
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
			</Head>
			<div>
			<section className="home">
				<div className="container">
					<div className="row banner">
						<div className="col-md-7 banner_left">
							<h2>Experience the  <span>Power of </span> Customized Minerals</h2>
							{/* <h2 className="custo_txt">Customized <span>Minerals</span></h2> */}
							<p>Transform your industrial game with Fillerboy Pvt. Ltd's awe-inspiring mineral solutions! Our expertise in providing custom-fit mineral products and unparalleled customer service will leave you stunned. Get ready to skyrocket your business.</p>
							<p></p>
							<ul>
								{/* <li><Link href="https://play.google.com/store/apps/details?id=com.fillerboycustomer"><Image src="/Playstore.png" width={120} height={40} alt='Rectangle.png' /></Link></li>
								<li><Link href=""><Image src="/Appstore.png" width={120} height={40} alt='svdfvd' /></Link></li> */}
							</ul>
						</div>
						<div className="col-md-5 banner_right">
							<Image src="/banner_pic.png" width={250} height={450} alt='Rectangle.png'/>
						</div>
					</div>
				</div>

				<div className="container">
					<div className="choose_us">
						<h2>Embody Excellence with Every Habit</h2>
						<div className="choose_us_panel">
							<div className="choose_us_box">
								<Image src="/icon.png" width={40} height={40} alt='Rectangle.png' />
								<h5>Quality at its Core</h5>
								<p>At FillerBoy, quality is at the heart of everything we do. We're proud to be known as the top mineral supplier in India, and we never compromise on the exceptional standards we've </p>
							</div>
							<div className="choose_us_box">
								<Image src="/icon.png" width={40} height={40} alt='Rectangle.png'/>
								<h5>Client Delight</h5>
								<p>Discover a world of minerals at Global Mineral Hub. Find high-quality minerals from trusted suppliers. Seamless transactions, secure and efficient. Start your mineral journey with us.</p>
							</div>
							<div className="choose_us_box">
								<Image src="/icon.png" width={40} height={40} alt='Rectangle.png'/>
								<h5>Limitless Options</h5>
								<p>With FillerBoy, the possibilities are endless. Our extensive product portfolio offers a wide range of industry-grade minerals. Our expert team is here to assist you in making the best </p>
							</div>
							<div className="choose_us_box">
								<Image src="/icon.png" width={40} height={40} alt='Rectangle.png'/>
								<h5>Get more for less</h5>
								<p>At FillerBoy, we believe that everyone deserves access to high-quality industrial minerals. We provide the best products at the most affordable prices you in making the best making the </p>
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


					<div className="innovative">
						<h2 className="innovative_txt">WHO WE ARE</h2>

						<div className="row">
							<div className="col-md-6 innovative_left">
								<h5>WHY CHOOSE US</h5>
								<h3>Innovative Mineral Solutions for your unique </h3>
								<p>At Fillerboy Pvt. Ltd, we specialize in delivering customized mineral solutions to meet the unique needs of your industry. As a leading manufacturer and exporter of minerals like dolomite, calcite, china clay, and more, we cater to industries such as paint, cement, ceramics, rubber, pharmaceuticals, and more.</p>
								<p>Since our establishment in 2020, our focus has been on providing top-quality mineral products and exceptional customer service. With a B2B business model, we strive to meet every demand of our customers and prioritize their satisfaction. Partner with us for the ultimate mineral solutions.</p>
							</div>
							<div className="col-md-6 innovative_right">
								<div className="innovative_right_bx">
									<Image src="/icon.png" width={60} height={20} alt='Rectangle.png'/>
									<div className="innovative_right_bx_txt">
										<h6>Inventory Quality Control</h6>
										<p>We ensure all inventories are inspected for proper storage, handling, and maintenance to preserve quality for long-term use.</p>
									</div>
								</div>
								<div className="innovative_right_bx">
									<Image src="/icon.png" width={60} height={20} alt='Rectangle.png'/>
									<div className="innovative_right_bx_txt">
										<h6>Transportation Reliability</h6>
										<p>Our logistics service guarantees safe and timely shipment of products to their destination, ensuring professional handling and secure transportation.</p>
									</div>
								</div>
								<div className="innovative_right_bx">
									<Image src="/icon.png" width={60} height={20} alt='Rectangle.png'/>
									<div className="innovative_right_bx_txt">
										<h6>Ship storage check</h6>
										<p>We perform thorough checks to ensure all containers are free from potential contaminants before loading onto ships.</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="partner">
						<h2 className="partner_txt">Partnering in your Growth</h2>
						<div className="row partner_bx text-center">
							<div className="col-md-3 partner_bx_content">
								<Image src="/icon1.png" width={40} height={50} alt='Rectangle.png'/>
								<h5>Get more for less</h5>
							</div>
							<div className="col-md-3 partner_bx_content">
								<Image src="/icon1.png" width={40} height={50} alt='Rectangle.png'/>
								<h5>Get more for less</h5>
							</div>
							<div className="col-md-3 partner_bx_content">
								<Image src="/icon1.png" width={40} height={50} alt='Rectangle.png' />
								<h5>Get more for less</h5>
							</div>
							<div className="col-md-3 partner_bx_content">
								<Image src="/icon1.png" width={40} height={50} alt='Rectangle.png'/>
								<h5>Get more for less</h5>
							</div>
						</div>
						<div className="video">
							<iframe width="1000px" height="500" src="https://www.youtube.com/embed/DpAURqwYbJo" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
						</div>
					</div>

					<div className="material">
						<h2 className="material_txt">Raw Materials at Lowest Prices-Guaranteed</h2>
						<div className="material_panel">
							<div className="material_box">
								<Link href="#"><Image src="/product/CALCITE.png" width={100} height={200} alt='Rectangle.png'/></Link>
								<Link href="#"><h5>CALCITE</h5></Link>
							</div>
							<div className="material_box">
								<Link href="#"><Image src="/product/DOLOMITE.png" width={100} height={200} alt='Rectangle.png'/></Link>
								<Link href="#"><h5>DOLOMITE</h5></Link>
							</div>
							<div className="material_box">
								<Link href="#"><Image src="/product/SOAPSTONE.png" width={100} height={200} alt='Rectangle.png'/></Link>
								<Link href="#"><h5>SOAPSTONE</h5></Link>
							</div>
							<div className="material_box">
								<Link href="#"><Image src="/product/CHINA-CLAY.png" width={100} height={200} alt='Rectangle.png'/></Link>
								<Link href="#"><h5>CHINA CLAY</h5></Link>
							</div>
						</div>
					</div>

					<div className="press">
						<h2 className="press_txt">Testimonial</h2>
						<div className="press_panel">
							<div className="press_box">
								<div className="press_box_top">
									<Image src="/Rectangle.png" width={50} height={30} alt='Rectangle.png'/>
									<h5>Rahul Sen</h5>
								</div>
								<p>I Proudly Say Fillerboy Minerals is Very Good industrial minerals supplier, I have the best experience with this company. They provide best quality quartz powder and feldspar lumps at reasonable prices</p>
								<div className="press_box_bot"></div>
							</div>
							<div className="press_box">
								<div className="press_box_top">
									<Image src="/Rectangle.png" width={50} height={30} alt='Rectangle.png'/>
									<h5>Ankit Roy</h5>
								</div>
								<p>I really appreciate Fillerboy Minerals Team and Mr. Sanjay Patel for their countless effort for providing me excellent service and wide range of Quartz powder at affordable price.very good Minerals,</p>
								<div className="press_box_bot"></div>
							</div>
							<div className="press_box">
								<div className="press_box_top">
									<Image src="/Rectangle.png" width={50} height={30} alt='Rectangle.png'/>
									<h5>Sonam Sarkar</h5>
								</div>
								<p>I must mention that Fillerboy Pvt Ltd is an excellent firm that supplies us with high-quality soapstone that meets our specifications. We got a great deal and hope to do more business in the future.</p>
								<div className="press_box_bot"></div>
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
				</div>
			</section>
			</div>
			<Footer />
			<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>

			{/* <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"/> */}
		</>
		
	)
}
