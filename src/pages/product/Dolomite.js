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
							<h1 className="product_detail_txt">Dolomite</h1>
							<div className="row">
								<div className="col-md-8 product_detail_left">
									<h3>Best Manufacturers & suppliers of Dolomite in India</h3>
									<p>The greatest Dolomite mineral in India is available from Fillerboy Pvt Ltd for the most affordable price. We are one of Rajasthan's largest dolomite suppliers to the concrete and detergent industries. Fillerboy Pvt Ltd offers dolomite mineral at the most affordable costs in India and worldwide. Dolomite provider Fillerboy Pvt Ltd . is widely recognized. Our services deliver Dolomite to our client's doorsteps while purifying and enhancing its richness.</p>
										</div>
										<div className="col-md-4 product_detail_right">
											<Image  alt='fillerboy'  src="/product/DOLOMITE.png" width={200} height={300}/>
										</div>
										<div className="col-md-12 dolomite_text">
											<h3>What is Dolomite</h3>
											<p>With the chemical formula CaMg(CO3)2, calcium magnesium carbonate, generally known as dolomite, is a well-known sedimentary rock. Although Dolomite contains more Magnesium Carbonate components, Limestone and Dolomite have extremely similar chemical compositions and uses. The iron and steel industries utilize dolomite as a flux or sintering agent. Still, due to its increased MgO concentration, it may also be used as a fertilizer, a calcium and magnesium supplement for livestock feed (CaMg(CO3)2), and as a component in the manufacture of glass, ceramics, and bricks.<br/>
											Dolomite only occurs in Cenozoic rock beds and frequently coexists with limestones and evaporates. It is less common than limestone. Dolomite was created as a magnesium substitute for limestone or lime mud prior to the lithification process. Calcite is transformed into dolomite by a process known as dolomitization, and any intermediate product is referred to as dolomite limestone.</p>
											</div>
												<div className="col-md-12 dolomite_point text-center">
													<h3>Uses and Applications of Dolomite</h3>
													<ul>
														<li><Link href="#"><i className="fa fa-circle"></i> Concrete</Link></li>
														<li><Link href="#"><i className="fa fa-circle"></i> Detergent</Link></li>
														<li><Link href="#"><i className="fa fa-circle"></i> Agriculture</Link></li>
														<li><Link href="#"><i className="fa fa-circle"></i> Rubber</Link></li>
														<li><Link href="#"><i className="fa fa-circle"></i> Ceramic</Link></li>
														<li><Link href="#"><i className="fa fa-circle"></i> Glass</Link></li>
														
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