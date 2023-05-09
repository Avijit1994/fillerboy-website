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
							<h1 className="product_detail_txt">From Concept to Creation: How Fillerboy Delivers Custom Mineral Solutions</h1>
							<div className="row">
								<div className="col-md-8 product_detail_left">
									<h3>From Concept to Creation: How Fillerboy Delivers Custom Mineral Solutions</h3>
									<p>Fillerboy offers tailor-made mineral solutions for your industrial needs, from conceptualization to finalization. Our proficient team employs cutting-edge technology to craft personalized mineral blends, including dolomite, calcite, china clay, soapstone, feldspar, quartz, calcined clay, manganese, and hydrated lime, to enhance your processes and product performance.</p>
										</div>
										<div className="col-md-4 product_detail_right">
											<Image alt='fillerboy'  src="/blog/6. From Concept to Creation How Fillerboy Delivers Custom Mineral Solutions.jpg" width={100} height={300}/>
										</div>
										<div className="col-md-12 dolomite_text">
											{/* <h3>What is Dolomite</h3> */}
											<p>As a B2B enterprise, we specialize in providing bespoke mineral formulations to suit the diverse requirements of the paint, cement, ceramics, rubber, pharmaceuticals, plastics, glass, detergents, paper, steel, and filtration industries. Our priority is customer satisfaction, and we are committed to meeting every demand, no matter how complex, through unparalleled performance and innovative mineral solutions. Our experienced team of professionals utilizes state-of-the-art technology and extensive knowledge to create custom blends that enhance your processes and product quality.</p>
											<p>Visit our website, www.fillerboypvtltd.com, to learn more about how we can help grow your business. For added convenience, we're also available on social media platforms, such as Instagram, Facebook, LinkedIn, and Twitter, and on WhatsApp to welcome inquiries.</p>
											<p>Collaborate with Fillerboy Pvt. Ltd to unleash your industry's potential and achieve heightened efficiency, cost reduction, and superior product quality with our customized mineral solutions.</p>
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