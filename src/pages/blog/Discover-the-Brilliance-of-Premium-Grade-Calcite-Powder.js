import Head from "@/components/Header";
import Footer from "@/components/footer";
import Navbar from "@/components/NavbarScreen";
import Test from "@/components/Test";
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image'
import Link from 'next/link';
export default function () {
	return (
        <>
			{/* <Head title="about of me"/>
            <Navbar/> */}
			<Head title="Fillerboy | About" />
		
				<main className="main">

					<section className="product_detail">
						<div className="container">
							<h1 className="product_detail_txt">Discover the Brilliance of Premium Grade Calcite Powder</h1>
							<div className="row">
								<div className="col-md-8 product_detail_left">
									<h3>Discover the Brilliance of Premium Grade Calcite Powder</h3>
									<p>Calcite is a naturally occurring mineral that has found widespread use across various industries. From construction to manufacturing, calcite powder has proven to be a valuable material with numerous benefits. In this blog post, we'll explore some of the industrial applications of calcite powder and why Fillerboy Pvt Ltd is the best choice for procuring this material.</p>
									
										</div>
										<div className="col-md-4 product_detail_right">
											<Image src="/blog/1. Discoverthe-Brilliance-of-Premium-Grade-Calcite-Powder.jpg" width={100} alt='fillerboy'  height={300}/>
										</div>
										<div className="col-md-12 dolomite_text">
											<h3>Discover the Brilliance of Premium</h3>
											<p>One of the most common uses of calcite powder is as a filler material. Its high calcium carbonate content makes it an ideal candidate for use in plastics, paints, and coatings. Calcite powder acts as a reinforcing agent, enhancing the durability and strength of the final product. It also helps to improve the quality of the surface finish and reduces the cost of production.</p>
									<p>Another significant application of calcite powder is in the construction industry. It is used as a building material for creating cement and concrete. Its high compressive strength and low abrasiveness make it a perfect material for creating sturdy foundations and structures that can withstand heavy loads.</p>
									<p>Calcite powder is also widely used in the paper industry. It is used as a coating material for paper products, giving them a smooth, glossy finish. It also enhances the brightness and opacity of paper, making it ideal for printing and writing.</p>	
									<p>At Fillerboy Pvt Ltd, we are committed to providing our customers with the highest quality calcite powder. Our premium grade calcite powder is sourced from the finest mines and processed to meet the strictest quality standards. We offer a wide range of calcite powder grades to suit various industrial applications, and our experienced team is always on hand to provide expert guidance and support.</p>
									<p>To get in touch with us, you can visit our website or find us on social media sites such as Facebook, Twitter, and LinkedIn. You can also reach us through our clickable WhatsApp link on our website. We are always happy to answer any questions you may have and help you find the perfect calcite powder solution for your needs.</p>
									<p>In conclusion, calcite powder is a versatile material with numerous industrial applications. Fillerboy Pvt Ltd is the best choice for procuring this material, thanks to our commitment to quality and customer service. Get in touch with us today to find out more!</p>
											</div>
												{/* <div className="col-md-12 dolomite_point text-center">
													<h3>What is Dolomite</h3>
													<ul>
														<li><a href="#"><i className="fa fa-circle"></i> Concrete</a></li>
														<li><a href="#"><i className="fa fa-circle"></i> Concrete</a></li>
														<li><a href="#"><i className="fa fa-circle"></i> Concrete</a></li>
														<li><a href="#"><i className="fa fa-circle"></i> Concrete</a></li>
														<li><a href="#"><i className="fa fa-circle"></i> Concrete</a></li>
													</ul>
													<ul>
														<li><a href="#"><i className="fa fa-circle"></i> Concrete</a></li>
														<li><a href="#"><i className="fa fa-circle"></i> Concrete</a></li>
														<li><a href="#"><i className="fa fa-circle"></i> Concrete</a></li>
														<li><a href="#"><i className="fa fa-circle"></i> Concrete</a></li>
														<li><a href="#"><i className="fa fa-circle"></i> Concrete</a></li>
													</ul>
												</div> */}
										</div>
								</div>
							</section>




						</main>

					
					<Footer />

				</>
				)
}