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
			<body>
				<main className="main">

					<section className="product_detail">
						<div className="container">
							<h1 className="product_detail_txt">Dolomite</h1>
							<div className="row">
								<div className="col-md-8 product_detail_left">
									<h3>Best Manufacturers & suppliers of Dolomite in India</h3>
									<p>The FillerBoy Pvt. Ltd is one of the leading companies
										when it comes to supplying industrial minerals. Our
										team is immensely dedicated to providing <br/>
											The FillerBoy Pvt. Ltd is one of the leading companies
											when it comes to supplying industrial minerals. Our
											team is immensely dedicated to providing </p>
										</div>
										<div className="col-md-4 product_detail_right">
											<Image alt='fillerboy'  src="/blog1.png" width={100} height={300}/>
										</div>
										<div className="col-md-12 dolomite_text">
											<h3>What is Dolomite</h3>
											<p>With the chemical formula CaMg(CO3)2, calcium magnesium carbonate, generally known as dolomite, is a well-known sedimentary rock. Although Dolomite contains more Magnesium Carbonate components, Limestone and Dolomite have extremely similar chemical compositions and uses. The iron and steel industries utilize dolomite as a flux or sintering agent. Still, due to its increased MgO concentration, it may also be used as a fertilizer, a calcium and magnesium supplement for livestock feed (CaMg(CO3)2), and as a component in the manufacture of glass, ceramics, and bricks.<br/>
												With the chemical formula CaMg(CO3)2, calcium magnesium carbonate, generally known as dolomite, is a well-known sedimentary rock. Although Dolomite contains more Magnesium Carbonate components, Limestone and Dolomite have extremely similar chemical compositions and uses. The iron and steel industries utilize dolomite as a flux or sintering agent. Still, due to its increased MgO concentration, it may also be used as a fertilizer, a calcium and magnesium supplement for livestock feed (CaMg(CO3)2), and as a component in the manufacture of glass, ceramics, and bricks.</p>
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

					</body>
					<Footer />

				</>
				)
}