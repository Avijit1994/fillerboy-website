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
							<h1 className="product_detail_txt">Unlock Your Industry's Potential with Fillerboy's Bespoke Mineral Formulations</h1>
							<div className="row">
								<div className="col-md-8 product_detail_left">
									<h3>Unlock Your Industry's Potential with Fillerboy's Bespoke Mineral Formulations</h3>
									<p>At Fillerboy Pvt. Ltd, we understand that every industry has unique needs when it comes to minerals. That's why we specialize in creating bespoke mineral formulations that cater to your specific requirements, helping you unlock your industry's true potential.</p>
										</div>
										<div className="col-md-4 product_detail_right">
											<Image alt='fillerboy'  src="/blog/5. Unlock Your Industry's Potential with Fillerboy's Bespoke Mineral Formulations.jpg" width={100} height={300}/>
										</div>
										<div className="col-md-12 dolomite_text">
											{/* <h3>What is Dolomite</h3> */}
											<p>Our team of experts works closely with you to understand your needs and design custom mineral blends that deliver exceptional performance. We offer a wide range of mineral products including dolomite, calcite, china clay, soapstone, feldspar, quartz, calcined clay, manganese, hydrated lime, and more.</p>
											<p>With our B2B business model, we cater to industries such as paint, cement, ceramics, rubber, pharmaceuticals, plastics, glass, detergents, paper, steel, and filtration. We prioritize customer satisfaction and strive to meet every single demand of our clients, no matter how unique.</p>
											<p>By partnering with Fillerboy Pvt. Ltd, you can take your business to the next level. Our custom mineral solutions are designed to help you improve your processes, increase efficiency, and enhance your products' performance.</p>
											<p>To learn more about how we can help your business grow, please visit our website at www.fillerboypvtltd.com. You can also follow us on our social media platforms including Instagram, Facebook, LinkedIn, and Twitter. Additionally, we welcome inquiries via WhatsApp for added convenience. With Fillerboy Pvt. Ltd as your mineral partner, the possibilities for your industry are endless.</p>
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