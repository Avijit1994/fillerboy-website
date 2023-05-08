import Head from "@/components/Header";
import Navbar from "@/components/NavbarScreen";
import Test from "@/components/Test";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "@/components/footer";
import Image from 'next/image'
import Link from 'next/link';

export default function product() {
    return (
        <>
            {/* <Head title="about of me"/>
            <Navbar/> */}
            <Head title="Best Manufacturers & suppliers of Diatomite in Rajasthan, India" />
            
                <div>
                    <main className="main">

                        <section className="product">
                            <div className="container">
                                <h1>Products</h1>
                                <div className="pro_panel">
                                    <div className="pro_box">
                                        <Image alt='fillerboy'  src="/product/DOLOMITE.png" width={200} height={300} />

                                        <div className="details">
                                        <Link href="/product/Dolomite"><h5>Dolomite</h5></Link>
                                        </div>
                                    </div>
                                    <div className="pro_box">
                                        <Image  alt='fillerboy'  src="/product/CALCITE.png" width={200} height={300} />

                                        <div className="details">
                                        <Link href="/product/Calcite"><h5>Calcite</h5></Link>
                                        </div>
                                    </div>
                                    <div className="pro_box">
                                        <Image alt='fillerboy'  src="/product/SOAPSTONE.png" width={200} height={300} />

                                        <div className="details">
                                        <Link href="/product/Soapstone"><h5>Soapstone</h5></Link>
                                        </div>
                                    </div>
                                    <div className="pro_box">
                                        <Image alt='fillerboy'  src="/product/CHINA-CLAY.png" width={200} height={300} />

                                        <div className="details">
                                        <Link href="/product/China-Clay"><h5>China-Clay</h5></Link>
                                        </div>
                                    </div>
                                    <div className="pro_box">
                                        <Image alt='fillerboy'  src="/product/CALCINED-CLAY.png" width={200} height={300} />

                                        <div className="details">
                                        <Link href="/product/Calcined-clay"><h5>Calcined-clay</h5></Link>
                                        </div>
                                    </div>
                                    <div className="pro_box">
                                        <Image alt='fillerboy'  src="/product/WOLLASTONITE.png" width={200} height={300} />

                                        <div className="details">
                                        <Link href="/product/Wollastonite"><h5>Wollastonite</h5></Link>
                                        </div>
                                    </div>
                                    <div className="pro_box">
                                        <Image alt='fillerboy'  src="/product/QUARTZ.png" width={200} height={300} />

                                        <div className="details">
                                        <Link href="/product/Quartz"><h5>Quartz</h5></Link>
                                        </div>
                                    </div>
                                    <div className="pro_box">
                                        <Image alt='fillerboy'  src="/product/FELDSPAR.png" width={200} height={300} />

                                        <div className="details">
                                        <Link href="/product/Feldspar"><h5>Feldspar</h5></Link>
                                        </div>
                                    </div>
                                    <div className="pro_box">
                                        <Image alt='fillerboy'  src="/product/MANGANESE.png" width={200} height={300} />

                                        <div className="details">
                                        <Link href="/product/Manganese"><h5>Manganese</h5></Link>
                                        </div>
                                    </div>
                                    <div className="pro_box">
                                        <Image  alt='fillerboy'  src="/product/PRECIPITATED-CALCIUM-CARBONATE.png" width={200} height={300} />

                                        <div className="details">
                                        <Link href="/product/Precipitated-Calcium-Carbonate"><h5>Precipitated-Calcium-Carbonate</h5></Link>
                                        </div>
                                    </div>
                                    <div className="pro_box">
                                        <Image alt='fillerboy'  src="/product/HYDRATED-LIME.png" width={200} height={300} />

                                        <div className="details">
                                        <Link href="/product/Hydrated-Lime"><h5>Hydrated-Lime</h5></Link>
                                        </div>
                                    </div>
                                    <div className="pro_box">
                                        <Image alt='fillerboy'  src="/product/DOLOMITE.png" width={200} height={300} />

                                        <div className="details">
                                        <Link href="/product/Diatomite"><h5>Diatomite</h5></Link>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </section>



                    




                    </main>
                </div>

      
                <Footer />

        </>
    )
}