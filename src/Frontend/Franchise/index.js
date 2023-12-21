import React, { Fragment } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  Row,
  CardText,
  Col,
  Form,
} from "reactstrap";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Index = () => {
  var settings = {
    // dots: true,
    infinite: true,
    autoplay: true,
    pauseOnHover: true,
    draggable: true,
    arrows: true,
    swipeToSlide: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div>
      <div className="bg-image d-flex justify-content-between">
        <div className="d-flex align-items-start flex-column logo-div">
          <div className="logo mt-4">
            <img src="/assets/img/franchise-logo.png" alt="Rajveda-Franchise" />
          </div>
          <div className="banner-business d-flex flex-column">
            <span className="business-text">
              {" "}
              Business grow karna <br /> hua aur bhi easy,
            </span>
            <span className="sirf-text">
              {" "}
              <Fragment className="border-sirf-text">Sirf</Fragment> aapke liye.
            </span>
            <span className="yoyo-text">
              {" "}
              OYO baniye sirf 30 <br />
              minutes mein.
            </span>
          </div>
        </div>

        <div className="menu text-end d-flex align-items-end flex-column mt-4 mx-3">
          <span className="english-text">English</span>
          <span className="mobile-text">0124-6851819</span>
          <span className="call-us-text">
            Call us to List your Property now
          </span>
        </div>
      </div>
      <section className="card-box">
        <div className="container">
          <div className="p-5">
            <h2 className="card-upper-text">
              OYO ki duniya ko explore karein!
            </h2>
            <span className="card-upper-text-two">
              Aapki Growth ke liye transparent policies aur easy payments,
              hamesha!
            </span>
          </div>
          <div>
            <Slider {...settings}>
              <Card className="card-area">
                <img
                  alt="Rajveda-franchise"
                  src="/assets/img/card-2.jpeg"
                  className="card-image"
                />
                <CardBody>
                  <CardTitle tag="h5">Pricing Policy</CardTitle>
                  <CardText>
                    Lorem is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's
                  </CardText>
                </CardBody>
              </Card>

              <Card className="card-area">
                <img
                  alt="Rajveda-franchise"
                  src="/assets/img/card-1.jpeg"
                  className="card-image"
                />
                <CardBody>
                  <CardTitle tag="h5">Signup-Process</CardTitle>
                  <CardText>
                    Lorem is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's
                  </CardText>
                </CardBody>
              </Card>

              <Card className="card-area">
                <img
                  alt="Rajveda-franchise"
                  src="/assets/img/card-3.jpeg"
                  className="card-image"
                />
                <CardBody>
                  <CardTitle tag="h5">Commision-Charges</CardTitle>
                  <CardText>
                    Lorem is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's
                  </CardText>
                </CardBody>
              </Card>

              <Card className="card-area">
                <img
                  alt="Rajveda-franchise"
                  src="/assets/img/card-3.jpeg"
                  className="card-image"
                />
                <CardBody>
                  <CardTitle tag="h5">Commision-Charges</CardTitle>
                  <CardText>
                    Lorem is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's
                  </CardText>
                </CardBody>
              </Card>

              <Card className="card-area">
                <img
                  alt="Rajveda-franchise"
                  src="/assets/img/card-3.jpeg"
                  className="card-image"
                />
                <CardBody>
                  <CardTitle tag="h5">Commision-Charges</CardTitle>
                  <CardText>
                    Lorem is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's
                  </CardText>
                </CardBody>
              </Card>
            </Slider>
          </div>
        </div>
      </section>
      <section className="card-box-2">
        <div className="container">
          <div className="p-5">
            <h2 className="card-upper-text">
              Patrons humein pasand karte hai!
            </h2>
            <span className="card-upper-text-two">
              India me hazaron hotels aur home owners ka trust hai OYO pe.
              Suniye unke ache experiences.
            </span>
          </div>
          <div>
          <Slider {...settings}>
              <Card className="card-area">
                <img
                  alt="Rajveda-franchise"
                  src="/assets/img/card-2.jpeg"
                  className="card-image"
                />
                <CardBody>
                  <CardTitle tag="h5">Pricing Policy</CardTitle>
                  <CardText>
                    Lorem is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's
                  </CardText>
                </CardBody>
              </Card>

              <Card className="card-area">
                <img
                  alt="Rajveda-franchise"
                  src="/assets/img/card-1.jpeg"
                  className="card-image"
                />
                <CardBody>
                  <CardTitle tag="h5">Signup-Process</CardTitle>
                  <CardText>
                    Lorem is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's
                  </CardText>
                </CardBody>
              </Card>

              <Card className="card-area">
                <img
                  alt="Rajveda-franchise"
                  src="/assets/img/card-3.jpeg"
                  className="card-image"
                />
                <CardBody>
                  <CardTitle tag="h5">Commision-Charges</CardTitle>
                  <CardText>
                    Lorem is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's
                  </CardText>
                </CardBody>
              </Card>

              <Card className="card-area">
                <img
                  alt="Rajveda-franchise"
                  src="/assets/img/card-3.jpeg"
                  className="card-image"
                />
                <CardBody>
                  <CardTitle tag="h5">Commision-Charges</CardTitle>
                  <CardText>
                    Lorem is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's
                  </CardText>
                </CardBody>
              </Card>

              <Card className="card-area">
                <img
                  alt="Rajveda-franchise"
                  src="/assets/img/card-3.jpeg"
                  className="card-image"
                />
                <CardBody>
                  <CardTitle tag="h5">Commision-Charges</CardTitle>
                  <CardText>
                    Lorem is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's
                  </CardText>
                </CardBody>
              </Card>
            </Slider>
            </div>
        </div>
      </section>
      <section className="black-border-box">
        <div></div>
      </section>
      <section className="card-box-black">
        <div className="container">
          <div className="p-5">
            <h2 className="card-upper-text">OYO kyun join karein?</h2>
            <span className="card-upper-text-two">
              OYO ke advanced tools se aapke business me jyada fayeda hoga.
            </span>
          </div>
          <div>
          <Slider {...settings}>
              <Card className="card-area">
                <img
                  alt="Rajveda-franchise"
                  src="/assets/img/card-2.jpeg"
                  className="card-image"
                />
                <CardBody>
                  <CardTitle tag="h5">Pricing Policy</CardTitle>
                  <CardText>
                    Lorem is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's
                  </CardText>
                </CardBody>
              </Card>

              <Card className="card-area">
                <img
                  alt="Rajveda-franchise"
                  src="/assets/img/card-1.jpeg"
                  className="card-image"
                />
                <CardBody>
                  <CardTitle tag="h5">Signup-Process</CardTitle>
                  <CardText>
                    Lorem is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's
                  </CardText>
                </CardBody>
              </Card>

              <Card className="card-area">
                <img
                  alt="Rajveda-franchise"
                  src="/assets/img/card-3.jpeg"
                  className="card-image"
                />
                <CardBody>
                  <CardTitle tag="h5">Commision-Charges</CardTitle>
                  <CardText>
                    Lorem is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's
                  </CardText>
                </CardBody>
              </Card>

              <Card className="card-area">
                <img
                  alt="Rajveda-franchise"
                  src="/assets/img/card-3.jpeg"
                  className="card-image"
                />
                <CardBody>
                  <CardTitle tag="h5">Commision-Charges</CardTitle>
                  <CardText>
                    Lorem is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's
                  </CardText>
                </CardBody>
              </Card>

              <Card className="card-area">
                <img
                  alt="Rajveda-franchise"
                  src="/assets/img/card-3.jpeg"
                  className="card-image"
                />
                <CardBody>
                  <CardTitle tag="h5">Commision-Charges</CardTitle>
                  <CardText>
                    Lorem is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's
                  </CardText>
                </CardBody>
              </Card>
            </Slider>
            </div>
        </div>
      </section>
      <section className="card-box-3">
        <div className="container">
          <div className="p-5">
            {/* <h2 className="card-upper-text">OYO kyun join karein?</h2>
            <span className="card-upper-text-two">
              OYO ke advanced tools se aapke business me jyada fayeda hoga.
            </span> */}
          </div>
          <Row>
            <Col md={8}>
              <iframe
                width="650"
                height="445"
                src="https://www.youtube.com/embed/tgbNymZ7vqY"
              ></iframe>
            </Col>
            <Col md={4}>
              <h3>OYO me list karein</h3>
              <span>
                Join us. Hum ensure karenge poora support taki apka business
                badhta rahe.
              </span>
            </Col>
          </Row>
        </div>
      </section>
      <section className="card-box-4">
        <div className="container">
          <div className="p-5">
            <h2 className="card-upper-text">Humare saath connected rahe!</h2>
            <span className="card-upper-text-two">
              Sign up karein aur janiye OYO se judne ke fayede.
            </span>
          </div>
          <Form>
            <div className="d-flex justify-content-center align-items-center">
              <input
                type="text"
                className="join-yoyo-input btn-shadow text-center"
                placeholder="Apna mobile number enter krein"
              />
            </div>

            <div className="d-flex justify-content-center align-items-center">
              <a
                href="#"
                className="join-yoyo-submit btn-shadow text-center text-decoration-none"
              >
                Submit
              </a>
            </div>
          </Form>
        </div>
      </section>
      {/* <section>
        <div className="footer-bg d-flex">
          <ul className="mt-3">
            <strong className="footer-border">About</strong>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#"> Official OYO Blog</a>
            </li>
            <li>
              <a href="#">OYO Saathi</a>
            </li>
          </ul>
          <ul className="mt-3">
            <strong className="footer-border">List Property</strong>
            <li>
              <a href="#">Term and Conditions</a>
            </li>
            <li>
              <a href="#">Privacy policy</a>
            </li>
          </ul>
        </div>
      </section> */}
      <div className="fixed-footer">
        <div className="d-flex justify-content-center align-items-center">
          <a
            href="#"
            className="join-yoyo-button btn-shadow text-center text-decoration-none"
          >
            Join YOYO
          </a>
        </div>
      </div>
    </div>
  );
};

export default Index;
