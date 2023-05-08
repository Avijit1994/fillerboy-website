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
							<h1 className="product_detail_txt">Dolomite is a mineral compound that contains calcium magnesium carbonate (CaMg(CO3)2) in varying proportions.</h1>
							<div className="row">
								<div className="col-md-8 product_detail_left">
									<h3>Dolomite is a mineral compound that contains calcium magnesium carbonate (CaMg(CO3)2) in varying proportions.</h3>
									<p>Dolomite is a mineral compound that contains calcium magnesium carbonate (CaMg(CO3)2) in varying proportions. Dolomite powder is a versatile mineral that finds extensive use in various industries due to its unique properties. In this blog, we will explore the various industrial applications of dolomite powder and why Fillerboy Pvt. Ltd is the best choice to procure dolomite powder across the globe. </p>
									
										</div>
										<div className="col-md-4 product_detail_right">
											<Image src="/blog/2. Dolomite is a mineral compound that contains calcium magnesium carbonate (CaMg(CO3)2) in varying proportions.jpg" alt='fillerboy'  width={100} height={300}/>
										</div>
										<div className="col-md-12 dolomite_text">
											<h3>Industry</h3>
											<p><b>1. Steel Industry:</b> The steel industry is one of the largest consumers of dolomite powder. Dolomite is used as a fluxing material during the production of steel. It helps in removing impurities and increases the fluidity of molten steel. Dolomite also acts as a refractory material, protecting the furnace lining from high temperatures.</p>
											<p><b>2. Glass Industry:</b> Dolomite powder is widely used in the glass industry as a raw material. It is used to manufacture various types of glasses, including clear glass, flat glass, and colored glass. Dolomite powder provides the required magnesium and calcium oxide to the glass composition, making it stronger and more durable.</p>
											<p><b>3. Agriculture Industry:</b> Dolomite powder is used as a soil conditioner in agriculture. It helps in maintaining the pH balance of soil, improves soil structure, and provides essential nutrients like magnesium and calcium to plants. Dolomite powder is also used in animal feed as a source of magnesium and calcium.</p>
											<p><b>4. Ceramic Industry:</b> Dolomite powder is widely used in the ceramic industry. It is used as a raw material for manufacturing ceramic tiles, sanitary ware, and tableware. Dolomite powder provides strength, durability, and resistance to heat and corrosion to ceramic products. 
											</p>
											<p><b>5. Paint Industry:</b> Dolomite powder is used as a filler in the paint industry. It provides whiteness and opacity to the paint, making it more durable and weather-resistant.
											<br/>
											Fillerboy Pvt. Ltd is a leading supplier of dolomite powder across the globe. The company provides high-quality dolomite powder that is suitable for various industrial applications. Fillerboy Pvt. Ltd has a team of experts who can provide custom-fit mineral products according to the specific requirements of customers. The company also provides unparalleled customer service, ensuring that customers receive their orders on time and in the desired quantity.
											<br/>
											To conclude, dolomite powder finds extensive use in various industries due to its unique properties. Fillerboy Pvt. Ltd is the best choice to procure dolomite powder across the globe, providing high-quality products and unparalleled customer service. To get in touch with Fillerboy Pvt. Ltd, customers can visit the website fillerboy.com, follow them on Instagram, Facebook, LinkedIn, and YouTube or click on the provided WhatsApp link
											</p>
											
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