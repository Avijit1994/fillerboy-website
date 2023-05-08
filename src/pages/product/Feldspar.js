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
							<h1 className="product_detail_txt">Calcite</h1>
							<div className="row">
								<div className="col-md-8 product_detail_left">
									<h3>Best Manufacturers & suppliers of Calcite in India</h3>
									<p>The best Calcite mineral in India can be purchased from Fillerboy Pvt Ltd for the lowest cost. We are a significant source of calcite for cement, paint, plastic, polymer, and other industries in India. Calcite mineral is provided by Fillerboy Pvt Ltd . for the lowest prices both in India and internationally. We bring Calcite to our client's doorsteps while purifying and boosting its richness by employing our services.</p>
										<p>Fillerboy , one of the leading Calcite Suppliers in India, provides high-quality Calcite to a variety of industries around the world.</p>
                                        </div>
										<div className="col-md-4 product_detail_right">
											<Image alt='fillerboy'  src="/product/DOLOMITE.png" width={200} height={300}/>
										</div>
										<div className="col-md-12 dolomite_text">
											<h3>What is Calcite:</h3>
											<p>Calcite mineral properties make this a useful and magical stone. It is one of the most common minerals on earth. Usually white, calcite is a member of the carbonate mineral group and is found in a wide variety of localities and in fine colors which add to its popularity as a collector mineral. Limestone and marble are mainly calcite so it is one of the most common minerals for sheer volume and quantity. a mineral composed primarily of calcium carbonate (CaCO3 ). It is the second-most abundant mineral on Earth, behind quartz. Calcite crystallizes in the hexagonal system and has a wide range of crystalline forms.
											</p>
											</div>
												<div className="col-md-12 dolomite_point text-center">
													<h3>Uses and Applications of Calcite</h3>
													<ul>
														<li><a href="#"><i className="fa fa-circle"></i> Cement Industry</a></li>
														<li><a href="#"><i className="fa fa-circle"></i> Paint Industry</a></li>
														<li><a href="#"><i className="fa fa-circle"></i> Plastic Industry</a></li>
														<li><a href="#"><i className="fa fa-circle"></i> Polymer Industry</a></li>
														<li><a href="#"><i className="fa fa-circle"></i> Pharmaceutical Industry</a></li>
														
														
													</ul>
													{/* <ul>
														<li><a href="#"><i className="fa fa-circle"></i> Rubber</a></li>
														<li><a href="#"><i className="fa fa-circle"></i> Ceramic</a></li>
														<li><a href="#"><i className="fa fa-circle"></i> Glass</a></li>
													</ul> */}
												</div>
										</div>
								</div>
							</section>




						</main>

				
					<Footer />

				</>
				)
}