import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
// import logo from "../../public/rajveda-logo.png"

function FrontFooter(props) {
  return (
    <>
      <footer className="pt-5 frontend-footer">
        <div>
          <div className="d-flex justify-content-between mx-5">
            <h3>Rajveda</h3>
            <h4>
              World's leading chain of hotels and homes Join our network and
              grow your business!
            </h4>
            <h4
              className="bg-white text-muted p-2"
              style={{ fontSize: "15px" }}
            >
              List your Property
            </h4>
          </div>
          <div className="foot-one p-2"></div>
          <div class="row mx-5 mt-4">
            <div class="col-md-4 border-1 ml-3">
              <span>Download OYO app for exciting offers.</span>
              <ul class="list-unstyled">
                <li className="pb-2">
                  <img  src="/assets/img/rajveda-logo.png" alt="rajveda" style={{width:"200px"}} />
                </li>
              </ul>
            </div>
            <div class="col-md-2">
              <ul class="list-unstyled">
                <li className="pb-2">
                  <a href="/home/about">About Us</a>
                </li>
                <li className="pb-2">
                  <a href="#">Teams / Careers</a>
                </li>
                <li className="pb-2">
                  <a href="#">Blogs</a>
                </li>
                <li className="pb-2">
                  <a href="#">Support</a>
                </li>
              </ul>
            </div>
            <div class="col-md-2 border-1">
              <ul class="list-unstyled">
                <li className="pb-2">
                  <a href="#">Official YOYO Blog</a>
                </li>
                <li className="pb-2">
                  <a href="#">Invester Relations</a>
                </li>
                <li className="pb-2">
                  <a href="#">OYO Cicle</a>
                </li>
                <li className="pb-2">
                  <a href="#">OYO Frames</a>
                </li>
              </ul>
            </div>
            <div class="col-md-2">
              <ul class="list-unstyled">
                <li className="pb-2">
                  <a href="#">Terms & Conditions</a>
                </li>
                <li className="pb-2">
                <li className="pb-2">
                  <a href="#">Guest Policies</a>
                </li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li className="pb-2">
                  <a href="#">Trust And safety</a>
                </li>
              </ul>
            </div>
            <div class="col-md-2">
              <ul class="list-unstyled">
                <li className="pb-2">
                  <a href="#">Cyber Security</a>
                </li>
                <li className="pb-2">
                <li className="pb-2">
                  <a href="#">Cyber Security Awareness</a>
                </li>
                  <a href="#">Responsible Disclosure</a>
                </li>
                <li className="pb-2">
                  <a href="#">Advertise your Homes </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="foot-two p-4 mx-5"></div>
          <div class="row mx-5 mt-4">
           
            <h5>Rajveda Clinics</h5>
            <div class="col-md-2">
              <ul class="list-unstyled">
                <li className="pb-2">
                  <a href="/home/about">Hotels near me</a>
                </li>
                <li className="pb-2">
                  <a href="#">Hotels in Manali</a>
                </li>
                <li className="pb-2">
                <a href="#">Hotels in Nanital</a>
                </li>
                <li className="pb-2">
                <a href="#">Hotels in Mount Abu</a>
                </li>
                <li className="pb-2">
                <a href="#">Hotels in Agra</a>
                </li>
                <li className="pb-2">
                <a href="#">Hotels in Haridwar</a>
                </li>
                <li className="pb-2">
                <a href="#">Hotels in Gurgaon</a>
                </li>
                <li className="pb-2">
                <a href="#">Hotels in Coimbatore</a>
                </li>
                <li className="pb-2">
                <a href="#">OYO Hotel UK</a>
                </li>
                <li className="pb-2">
                <a href="#">OYO Vacation Homes in Europe</a>
                </li>
              </ul>
            </div>
            <div class="col-md-2">
              <ul class="list-unstyled">
                <li className="pb-2">
                <a href="#">Hotels in Goa</a>
                </li>
                <li className="pb-2">
                <a href="#">Hotels in Udaipur</a>
                </li>
                <li className="pb-2">
                <a href="#">Hotels in Lonavala</a>

                </li>
                <li className="pb-2">
                <a href="#">Hotels in Kodaikanal</a>

                </li>
                <li className="pb-2">
                <a href="#">Hotels in Gangtok</a>

                </li>
                <li className="pb-2">
                <a href="#">Hotels in Kolkata</a>

                </li>
                <li className="pb-2">
                <a href="#">Hotels in Mandarmoni</a>
                </li>
                <li className="pb-2">
                <a href="#">Hotels in Kasuli</a>
                </li>
                <li className="pb-2">
                <a href="#">OYO Hotel USA</a>
                </li>
                <li className="pb-2">
                <a href="#">Homes in Scandinavia</a>
                </li>
              </ul>
            </div>
            <div class="col-md-2">
              <ul class="list-unstyled">
                <li className="pb-2">
                <a href="#">Hotels in Puri</a>
                </li>
                <li className="pb-2">
                <li className="pb-2">
                  <a href="#">Hotels in Mussoorie</a>
                </li>
                  <a href="#">Hotels in Munnar</a>
                </li>
                <li className="pb-2">
                  <a href="#">Hotels in Hyderabad</a>
                </li>
                <li className="pb-2">
                  <a href="#">Hotels in Coorg</a>
                </li>
                <li className="pb-2">
                  <a href="#">Hotels in Ahmedabad</a>
                </li>
                <li className="pb-2">
                  <a href="#">Hotels in Daman</a>
                </li>
                <li className="pb-2">
                  <a href="#">Hotels in Dehradun</a>
                </li>
                <li className="pb-2">
                  <a href="#">OYO Hotel Mexico</a>
                </li>
                <li className="pb-2">
                  <a href="#">Homes in Southern Europe</a>
                </li>
              </ul>
            </div>
            <div class="col-md-2">
              <ul class="list-unstyled">
                <li className="pb-2">
                  <a href="#">Hotels in Mahabaleshwar</a>
                </li>
                <li className="pb-2">
                <li className="pb-2">
                  <a href="#">Hotels in Pondicherry</a>
                </li>
                  <a href="#">Hotels in Bangalore</a>
                </li>
                <li className="pb-2">
                  <a href="#">Hotels in Pune</a>
                </li>
                <li className="pb-2">
                  <a href="#">Hotels in Chennai</a>
                </li>
                <li className="pb-2">
                  <a href="#">Hotels in Shillong</a>
                </li>
                <li className="pb-2">
                  <a href="#">Hotels in Yercaud</a>
                </li>
                <li className="pb-2">
                  <a href="#">Travel Guide</a>
                </li>
                <li className="pb-2">
                  <a href="#">OYO Hotel Brasil</a>
                </li>
                <li className="pb-2">
                  <a href="#">Belvilla Holiday Homes</a>
                </li>
              </ul>
            </div>
            <div class="col-md-2">
              <ul class="list-unstyled">
                <li className="pb-2">
                  <a href="#">Hotels in Jaipur</a>
                </li>
                <li className="pb-2">
                <li className="pb-2">
                  <a href="#">Hotels in Delhi</a>
                </li>
                  <a href="#">Hotels in Mysore</a>
                </li>
                <li className="pb-2">
                  <a href="#">Hotels in Chandigarh</a>
                </li>
                <li className="pb-2">
                  <a href="#">Hotels in Tirupati</a>
                </li>
                <li className="pb-2">
                  <a href="#">Hotels in Rishikesh</a>
                </li>
                <li className="pb-2">
                  <a href="#">Hotels in Amritsar</a>
                </li>
                <li className="pb-2">
                  <a href="#">All Cities Hotels</a>
                </li>
                <li className="pb-2">
                  <a href="#">Hotels in Japan</a>
                </li>
                <li className="pb-2">
                  <a href="#">Traum Vacation Apartments</a>
                </li>
              </ul>
            </div>
            <div class="col-md-2">
              <ul class="list-unstyled">
                <li className="pb-2">
                  <a href="#">Hotels in Shimla</a>
                </li>
                <li className="pb-2">
                <li className="pb-2">
                  <a href="#">Hotels in Mumbai</a>
                </li>
                  <a href="#">Hotels in Darjeeling</a>
                </li>
                <li className="pb-2">
                  <a href="#">Hotels in Shirdi</a>
                </li>
                <li className="pb-2">
                  <a href="#">Hotels in Dalhousie</a>
                </li>
                <li className="pb-2">
                  <a href="#">Hotels in Varanasi</a>
                </li>
                <li className="pb-2">
                  <a href="#">Hotels in Madurai</a>
                </li>
                <li className="pb-2">
                  <a href="#">Coupons</a>
                </li>
                <li className="pb-2">
                  <a href="#">OYO Hotel Indonesia</a>
                </li>
                <li className="pb-2">
                  <a href="#">Traum Holiday Homes</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="foot-two p-4 mx-5"></div>
          <div className="d-flex justify-content-between mx-5 p-4">
            <div>
              <i className="fa-brands fa-facebook fa-1x me-2"></i>
              <i class="fa-brands fa-instagram fa-1x me-2"></i>
              <i class="fa-brands fa-twitter fa-1x"></i>
            </div>
            <p>2023 © Oravel Stays Limited</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default FrontFooter;
