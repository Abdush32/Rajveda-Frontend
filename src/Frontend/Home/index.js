import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import {
  Button,
  Col,
  Card,
  Container,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import ReactConfirmPopup from "react-confirm-popup";

const Index = () => {
  const PerRow = 6;
  const [showMore, setShowMore] = useState(PerRow);
  const [open, setOpen] = useState(false);
  const [popData, setPopData] = useState("");
  const [focusAfterClose, setFocusAfterClose] = useState(true);

  const toggleShowMore = () => {
    setShowMore(showMore + PerRow);
  };

  const openPopup = (data) => {
    setOpen(true);
    setPopData(data);
  };
  const handleClose = () => {
    setOpen();
    setPopData(null);
  };
  const cols = [
    {
      id: "1",
      imgSrc: "/assets/img/thyroid.png",
      altText: "Rajveda-image",
      diseaseText: "Thyroid",
      diseaseTextTwo: "Treatments",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
    },
    {
      id: "2",
      imgSrc: "/assets/img/diabities.png",
      altText: "Rajveda-image",
      diseaseText: "Diabetes",
      diseaseTextTwo: "Treatment",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
    },
    {
      id: "3",
      imgSrc: "/assets/img/headache.png",
      altText: "Rajveda-image",
      diseaseText: "Migraine /",
      diseaseTextTwo: "Headache",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
    },
    {
      id: "4",
      imgSrc: "/assets/img/blood-pressure.png",
      altText: "Rajveda-image",
      diseaseText: "Blood",
      diseaseTextTwo: "Pressure",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
    },
    {
      id: "5",
      imgSrc: "/assets/img/abdomen.png",
      altText: "Rajveda-image",
      diseaseText: "Abdominal",
      diseaseTextTwo: "Disease",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
    },
    {
      id: "6",
      imgSrc: "/assets/img/skin-disease.png",
      altText: "Rajveda-image",
      diseaseText: "Skin",
      diseaseTextTwo: "Disease",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
    },
    {
      id: "7",
      imgSrc: "/assets/img/piles.png",
      altText: "Rajveda-image",
      diseaseText: "Piles &",
      diseaseTextTwo: "Kshar Sutra",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
    },
    {
      id: "8",
      imgSrc: "/assets/img/eye.png",
      altText: "Rajveda-image",
      diseaseText: "Eyes",
      diseaseTextTwo: "Treatment",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
    },
    {
      id: "9",
      imgSrc: "/assets/img/obesity.png",
      altText: "Rajveda-image",
      diseaseText: "Obesity",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
    },
    {
      id: "10",
      imgSrc: "/assets/img/wheelchair.png",
      altText: "Rajveda-image",
      diseaseText: "Paralysis",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
    },
    {
      id: "11",
      imgSrc: "/assets/img/ayurveda.png",
      altText: "Rajveda-image",
      diseaseText: "Panchkarma",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
    },
    {
      id: "12",
      imgSrc: "/assets/img/hair-loss.png",
      altText: "Rajveda-image",
      diseaseText: "Hair Loss",
      diseaseTextTwo: "Treatment",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
    },
    {
      id: "13",
      imgSrc: "/assets/img/infertility.png",
      altText: "Rajveda-image",
      diseaseText: "Infertility",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
    },
    {
      id: "14",
      imgSrc: "/assets/img/leech-therapy.png",
      altText: "Rajveda-image",
      diseaseText: "Leech",
      diseaseTextTwo: "Therapy",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
    },
    {
      id: "15",
      imgSrc: "/assets/img/cupping.png",
      altText: "Rajveda-image",
      diseaseText: "Cupping",
      diseaseTextTwo: "Therapy",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
    },
    {
      id: "16",
      imgSrc: "/assets/img/diet.png",
      altText: "Rajveda-image",
      diseaseText: "Ayurvedic",
      diseaseTextTwo: "Diet Plan",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
    },
  ];

  return (
    <div className="page-bodycontainer">
      <section className="homebanner-sec">
        <div className="row">
          <div className="col-md-7 img-clmn">
            <div className="homebanner-slider">
              <div className="slide">
                <Carousel
                  showThumbs={false}
                  showStatus={false}
                  showArrows={false}
                  autoPlay
                  infiniteLoop={true}
                >
                  <a href="#">
                    <img src="/assets/img/rajveda-banner-1.png" alt="Rajveda" />
                  </a>
                  <a href="#">
                    <img src="/assets/img/rajveda-banner-2.png" alt="Rajveda" />
                  </a>
                  <a href="#">
                    <img src="/assets/img/rajveda-banner-4.png" alt="Rajveda" />
                  </a>
                  <a href="#">
                    <img src="/assets/img/rajveda-banner-3.png" alt="Rajveda" />
                  </a>
                </Carousel>
              </div>
            </div>
          </div>

          <div className="col-md-5 list-clmn">
            <ul className="homebanner-list">
              <li title="Book An Appointment">
                <a href="/home/appointment-booking">
                  <span className="li-inner">
                    <span className="icon">
                      <img
                        src="/assets/img/bookappointment-icon.png"
                        alt="Book An Appointment"
                      />
                    </span>
                    <span className="text">
                      Book An <br className="hide-767" />
                      Appointment
                    </span>
                  </span>
                </a>
              </li>
              <li title="Locate Clinic">
                <a href="#">
                  <span className="li-inner">
                    <span className="icon">
                      <img
                        src="/assets/img/locateclinic-icon.png"
                        alt="Locate Clinic"
                      />
                    </span>
                    <span className="text">Locate Clinic</span>
                  </span>
                </a>
              </li>

              <li title="Rajveda Franchise Opportunity">
                <a href="/home/franchise">
                  <span className="li-inner">
                    <span className="icon">
                      <img
                        src="/assets/img/Franchise-icon.png"
                        alt="Find Doctor"
                      />
                    </span>
                    <span className="text">
                      Rajveda Franchise <br className="hide-767" /> Opportunity
                    </span>
                  </span>
                </a>
              </li>
              <li title="Buy Products">
                <a href="#" target="_blank">
                  <span className="li-inner">
                    <span className="icon">
                      <img
                        src="/assets/img/buyproducts-icon.png"
                        alt="Buy Products"
                      />
                    </span>
                    <span className="text">Buy Products</span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <>
        <section class="jivatvstory-sec consult-top-doctors">
          <Container>
            <div class="px-4">
              <div className="what_we_offer">
                <h1 className="label-color">Consult top doctors online for</h1>
                <h1 className="offer-color">any health concern</h1>
              </div>
              {/* <div className="why_choose_us text-center">Our Best Services</div> */}
              <Row>
                {cols.slice(0, showMore).map((ele, i) => (
                  <div className="col-md-2 mt-3 card-hover" key={i}>
                    <Card
                      className="card-radius"
                      onClick={() => openPopup(ele)}
                      style={{ cursor: "pointer" }}
                    >
                      <CardBody className="text-center">
                        <img
                          src={ele.imgSrc}
                          alt={ele.altText}
                          style={{ width: "60%" }}
                          className="img-fluid"
                        />
                        <br />
                        <span className="disease-text">{ele.diseaseText}</span>
                        <br />
                        <span className="disease-text">
                          {ele.diseaseTextTwo}
                        </span>
                      </CardBody>
                    </Card>
                  </div>
                ))}
              </Row>
              {showMore < cols?.length && (
                <div className="d-flex justify-content-center mt-3">
                  <Button
                    color="primary"
                    className="show-more-btn border-0"
                    onClick={toggleShowMore}
                  >
                    Show more
                  </Button>
                </div>
              )}
            </div>
          </Container>
        </section>
        <section class="jivatvstory-sec">
          <div class="px-4">
            <div className="what_we_offer">
              <h1 className="label-color">What we</h1>
              <h1 className="offer-color">have to offer</h1>
            </div>
            <div class="row">
              <div className="why_choose_us">Our Best Services</div>
              <div class="col-md-6">
                <h3 className="power_of_nature mt-3">Why Choose Rajveda</h3>
                <div className="power_of_nature_content">
                  {" "}
                  <p>
                    Rajveda enables true delivery of Ayurveda with personalised
                    treatment for each individual at all touch-points. We are
                    the first and biggest Ayurveda organisation to have
                    championed a protocol and data-driven diagnosis and
                    treatment. Our scientific spirit is grounded in rational
                    principles, ensuring personalised treatment for each
                    patient, to help them regain “Swasthya” with the use of
                    “Chikitsa” and lifestyle changes.
                  </p>
                </div>
                {/* <div className="disease_name">
                  <ul className="disease-list">
                    <li>
                      <i className="fa-sharp fa-solid fa-check me-2 pb-3"></i>{" "}
                      Thyroid Treatments
                    </li>
                    <li>
                      <i className="fa-sharp fa-solid fa-check me-2 pb-3"></i>
                      Diabetes Treatment
                    </li>
                    <li>
                      <i className="fa-sharp fa-solid fa-check me-2 pb-3"></i>{" "}
                      Migraine / Headache
                    </li>
                    <li>
                      <i className="fa-sharp fa-solid fa-check me-2 pb-3"></i>
                      Blood Pressure
                    </li>
                    <li>
                      <i className="fa-sharp fa-solid fa-check me-2 pb-3"></i>
                      Abdominal Disease
                    </li>
                    <li>
                      <i className="fa-sharp fa-solid fa-check me-2 pb-3"></i>
                      Skin Disease
                    </li>
                    <li>
                      <i className="fa-sharp fa-solid fa-check me-2 pb-3"></i>
                      Piles & Kshar Sutra
                    </li>
                    <li>
                      <i className="fa-sharp fa-solid fa-check me-2 pb-3"></i>
                      Eyes Treatment
                    </li>
                    <li>
                      <i className="fa-sharp fa-solid fa-check me-2"></i>
                      Obesity
                    </li>
                  </ul>
                  <ul className="disease-list">
                    
                    <li>
                      <i className="fa-sharp fa-solid fa-check me-2 pb-3"></i>
                      Panchkarm
                    </li>
                    <li>
                      <i className="fa-sharp fa-solid fa-check me-2 pb-3"></i>
                      Paralysis
                    </li>
                    <li>
                      <i className="fa-sharp fa-solid fa-check me-2 pb-3"></i>
                      Hair Loss Treatment
                    </li>
                    <li>
                      <i className="fa-sharp fa-solid fa-check me-2 pb-3"></i>
                      Infertility
                    </li>
                    <li>
                      <i className="fa-sharp fa-solid fa-check me-2 pb-3"></i>
                      Leech Therapy
                    </li>
                    <li>
                      <i className="fa-sharp fa-solid fa-check me-2 pb-3"></i>
                      Cupping Therapy
                    </li>
                    <li>
                      <i className="fa-sharp fa-solid fa-check me-2"></i>{" "}
                      Ayurvedic Diet Plan
                    </li>
                  </ul>
                </div> */}
              </div>
              <div class="col-md-6">
                <Row>
                  <Col md={4}>
                    <div class="img_center">
                      <div className="border_rotate2">
                        <Card style={{ width: "100%" }}>
                          <CardImg
                            top
                            width="100%"
                            src="/assets/img/disease-1.jpg"
                            alt="Card image cap"
                          />
                          <CardBody className="disease-card-body">
                            <span className="card-body-text">
                              Personalised <br /> Root-Cause Based Treatment
                            </span>
                          </CardBody>
                        </Card>
                      </div>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div class="img_center">
                      <div className="border_rotate2">
                        <Card style={{ width: "100%" }}>
                          <CardImg
                            top
                            width="100%"
                            src="/assets/img/disease-1.jpg"
                            alt="Card image cap"
                          />
                          <CardBody className="disease-card-body">
                            <span className="card-body-text">
                              Personalised <br /> Root-Cause Based Treatment
                            </span>
                          </CardBody>
                        </Card>
                      </div>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div class="img_center">
                      <div className="border_rotate2">
                        <Card style={{ width: "100%" }}>
                          <CardImg
                            top
                            width="100%"
                            src="/assets/img/disease-1.jpg"
                            alt="Card image cap"
                          />
                          <CardBody className="disease-card-body">
                            <span className="card-body-text">
                              Personalised <br /> Root-Cause Based Treatment
                            </span>
                          </CardBody>
                        </Card>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row className="mt-2">
                  <Col md={4}>
                    <div class="img_center">
                      <div className="border_rotate2">
                        <Card style={{ width: "100%" }}>
                          <CardImg
                            top
                            width="100%"
                            src="/assets/img/disease-1.jpg"
                            alt="Card image cap"
                            className="disease_img img_rotate"
                          />
                          <CardBody className="disease-card-body">
                            <span className="card-body-text">
                              Personalised <br /> Root-Cause Based Treatment
                            </span>
                          </CardBody>
                        </Card>
                      </div>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div class="img_center">
                      <div className="border_rotate2">
                        <Card style={{ width: "100%" }}>
                          <CardImg
                            top
                            width="100%"
                            src="/assets/img/disease-1.jpg"
                            alt="Card image cap"
                          />
                          <CardBody className="disease-card-body">
                            <span className="card-body-text">
                              Personalised <br /> Root-Cause Based Treatment
                            </span>
                          </CardBody>
                        </Card>
                      </div>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div class="img_center">
                      <div className="border_rotate2">
                        <Card style={{ width: "100%" }}>
                          <CardImg
                            top
                            width="100%"
                            src="/assets/img/disease-1.jpg"
                            alt="Card image cap"
                          />
                          <CardBody className="disease-card-body">
                            <span className="card-body-text">
                              Personalised <br /> Root-Cause Based Treatment
                            </span>
                          </CardBody>
                        </Card>
                      </div>
                    </div>
                  </Col>
                </Row>
                {/* <div class="img_center">
                  <div className="border_rotate">
                    <img
                      src="/assets/img/offer_img.png"
                      alt="Rajveda-Image"
                      className="img-fluid disease_img img_rotate"
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-between mt-5 mx-5">
                  <div>
                    <span className="common-text-only">720</span>
                    <span className="super-text">+</span>
                    <h3 className="counter-text">Happy Patients</h3>
                  </div>
                  <div>
                    <span className="common-text-only">85</span>
                    <span className="super-text">+</span>
                    <h3 className="counter-text">Therapist</h3>
                  </div>
                  <div>
                    <span className="common-text-only"> 15Th</span>
                    <span className="super-text">+</span>
                    <h3 className="counter-text">Experience</h3>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </section>
        <section className="stepprsnlid-ayrvdictrtmnt-sec">
          <div className="container">
            <div className="secheader-grp">
              <h2 className="h1">Process of Treatment</h2>
              <p>
                No two individuals are alike. Jiva Ayurveda follows “Ayunique”.
                It examines the patient and disease <br className="hide-991" />
                with an aim to diagnose the root cause and offer completely
                personalised treatment.
              </p>
            </div>
            <ul className="stpprsnldayrdictrtmnt-list">
              <li>
                <span className="li-innr">
                  <span className="h4 stepnumb">01</span>
                  <span className="icon">
                    <img
                      src="https://www.jiva.com/jiva/img/initiatecallmsgvideocall-white-icon.webp"
                      alt="Connect Call, Message or Chat"
                    />
                  </span>
                  <span className="h6 text">
                    <strong>Connect</strong> <br />
                    Call, Message or <br />
                    Chat
                  </span>
                </span>
              </li>
              <li>
                <span className="li-innr">
                  <span className="h4 stepnumb">02</span>
                  <span className="icon">
                    <img
                      src="https://www.jiva.com/jiva/img/getvatapittakaphaanly-white-icon.webp"
                      alt="Prakriti Anaysis Get your Doshas – Vata Pitta Kapha- analysed"
                    />
                  </span>
                  <span className="h6 text">
                    <strong>Prakriti Anaysis</strong> <br />
                    Get your Doshas – <br />
                    Vata Pitta Kapha - analysed
                  </span>
                </span>
              </li>
              <li>
                <span className="li-innr">
                  <span className="h4 stepnumb">03</span>
                  <span className="icon">
                    <img
                      src="https://www.jiva.com/jiva/img/healthcoachassignyou-white-icon.webp"
                      alt="Health Coach A Health Coach will be assigned to you"
                    />
                  </span>
                  <span className="h6 text">
                    <strong>Health Coach</strong> <br />A Health Coach will{" "}
                    <br />
                    be assigned to you
                  </span>
                </span>
              </li>
              <li>
                <span className="li-innr">
                  <span className="h4 stepnumb">04</span>
                  <span className="icon">
                    <img
                      src="https://www.jiva.com/jiva/img/fixappntntmeetayrvdadctr-white-icon.webp"
                      alt="Fixed Appointment At your convenient time with Jiva Doctor"
                    />
                  </span>
                  <span className="h6 text">
                    <strong>Fix Appointment</strong> <br />
                    At your convenient <br />
                    time with Jiva Doctor
                  </span>
                </span>
              </li>
              <li>
                <span className="li-innr">
                  <span className="h4 stepnumb">05</span>
                  <span className="icon">
                    <img
                      src="https://www.jiva.com/jiva/img/recvpersnzdayrvdatratnt-white-icon.webp"
                      alt="Consult Receive Personalised Ayurveda Treatment"
                    />
                  </span>
                  <span className="h6 text">
                    <strong>Consult</strong> <br />
                    Receive Personalised <br />
                    Ayurveda Treatment
                  </span>
                </span>
              </li>
            </ul>
            <div className="btn-grp">
              <a
                href="https://www.jiva.com/treatment/appointment"
                className="btn"
                target="_blank"
              >
                Book An Appointment
              </a>
              <a href="https://ayurveda.jiva.com/vpk/" className="btn">
                Prakriti Analysis Test
              </a>
            </div>
          </div>
        </section>

        <section className="jivabrandestore-sec">
          <div className="container">
            <div className="secheader-grp">
              <h2 className="h1">Rajveda Products shop.</h2>
              <p>
                Browse our range 150+ ISO, HACCP &amp; GMP Certified wellness
                products
              </p>
            </div>
            <ul className="jivabrandstore-list">
              <li>
                <a
                  href="https://store.jiva.com/products/sugar-free-chyawanprasha-1-kg/"
                  target="_blank"
                >
                  <span className="li-innr">
                    <span className="img">
                      <img
                        src="https://www.jiva.com/jiva/img/jivabrandstore-img01.webp"
                        alt="Sugar Free Chyawanprash"
                      />
                    </span>
                    <span className="h6 text">Sugar Free Chyawanprash</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://store.jiva.com/products/sleep-well-120-tablets-buy-2-get-1-free/"
                  target="_blank"
                >
                  <span className="li-innr">
                    <span className="img">
                      <img
                        src="https://www.jiva.com/jiva/img/Sleepwell .webp"
                        alt="Sleepwell Tablets"
                      />
                    </span>
                    <span className="h6 text">Sleepwell Tablets</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://store.jiva.com/products/ashwagandha-tablets/"
                  target="_blank"
                >
                  <span className="li-innr">
                    <span className="img">
                      <img
                        src="https://www.jiva.com/jiva/img/Ashwagandha.webp"
                        alt="Ashwagandha Tablets"
                      />
                    </span>
                    <span className="h6 text">Ashwagandha Tablets</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://store.jiva.com/products/pure-shilajit-capsules/ "
                  target="_blank"
                >
                  <span className="li-innr">
                    <span className="img">
                      <img
                        src="https://www.jiva.com/jiva/img/Shilajeet.webp"
                        alt="Shilajeet Capsules"
                      />
                    </span>
                    <span className="h6 text">Pure Shilajit Capsules</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://store.jiva.com/products/amla-chatpata-candy/"
                  target="_blank"
                >
                  <span className="li-innr">
                    <span className="img">
                      <img
                        src="https://www.jiva.com/jiva/img/Amla candy .webp"
                        alt="Amla Chatpata Candy"
                      />
                    </span>
                    <span className="h6 text">Amla Chatpata Candy</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://store.jiva.com/products/honey-1-kg/Honey"
                  target="_blank"
                >
                  <span className="li-innr">
                    <span className="img">
                      <img
                        src="https://www.jiva.com/jiva/img/jivabrandstore-img6.webp"
                        alt="Honey"
                      />
                    </span>
                    <span className="h6 text">Honey</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://store.jiva.com/products/giloy-juice/"
                  target="_blank"
                >
                  <span className="li-innr">
                    <span className="img">
                      <img
                        src="https://www.jiva.com/jiva/img/jivabrandstore-img7.webp"
                        alt="Giloy Juice"
                      />
                    </span>
                    <span className="h6 text">Giloy Juice</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://store.jiva.com/products/jiva-a2-ghee/"
                  target="_blank"
                >
                  <span className="li-innr">
                    <span className="img">
                      <img
                        src="https://www.jiva.com/jiva/img/A2 Ghee.webp"
                        alt="A2 Ghee"
                      />
                    </span>
                    <span className="h6 text">A2 Ghee</span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section className="healthandhealingstories-sec" id="testimonials">
          <div className="container">
            <div className="secheader-grp">
              <h2 className="h1">Stories of Health &amp; Healing</h2>
              <p>Thousands have experienced relief after treatment at Jiva</p>
            </div>
            <ul className="helthandhelngstris-list">
              <li>
                <span className="li-innr">
                  <span className="img-grp">
                    <img
                      src="https://www.jiva.com/jiva/img/storieshealth&healing-img-101.jpg"
                      alt="Rishi Ranjan Arya, Delhi"
                    />
                  </span>
                  <span className="text-grp">
                    <h5>Daksh Malik, Noida</h5>
                    <p>
                      I had IBS since teenage. As soon as I ate something I felt
                      the urge to go to toilet. I could not concentrate on
                      studies and I felt unhappy all the time. Even after
                      changing many doctors. I got no relief.
                    </p>
                    {/* <a href="#" class="btn-txtlnk">Read More</a> */}
                  </span>
                </span>
              </li>
              <li>
                <span className="li-innr">
                  <span className="img-grp">
                    <img
                      src="https://www.jiva.com/jiva/img/storieshealth&healing-img-102.jpg"
                      alt="Ranjana Soni, Bilaspur"
                    />
                  </span>
                  <span className="text-grp">
                    <h5>Ranjana Soni, Bilaspur</h5>
                    <p>
                      SLE and Rheumatoid Arthritis are both autoimmune disorders
                      for which Ayurveda has good treatment. I came to Jiva for
                      RA treatment after spending a lot of money on doctors and
                      medicines.
                    </p>
                    {/* <a href="#" class="btn-txtlnk">Read More</a> */}
                  </span>
                </span>
              </li>
              <li>
                <span className="li-innr">
                  <span className="img-grp">
                    <img
                      src="https://www.jiva.com/jiva/img/storieshealth&healing-img-103.jpg"
                      alt="Budh Ram, Meerut"
                    />
                  </span>
                  <span className="text-grp">
                    <h5>Rishi Ranjan Arya, Delhi</h5>
                    <p>
                      My house is on the second floor and climbing up and down
                      every time had become impossible for me because I had
                      Haitus Hernia. I met with big doctors at a famous hospital
                      and took medicines for 8 months but it didn’t work for my
                      condition.
                    </p>
                    {/* <a href="#" class="btn-txtlnk">Read More</a> */}
                  </span>
                </span>
              </li>
            </ul>
            <div className="btn-grp">
              <a
                href="https://www.jiva.com/treatment/testimonial"
                className="btn"
                title="View More"
              >
                View More
              </a>
            </div>
            {/* <div class="btn-grp">
          <a href="javascript:void(0);" class="btn" title="Coming Soon">View More</a>
      </div> */}
          </div>
        </section>

        <section className="jivatvstory-sec">
          <div className="container">
            <div className="row rowflex">
              <div className="md-col-56 hide-1100">
                <div className="video-grp">
                  <img
                    src="https://www.jiva.com/jiva/img/tv-show-plchldr-img.png"
                    alt="TV Show"
                  />
                </div>
              </div>
              <div className="md-col-44">
                <div id="padtv-grp" className="cntnt-grp">
                  <h3>Rajveda Youtube Shows</h3>
                  <p className="watch-line">
                    Watch our shows on various TV channels
                  </p>
                  <div className="video-grp show-1100">
                    <img
                      src="https://www.jiva.com/jiva/img/tv-show-plchldr-img.webp"
                      alt="TV Show"
                    />
                  </div>
                  <div className="text">
                    <p>
                      Its 15 Years when we started educational TV shows with the
                      mission of{" "}
                      <span className="gher-txt">“Ghar Ghar Ayurveda”</span> for
                      a healthy and happy India.
                    </p>
                    <p>
                      More than 1.5M households have embraced Ayurveda &amp; we
                      have resolve to reach the next million in the next 15
                      months.
                    </p>
                    <p>
                      <strong>
                        Join us to spread the message and drive the mission for
                        Ghar Ghar Arurveda.
                      </strong>
                    </p>
                  </div>
                  <div className="btn-grps">
                    <a className="btns" href="https://www.jiva.com/tvschedule">
                      WATCH
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ourfounders-sec">
          <div className="container">
            <div className="row">
              <div className="md-col-35 cntnt-clmn">
                <div className="cntnt-grp">
                  <h2 className="h1">Our Inspiration</h2>
                  <p>
                    Health, Happiness and Peace — three fundamental desires of
                    every human being that seem so easy to get, yet are
                    unattainable for the modern man today. Jiva was{" "}
                    <strong>founded 30 years ago</strong> on the belief that
                    Ayurveda can truly bring Health, Happiness and Peace to very
                    person, worldwide.
                  </p>
                </div>
              </div>
              <div className="md-col-65 list-clmn">
                <ul className="ourfounders-list">
                  <li>
                    <span className="li-innr">
                      <span className="img-grp">
                        <img
                          src="https://www.jiva.com/jiva/img/ourfundr-drpartapchauhan-img.jpg"
                          alt="Dr Partap Chauhan"
                        />
                      </span>
                      <span className="text-grp">
                        <h5>
                          Dr Partap <br />
                          Chauhan
                        </h5>
                        <p>Director, Jiva Ayurveda</p>
                      </span>
                    </span>
                  </li>
                  <li>
                    <span className="li-innr">
                      <span className="img-grp">
                        <img
                          src="https://www.jiva.com/jiva/img/ourfundr-drsatyanarayanadasaji-img.jpg"
                          alt="Dr Satyanarayana Dasa Ji"
                        />
                      </span>
                      <span className="text-grp">
                        <h5>
                          Dr Satyanarayana <br />
                          Dasa Ji
                        </h5>
                        <p>Director, Jiva Culture</p>
                      </span>
                    </span>
                  </li>
                  <li>
                    <span className="li-innr">
                      <span className="img-grp">
                        <img
                          src="https://www.jiva.com/jiva/img/ourfundr-shririshipalchauhan-img.jpg"
                          alt="Shri Rishipal Chauhan"
                        />
                      </span>
                      <span className="text-grp">
                        <h5>
                          Shri Rishipal <br />
                          Chauhan
                        </h5>
                        <p>Chairman, Jiva Group</p>
                      </span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section class="jivatvstory-sec about-background">
          <div class="container">
            <div className="what_we_offer">
              <h1 className="label-color">About</h1>
              <h1 className="offer-color">Us</h1>
            </div>
            <div class="row">
              <div class="col-md-5">
                <div class="about_border_rotate">
                  <img
                    src="/assets/img/rajveda-about-us.jpg"
                    alt="Rajveda-Image"
                    className="img-fluid about_img_rotate"
                  />
                </div>
              </div>
              <div class="col-md-7">
                <div className="why_choose_us">About Rajveda</div>

                <h3 className="power_of_nature mt-3">
                  Totally Effective Approach for A Better Life
                </h3>
                <div className="quote-text">
                  <p className="common-text">
                    “Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in henderit.”{" "}
                  </p>
                </div>
                <div className="power_of_nature_content">
                  {" "}
                  <p>
                    Key principles of Ayurveda revolve around the idea that
                    health and well-being depend on a delicate balance between
                    the body, mind, and spirit. It views each person as a unique
                    individual with a distinct constitution, known as the dosha,
                    which is determined by the three fundamental energies or
                    forces: Vata (air and space), Pitta (fire and water), and
                    Kapha (earth and water).
                  </p>
                </div>
                <div className="d-flex">
                  <div>
                    <button type="button" className="button-2 p-2">
                      MORE ABOUT US
                    </button>
                  </div>
                  <div class="circle">
                    <span class="telephone">
                      <i class="fa-solid fa-phone"></i>
                    </span>
                  </div>
                  <div className="test mt-1" style={{ marginLeft: "15px" }}>
                    <a
                      href="tel:+91 9710862222"
                      className="text-decoration-none"
                    >
                      <h5 className="text-dark">Call Us Now</h5>
                      <p className="text-dark">+91 9710862222</p>
                    </a>
                  </div>
                  <div class="circle" style={{ marginLeft: "15px" }}>
                    <span class="telephone">
                      <i class="fa-solid fa-envelope"></i>
                    </span>
                  </div>
                  <div className="test mt-1" style={{ marginLeft: "15px" }}>
                    <a
                      href="mailto:info@rajveda.com"
                      className="text-decoration-none"
                    >
                      <h5 className="text-dark">Email Us</h5>
                      <p className="text-dark">info@rajveda.com</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Modal
          returnFocusAfterClose={focusAfterClose}
          isOpen={open}
          style={{ width: "30rem" }}
          size="md"
          className="popout"
        >
          <ModalHeader
            className="border-bottom-0"
            toggle={() => handleClose()}
          ></ModalHeader>
          <ModalBody>
            <div className="d-flex flex-column">
              <img
                src={popData?.imgSrc}
                alt={popData?.altText}
                style={{ width: "40%" }}
                className="img-fluid m-auto"
              />

              <span className="disease-text text-center mt-2">
                {popData?.diseaseText} {popData?.diseaseTextTwo}
              </span>
              <span>{popData?.description}</span>
            </div>
            <center>
              <Button color="success" size="sm">
                Book Appointment
              </Button>
            </center>
          </ModalBody>
        </Modal>
      </>
    </div>
  );
};

export default Index;
