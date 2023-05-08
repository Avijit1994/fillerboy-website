import Head from "@/components/Header";
import Navbar from "@/components/NavbarScreen";
import Test from "@/components/Test";
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image'
import Footer from "@/components/footer";

export default function () {
    return (
        <>
            {/* <Head title="about of me"/>
            <Navbar/> */}
            <Head title="Fillerboy | About" />
        <div>
        <main ClassName="main">

		<section ClassName="contact">
			<div ClassName="container">
				<h1 ClassName="contact_txt">Contact Us</h1>
				<div ClassName="row contact_top">
					<div ClassName="col-md-6 map">
						{/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3627.6882308898757!2d73.76649991455301!3d24.599953584177424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e615abf7bd2d%3A0xf8986780236208fd!2s32-C%2C%20Nakoda%20Nagar%2C%20Udaipur%2C%20Rajasthan%20313001!5e0!3m2!1sen!2sin!4v1681226549778!5m2!1sen!2sin" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
					</div>
					<div ClassName="col-md-6 info">
						<ul>
							<li><Image src="/placeholder.png" width={30} height={30} alt='fillerboy'  /> Address <br/>
								<p>32-C, Naokda Nagar, Udaipur 313001, Rajasthan, India</p>
							</li>
							<li><Image src="/call.png" width={30} height={30} alt='fillerboy' /> Phone <br/>
								<a href="call:+91 81421 01923">+91 81421 01923</a>
							</li>
							<li><Image src="/mail.png" width={30} height={30}  alt='fillerboy' /> Email <br/>
								<a href="email:info@fillerboy.com">info@fillerboy.com</a>
							</li>
						</ul>
					</div>
				</div>
				<div ClassName="contact_bot">
					<h1>Drop Us a Line</h1>
					<form ClassName="form">
						<div ClassName="row con_bx">
							<div ClassName="col-md-6">
								<input type="text" name="" placeholder="First Name" />
							</div>
							<div ClassName="col-md-6">
								<input type="text" name="" placeholder="Last Name" />
							</div>
							<div ClassName="col-md-6">
								<input type="text" name="" placeholder="Email" />
							</div>
							<div ClassName="col-md-6">
								<input type="text" name="" placeholder="Contact Number" />
							</div>
							<div ClassName="col-md-12">
								<textarea type="text" name="" placeholder="Message..."></textarea>
							</div>
							<div ClassName="col-md-12 text-center">
								<button ClassName="submit_btn">Submit</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</section>





	</main>
        </div>
            

       
				<Footer/>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>

        </>
    )
}