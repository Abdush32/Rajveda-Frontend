import React, { useState, useEffect } from "react";
import DatePicker from "react-horizontal-datepicker";
import ReactHorizontalDatePicker from "react-horizontal-strip-datepicker";
import "react-horizontal-strip-datepicker/dist/ReactHorizontalDatePicker.css";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {
  Button,
  Card,
  CardText,
  CardTitle,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";

const Index = () => {
  const [fields, setFields] = useState({});
  const [step, setStep] = useState(1);

  const [selectedCard, setSelectedCard] = useState("");

  const [scrollPosition, setScrollPosition] = useState(0);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleScroll = (scrollOffset) => {
    const newScrollPosition = scrollPosition + scrollOffset;
    setScrollPosition(newScrollPosition);
    const dateContainer = document.getElementById("dateContainer");
    if (dateContainer) {
      dateContainer.scrollLeft = newScrollPosition;
    }
  };

  const selectDate = (date) => {
    setSelectedDate(date);
    // Call your onChange function here with the selected date
    console.log("Selected date:", date);
  };

  const handleDateChange = (event) => {
    const inputDate = new Date(event.target.value);
    if (!isNaN(inputDate.getTime())) {
      console.log("Hello DATE", inputDate);
      selectDate(inputDate);
    } else {
      console.error("Invalid date");
    }
  };

  useEffect(() => {
    const today = new Date();
    selectDate(today);
  }, []);

  const startDate = new Date();
  const endDate = new Date();
  endDate.setDate(startDate.getDate() + 30);

  const dates = [];
  let currentDate = new Date(startDate);
  while (currentDate <= endDate) {
    const formattedDate = new Date(currentDate);
    dates.push(
      <div
        key={formattedDate.toISOString()}
        className={`dateItem ${
          selectedDate &&
          formattedDate.toDateString() === selectedDate.toDateString()
            ? "selected"
            : ""
        }`}
        onClick={() => selectDate(formattedDate)}
      >
        <div>
          {formattedDate.toLocaleDateString("en-US", { weekday: "short" })}
        </div>
        <div className="date_month">
          {formattedDate.toLocaleDateString("en-US", { month: "short" })}
        </div>
        <div>{formattedDate.getDate()}</div>
      </div>
    );
    currentDate.setDate(currentDate.getDate() + 1);
  }
  const handleCardSelection = (cardName) => {
    setSelectedCard(cardName);
  };

  const cardStyle = (cardName) => ({
    backgroundColor: selectedCard === cardName ? "#ebffeb" : "#FFFFFF",
    // Define other card styles here
  });

  const handlePhone = (phone, field_name) => {
    fields[field_name] = "+" + phone;
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields((prevFields) => ({
      ...prevFields,
      [name]: value,
    }));
  };

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const onSelectedDay = (d) => {
    console.log(d);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission with fields
    console.log("Form submitted with data:", fields);
    // Reset fields and step after submission
    setFields({});
    setStep(1);
  };

  const renderForm = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <h2>Make An Appointment</h2>
            <div className="appointment_first_form">
              <Row className="mt-4">
                <Col md={12}>
                  <div className="dateBox">
                    <input
                      type="date"
                      className="date_calander"
                      onChange={handleDateChange}
                    />
                    <div className="scrollContainer">
                      <div
                        className="scrollLeft"
                        onClick={() => handleScroll(-100)}
                      >
                        <i class="fa-solid fa-angle-left" />
                      </div>
                      <div id="dateContainer" className="dateContainer">
                        {dates}
                      </div>
                      <div
                        className="scrollRight"
                        onClick={() => handleScroll(100)}
                      >
                        <i class="fa-solid fa-angle-right" />
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>

              <div className="mt-4">
                <strong>
                  <i className="fa-regular fa-sun me-2" />
                  Morning Slots
                </strong>
                <Row className="mt-3">
                  <Col xs={4} md={4} lg={4} sm={4}>
                    <div
                      class="btn-group d-grid"
                      role="group"
                      aria-label="Radio button group"
                    >
                      <input
                        type="radio"
                        class="btn-check"
                        name="options-outlined"
                        id="success-outlined"
                        autocomplete="off"
                        checked
                      />
                      <label
                        class="btn btn-outline-success m-1 btn-sm btn-block radio_text radio_radious"
                        for="success-outlined"
                      >
                        9:00 AM
                      </label>
                    </div>
                  </Col>
                  <Col xs={4} md={4} lg={4} sm={4}>
                    <div
                      class="btn-group d-grid"
                      role="group"
                      aria-label="Radio button group"
                    >
                      <input
                        type="radio"
                        class="btn-check"
                        name="options-outlined"
                        id="success-outlined"
                        autocomplete="off"
                      />
                      <label
                        class="btn btn-outline-success m-1 btn-sm btn-block radio_text radio_radious"
                        for="success-outlined"
                      >
                        9:00 AM
                      </label>
                    </div>
                  </Col>
                  <Col xs={4} md={4} lg={4} sm={4}>
                    <div
                      class="btn-group d-grid"
                      role="group"
                      aria-label="Radio button group"
                    >
                      <input
                        type="radio"
                        class="btn-check"
                        name="options-outlined"
                        id="success-outlined"
                        autocomplete="off"
                      />
                      <label
                        class="btn btn-outline-success m-1 btn-sm btn-block radio_text radio_radious"
                        for="success-outlined"
                      >
                        9:00 AM
                      </label>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={4} md={4} lg={4} sm={4}>
                    <div
                      class="btn-group d-grid"
                      role="group"
                      aria-label="Radio button group"
                    >
                      <input
                        type="radio"
                        class="btn-check"
                        name="options-outlined"
                        id="success-outlined"
                        autocomplete="off"
                        checked
                      />
                      <label
                        class="btn btn-outline-success m-1 btn-sm btn-block radio_text radio_radious"
                        for="success-outlined"
                      >
                        9:00 AM
                      </label>
                    </div>
                  </Col>
                  <Col xs={4} md={4} lg={4} sm={4}>
                    <div
                      class="btn-group d-grid"
                      role="group"
                      aria-label="Radio button group"
                    >
                      <input
                        type="radio"
                        class="btn-check"
                        name="options-outlined"
                        id="success-outlined"
                        autocomplete="off"
                      />
                      <label
                        class="btn btn-outline-success m-1 btn-sm btn-block radio_text radio_radious"
                        for="success-outlined"
                      >
                        9:00 AM
                      </label>
                    </div>
                  </Col>
                  <Col xs={4} md={4} lg={4} sm={4}>
                    <div
                      class="btn-group d-grid"
                      role="group"
                      aria-label="Radio button group"
                    >
                      <input
                        type="radio"
                        class="btn-check"
                        name="options-outlined"
                        id="success-outlined"
                        autocomplete="off"
                      />
                      <label
                        class="btn btn-outline-success m-1 btn-sm btn-block radio_text radio_radious"
                        for="success-outlined"
                      >
                        9:00 AM
                      </label>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={4} md={4} lg={4} sm={4}>
                    <div
                      class="btn-group d-grid"
                      role="group"
                      aria-label="Radio button group"
                    >
                      <input
                        type="radio"
                        class="btn-check"
                        name="options-outlined"
                        id="success-outlined"
                        autocomplete="off"
                        checked
                      />
                      <label
                        class="btn btn-outline-success m-1 btn-sm btn-block radio_text radio_radious"
                        for="success-outlined"
                      >
                        9:00 AM
                      </label>
                    </div>
                  </Col>
                  <Col xs={4} md={4} lg={4} sm={4}>
                    <div
                      class="btn-group d-grid"
                      role="group"
                      aria-label="Radio button group"
                    >
                      <input
                        type="radio"
                        class="btn-check"
                        name="options-outlined"
                        id="success-outlined"
                        autocomplete="off"
                      />
                      <label
                        class="btn btn-outline-success m-1 btn-sm btn-block radio_text radio_radious"
                        for="success-outlined"
                      >
                        9:00 AM
                      </label>
                    </div>
                  </Col>
                  <Col xs={4} md={4} lg={4} sm={4}>
                    <div
                      class="btn-group d-grid"
                      role="group"
                      aria-label="Radio button group"
                    >
                      <input
                        type="radio"
                        class="btn-check"
                        name="options-outlined"
                        id="success-outlined"
                        autocomplete="off"
                      />
                      <label
                        class="btn btn-outline-success m-1 btn-sm btn-block radio_text radio_radious"
                        for="success-outlined"
                      >
                        9:00 AM
                      </label>
                    </div>
                  </Col>
                </Row>
              
              </div>

              <div className="mt-4">
                <strong>
                  <i className="fa-regular fa-moon me-2" />
                  Evening Slots
                </strong>
                <Row className="mt-3">
                  <Col xs={4} md={4} lg={4} sm={4}>
                    <div
                      class="btn-group d-grid"
                      role="group"
                      aria-label="Radio button group"
                    >
                      <input
                        type="radio"
                        class="btn-check"
                        name="options-outlined"
                        id="success-outlined"
                        autocomplete="off"
                        checked
                      />
                      <label
                        class="btn btn-outline-success m-1 btn-sm btn-block radio_text radio_radious"
                        for="success-outlined"
                      >
                        9:00 AM
                      </label>
                    </div>
                  </Col>
                  <Col xs={4} md={4} lg={4} sm={4}>
                    <div
                      class="btn-group d-grid"
                      role="group"
                      aria-label="Radio button group"
                    >
                      <input
                        type="radio"
                        class="btn-check"
                        name="options-outlined"
                        id="success-outlined"
                        autocomplete="off"
                      />
                      <label
                        class="btn btn-outline-success m-1 btn-sm btn-block radio_text radio_radious"
                        for="success-outlined"
                      >
                        9:00 AM
                      </label>
                    </div>
                  </Col>
                  <Col xs={4} md={4} lg={4} sm={4}>
                    <div
                      class="btn-group d-grid"
                      role="group"
                      aria-label="Radio button group"
                    >
                      <input
                        type="radio"
                        class="btn-check"
                        name="options-outlined"
                        id="success-outlined"
                        autocomplete="off"
                      />
                      <label
                        class="btn btn-outline-success m-1 btn-sm btn-block radio_text radio_radious"
                        for="success-outlined"
                      >
                        9:00 AM
                      </label>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={4} md={4} lg={4} sm={4}>
                    <div
                      class="btn-group d-grid"
                      role="group"
                      aria-label="Radio button group"
                    >
                      <input
                        type="radio"
                        class="btn-check"
                        name="options-outlined"
                        id="success-outlined"
                        autocomplete="off"
                        checked
                      />
                      <label
                        class="btn btn-outline-success m-1 btn-sm btn-block radio_text radio_radious"
                        for="success-outlined"
                      >
                        9:00 AM
                      </label>
                    </div>
                  </Col>
                  <Col xs={4} md={4} lg={4} sm={4}>
                    <div
                      class="btn-group d-grid"
                      role="group"
                      aria-label="Radio button group"
                    >
                      <input
                        type="radio"
                        class="btn-check"
                        name="options-outlined"
                        id="success-outlined"
                        autocomplete="off"
                      />
                      <label
                        class="btn btn-outline-success m-1 btn-sm btn-block radio_text radio_radious"
                        for="success-outlined"
                      >
                        9:00 AM
                      </label>
                    </div>
                  </Col>
                  <Col xs={4} md={4} lg={4} sm={4}>
                    <div
                      class="btn-group d-grid"
                      role="group"
                      aria-label="Radio button group"
                    >
                      <input
                        type="radio"
                        class="btn-check"
                        name="options-outlined"
                        id="success-outlined"
                        autocomplete="off"
                      />
                      <label
                        class="btn btn-outline-success m-1 btn-sm btn-block radio_text radio_radious"
                        for="success-outlined"
                      >
                        9:00 AM
                      </label>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={4} md={4} lg={4} sm={4}>
                    <div
                      class="btn-group d-grid"
                      role="group"
                      aria-label="Radio button group"
                    >
                      <input
                        type="radio"
                        class="btn-check"
                        name="options-outlined"
                        id="success-outlined"
                        autocomplete="off"
                        checked
                      />
                      <label
                        class="btn btn-outline-success m-1 btn-sm btn-block radio_text radio_radious"
                        for="success-outlined"
                      >
                        9:00 AM
                      </label>
                    </div>
                  </Col>
                  <Col xs={4} md={4} lg={4} sm={4}>
                    <div
                      class="btn-group d-grid"
                      role="group"
                      aria-label="Radio button group"
                    >
                      <input
                        type="radio"
                        class="btn-check"
                        name="options-outlined"
                        id="success-outlined"
                        autocomplete="off"
                      />
                      <label
                        class="btn btn-outline-success m-1 btn-sm btn-block radio_text radio_radious"
                        for="success-outlined"
                      >
                        9:00 AM
                      </label>
                    </div>
                  </Col>
                  <Col xs={4} md={4} lg={4} sm={4}>
                    <div
                      class="btn-group d-grid"
                      role="group"
                      aria-label="Radio button group"
                    >
                      <input
                        type="radio"
                        class="btn-check"
                        name="options-outlined"
                        id="success-outlined"
                        autocomplete="off"
                      />
                      <label
                        class="btn btn-outline-success m-1 btn-sm btn-block radio_text radio_radious"
                        for="success-outlined"
                      >
                        9:00 AM
                      </label>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
            <hr/>
            <FormGroup className="text-center mt-4">
              <Button
                color="primary"
                className="button_text"
                block
                onClick={nextStep}
              >
                Proceed to next
              </Button>
            </FormGroup>
          </div>
        );
      case 2:
        return (
          <div>
            <h2 className="mb-3">Patient Info</h2>
            <div className="appointment_first_form_last">
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="exampleSelect">Choose Relationship</Label>
                  <Input id="exampleSelect" name="select" type="select">
                    <option>Self</option>
                    <option>Relationship With User</option>
                    <option>Spouse</option>
                    <option>Husband</option>
                    <option>Kid</option>
                    <option>Father</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="name">Patient's Name</Label>
                  <Input
                    name="name"
                    placeholder="Enter patient name"
                    type="text"
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="name">Contact Number</Label>
                  <Input
                    name="mobile"
                    placeholder="Enter contact number"
                    type="number"
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="name">Age</Label>
                  <Input name="age" placeholder="Enter age" type="number" />
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="name">City</Label>
                  <Input name="name" placeholder="Enter city" type="text" />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="exampleSelect">Disease</Label>
                  <Input id="exampleSelect" name="select" type="select">
                    <option>Demo1</option>
                    <option>Demo2</option>
                    <option>Demo3</option>
                  </Input>
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col md={12}>
                <strong>Patient Details</strong>
                <Row>
                  <Col md={12}>Roushan Singh</Col>
                  <Col md={12}>Total Payable Consultation Fee ₹490/</Col>
                </Row>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col md={12} className="d-flex form_checkbox">
                How would you like to pay?
                <div class="form-check pay_radio">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    checked
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    Online
                  </label>
                </div>
                <div class="form-check pay_radio2">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                  />
                  <label class="form-check-label inclinic_radio" for="flexRadioDefault2">
                    In clinic
                  </label>
                </div>
              </Col>
            </Row>
           
            </div>
            <hr/>
            <div className="d-flex justify-content-between">
              <Button className="button_text" onClick={prevStep}>
                Back
              </Button>

              <Button
                color="primary"
                className="button_text"
                onClick={handleSubmit}
              >
                Book now
              </Button>
            </div>
          </div>
        );
      // case 3:
      //   return (
      //     <div>
      //       <h2 className="mt-3 mb-3">Overview</h2>
      //       <Row>
      //         <Col md={12}>
      //           <Card
      //             body
      //             className="my-2"
      //             style={{ backgroundColor: "#ebffeb" }}
      //           >
      //             <div>
      //               <strong>
      //                 <i className="fa-solid fa-user me-2"></i>Rajveda
      //               </strong>
      //             </div>
      //           </Card>
      //         </Col>
      //       </Row>
      //       <Row>
      //         <Col md={12}>
      //           <Card
      //             body
      //             className="my-2"
      //             style={{ backgroundColor: "#ebffeb" }}
      //           >
      //             <Row>
      //               <Col md={12}> Patients Details</Col>
      //             </Row>
      //             <Row>
      //               <Col md={10}>Consultation fee</Col>
      //               <Col md={2}>₹94.23</Col>
      //             </Row>
      //             <Row>
      //               <Col md={10}>VAT (5%)</Col>
      //               <Col md={2}>₹4.71</Col>
      //             </Row>
      //             <hr />
      //             <Row>
      //               <Col md={10} className="lead">
      //                 Total Payable
      //               </Col>
      //               <Col md={2}>
      //                 <strong>₹99</strong>
      //               </Col>
      //             </Row>
      //           </Card>
      //         </Col>
      //       </Row>

      //       <Row>
      //         <Col md={12}>
      //           <Card
      //             body
      //             className="my-2"
      //             style={{ backgroundColor: "#ebffeb" }}
      //           >
      //             <Row>
      //               <Col md={12} className="pay_text">
      //                 How would you like to pay?
      //               </Col>
      //             </Row>
      //             <Row>
      //               <Col md={12}>
      //                 To make a payment, tap your desired payment method{" "}
      //               </Col>
      //             </Row>

      //             <Row className="mt-3">
      //               <Col md={12}>
      //                 <div class="form-check">
      //                   <input
      //                     class="form-check-input"
      //                     type="radio"
      //                     name="flexRadioDefault"
      //                     id="flexRadioDefault1"
      //                     checked
      //                   />
      //                   <label class="form-check-label" for="flexRadioDefault1">
      //                     Online
      //                   </label>
      //                 </div>
      //               </Col>
      //               <Col md={12}>
      //                 <div class="form-check">
      //                   <input
      //                     class="form-check-input"
      //                     type="radio"
      //                     name="flexRadioDefault"
      //                     id="flexRadioDefault2"
      //                   />
      //                   <label class="form-check-label" for="flexRadioDefault2">
      //                     In clinic
      //                   </label>
      //                 </div>
      //               </Col>
      //             </Row>
      //           </Card>
      //         </Col>
      //       </Row>
      //       <Row>
      //         <Col md={10}>Total Payable (Include Vat) </Col>
      //         <Col md={2}>₹99</Col>
      //       </Row>

      //       <div className="d-flex justify-content-between">
      //         <Button className="button_text" onClick={prevStep}>
      //           Back
      //         </Button>

      //         <Button
      //           color="primary"
      //           className="button_text"
      //           onClick={handleSubmit}
      //         >
      //           Book now
      //         </Button>
      //       </div>
      //     </div>
      //   );
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="appointment_background">
        <Row className="mb-4 appointment_background2">
          <Col md={7} xs={12}>
            <div className="text_content">
              <img src="/assets/img/appointment_bannere_text.png" alt="Rajveda" className="appointment_image"/>
              {/* <h1 className="text-white appointment_text">
                Book Your Appointment with Ease
              </h1>
              <h3 className="text-white appointment_text">
                Why Choose Rajveda for Your Healthcare Needs?
              </h3>
              <p className="text-white appointment_text">
                <strong>Expertise:</strong> Our team consists of experienced and
                skilled healthcare professionals <br />
                specializing in various fields, ensuring you receive the best
                possible care.
              </p> */}
            </div>
            {/* <div className="appointment-container-image">
              <img
                src="/assets/img/new-doctor.png"
                className="appointment_image"
                alt="Rajveda"
              />
            </div> */}
          </Col>
          <Col md={5} xs={12}>
            {/* <h1 className="appointment_booking_text mt-4">
              Healthcare, without the headache
            </h1> */}
            <Card body style={{ margin: "15px" }}>
              <div className="second_card" style={{ padding: "10px" }}>
                {renderForm()}
              </div>
            </Card>
          </Col>
        </Row>
      </div>
      <Container className="mb-5">
        <div className="d-flex align-items-center justify-content-center mt-5">
          <h1 className="">Why Rajveda Ayurveda</h1>
        </div>
        <Row className="mt-5">
          <Col md={6} className="mb-3">
            <Card body className="counter_card">
              <CardTitle className="text-white card_text" tag="h3">
                1.5M
              </CardTitle>
              <CardText className="text-white">
                patients successfully consulted
              </CardText>
            </Card>
          </Col>
          <Col md={6} className="mb-3">
            <Card body className="counter_card">
              <CardTitle className="text-white card_text" tag="h3">
                27+
              </CardTitle>
              <CardText className="text-white">years of experience</CardText>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="mb-3">
            <Card body className="counter_card">
              <CardTitle className="text-white card_text" tag="h3">
                500+
              </CardTitle>
              <CardText className="text-white">
                Ayurvedic doctors and professionals
              </CardText>
            </Card>
          </Col>
          <Col md={6}>
            <Card body className="counter_card">
              <CardTitle className="text-white card_text" tag="h3">
                8,000+
              </CardTitle>
              <CardText className="text-white">
                patients consulted daily
              </CardText>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Index;
