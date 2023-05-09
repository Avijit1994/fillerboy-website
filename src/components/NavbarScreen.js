import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'next/image'
function NavbarScreen() {
  return (


    <nav className="navbar navbar-expand-lg  blur border-radius-xl top-0 z-index-fixed shadow box-shadow: 5px 10px #FF5C5C; position-absolute my-3 py-2 start-0 end-0 mx-4">
      <div className="container-fluid px-0 box-shadow: 5px 10px #FF5C5C; " >
        <a className="navbar-brand font-weight-bolder ms-sm-3" href="https://demos.creative-tim.com/material-kit/index" rel="tooltip" title="Designed and Coded by Creative Tim" data-placement="bottom" target="_blank">
          {/* <Image src="/tutione.png" alt="Vercel Logo" width={120} height={24} priority /> */}
          <h3>AVIJIT</h3>
        </a>
        <button className="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon mt-2">
            <span className="navbar-toggler-bar bar1"></span>
            <span className="navbar-toggler-bar bar2"></span>
            <span className="navbar-toggler-bar bar3"></span>
          </span>
        </button>
        <div className="collapse navbar-collapse pt-3 pb-2 py-lg-0 w-100" id="navigation">
          <ul className="navbar-nav navbar-nav-hover ms-auto">
          

            
          <Link href="https://www.creative-tim.com/product/material-kit-pro" className="btn btn-sm  bg-gradient-primary  mb-0 me-1 mt-2 mt-md-0">About</Link>
          <Link href="https://www.creative-tim.com/product/material-kit-pro" className="btn btn-sm  bg-gradient-primary  mb-0 me-1 mt-2 mt-md-0">Product</Link>
          <LInk href="https://www.creative-tim.com/product/material-kit-pro" className="btn btn-sm  bg-gradient-primary  mb-0 me-1 mt-2 mt-md-0">Service</LInk>
            
            <li className="nav-item my-auto ms-3 ms-lg-0">

              <a href="https://www.creative-tim.com/product/material-kit-pro" className="btn btn-sm  bg-gradient-primary  mb-0 me-1 mt-2 mt-md-0">Contact us</a>

            </li>
          </ul>
        </div>
      </div>
    </nav>

  );
}

export default NavbarScreen;