import { useContext } from "react";
import "./Footer.style.css";
import { useAppDataContext } from "../../context/AppDataContext";
import { Spinner } from "react-bootstrap";

const Footer = () => {
  
    return (
        <footer className="footer-component text-center text-lg-start text-white" style={{backgroundColor: '#1c2331'}}>
          {/* Section: Social media */}
          <section className="d-flex justify-content-between p-4" style={{backgroundColor: '#6351ce'}}>
            
          </section>
          <section >
            <div className="container text-center text-md-start mt-5">
              {/* Grid row */}
              <div className="row mt-3">
                {/* Grid column */}
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  {/* Content */}
                  <h6 className="text-uppercase fw-bold">5C20</h6>
                  <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px', backgroundColor: '#7c4dff', height: '2px'}} />
                  <p>
                    Group project for se2 course
                  </p>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold">Products</h6>
                  <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px', backgroundColor: '#7c4dff', height: '2px'}} />
                  <p>
                    <a href="#!" className="text-white">MDBootstrap</a>
                  </p>
                  
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold">Useful links</h6>
                  <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px', backgroundColor: '#7c4dff', height: '2px'}} />
                  <p>
                    <a href="#!" className="text-white">Your Account</a>
                  </p>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold">Contact</h6>
                  <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px', backgroundColor: '#7c4dff', height: '2px'}} />
                  <p><i className="fas fa-home mr-3" /> Hanoi University</p>
                  <p><i className="fas fa-envelope mr-3" /> 5c20@hanu.edu.vn</p>
                  <p><i className="fas fa-phone mr-3" /> + 8487654321</p>
                </div>
                {/* Grid column */}
              </div>
              {/* Grid row */}
            </div>
          </section>
          {/* Section: Links  */}
          {/* Copyright */}
          <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
            © 2023 Copyright:
            <a className="text-white" href="https://mdbootstrap.com/">5C20.hanu</a>
          </div>
          {/* Copyright */}
        </footer>
      );

  
}

export default Footer;