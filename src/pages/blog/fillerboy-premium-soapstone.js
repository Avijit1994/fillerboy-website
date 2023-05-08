import Head from "@/components/Header";
import Footer from "@/components/footer";
import Navbar from "@/components/NavbarScreen";
import Test from "@/components/Test";
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image'

export default function () {
	return (
        <>
			{/* <Head title="about of me"/>
            <Navbar/> */}
			<Head title="Fillerboy | About" />
	
				<main className="main">

					<section className="product_detail">
						<div className="container">
							<h1 className="product_detail_txt">Unleash the Magic of Fillerboy's Premium Soapstone:Exquisite Beauty and Durability Combined</h1>
							<div className="row">
								<div className="col-md-8 product_detail_left">
									<h3>Unleash the Magic of Fillerboy's Premium Soapstone:Exquisite Beauty and Durability Combined</h3>
									<p>Soapstone, a metamorphic rock that is rich in talc, has been used for centuries for its beauty, durability, and unique properties. It is widely used in several industries, including ceramics, paints, coatings, plastics, rubber, and paper.</p>
									
										</div>
										<div className="col-md-4 product_detail_right">
											<Image src="/blog/4. Unleash the Magic of Fillerboy's Premium SoapstoneExquisite Beauty and Durability Combined.jpg" width={100} height={300}/>
										</div>
										<div className="col-md-12 dolomite_text">
											{/* <h3>What is Dolomite</h3> */}
											<p>At Fillerboy Pvt Ltd, we process and export premium quality soapstone, tailored to your specific requirements. Our soapstone is known for its high talc content, purity, and exceptional quality, making it ideal for various industrial applications.</p>
											<p>Our soapstone comes in various grades, including Grade A, B, and C, each with different talc content and particle size. This variety of grades ensures that we can provide our customers with the optimum grade for their specific needs, be it in terms of whiteness, brightness, particle size, or talc content.</p>
											<p>Our expert team ensures that our soapstone is processed and packed in a hygienic and controlled environment, ensuring the highest level of purity and quality. We also ensure timely delivery and exceptional customer service, making us the best platform to procure soapstone.</p>
											<p>At Fillerboy Pvt Ltd, we are committed to ensuring customer satisfaction and providing the best possible solutions for our customers. Our wide range of soapstone grades caters to various industrial applications, such as:</p>
											<p>1. In ceramics, soapstone is used for glaze formulations, and its high talc content makes it an excellent fluxing agent.</p>
											<p>2. In paints and coatings, soapstone improves the performance of paints and coatings by enhancing gloss, scrub resistance, and durability</p>
											<p>3. In plastics, soapstone is used as a filler to improve the mechanical properties of plastics.</p>
											<p>4. In rubber, soapstone acts as a reinforcement filler and reduces heat build-up, thus improving the life of the product.</p>
											<p>5. In paper, soapstone is used as a coating pigment to enhance the surface finish and printability of paper.</p>
											<p>At Fillerboy Pvt Ltd, we are passionate about delivering the best possible solutions to our customers. Visit our website to learn more about our products and services, and how we can help you with your soapstone requirements. You can also get in touch with us on social media platforms such as Instagram, Facebook, LinkedIn, Twitter, and YouTube or through one-click WhatsApp.</p>
											
											
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