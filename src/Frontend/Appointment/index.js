import React, { useState } from "react";
import DatePicker from "react-horizontal-datepicker";
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

  const handlePhone = (phone, field_name) => {
    fields[field_name] = "+" + phone;
  };

  const selectedDay = (val, e) => {
    console.log(val);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Container className="appointment_background">
        <Row className="mt-4 mb-4 appointment_background2">
          <Col md={6}>
            <div className="appointment-container-image">
              <img
                src="/assets/img/doctor-appointment.png"
                className="appointment_image"
                alt="Rajveda"
              />
            </div>
          </Col>
          <Col md={6}>
            <h1 className="appointment_booking_text mt-4">
              Healthcare, without the headache
            </h1>

            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md={6}>
                  <div
                    class="btn-group d-grid"
                    role="group"
                    aria-label="Radio button group"
                  >
                    <input
                      type="radio"
                      class="btn-check"
                      name="options-outlined1"
                      id="success-outlined1"
                      autocomplete="off"
                      checked
                    />
                    <label
                      class="btn btn-outline-success  btn-block radio_text"
                      for="success-outlined1"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-dot"
                        viewBox="0 0 16 16"
                      >
                        <circle cx="8" cy="8" r="8" />
                      </svg>{" "}
                      In Doctor Chamber
                    </label>
                  </div>
                </Col>
                <Col md={6}>
                  <div
                    class="btn-group d-grid"
                    role="group"
                    aria-label="Radio button group"
                  >
                    <input
                      type="radio"
                      class="btn-check"
                      name="options-outlined2"
                      id="danger-outlined2"
                      autocomplete="off"
                    />
                    <label
                      class="btn btn-outline-danger btn-block radio_text"
                      for="danger-outlined2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-dot"
                        viewBox="0 0 16 16"
                      >
                        <circle cx="8" cy="8" r="8" />
                      </svg>{" "}
                      In Video Call
                    </label>
                  </div>
                </Col>
              </Row>

              <FormGroup>
                <Label for="name">Patient's Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Enter Full Name"
                  type="text"
                />
              </FormGroup>
              <FormGroup>
                <Label for="name">Mobile Number</Label>
                <PhoneInput
                  onlyCountries={["in"]}
                  value={fields["phone"] ? fields["phone"] : ""}
                  onChange={(phone) => handlePhone(phone, "phone")}
                  country="in"
                />
              </FormGroup>
             
              <Row>
                <Col md={12}>
                  <FormGroup>
                    <Label>Select Type of Consultation</Label>
                    <Input className="mb-3" type="select">
                      <option>--- Choose the consultation ---</option>
                      <option>appointment 1</option>
                      <option>appointment 2</option>
                      <option>appointment 3</option>
                    </Input>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <FormGroup>
                    <DatePicker
                      getSelectedDay={selectedDay}
                      labelFormat={"MMMM"}
                      color={"#079347"}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <div>
                <p className="fw-bold">Timings</p>
                <p>9:00AM to 12:00PM</p>
              </div>
              <Row>
                <Col md={3}>
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
                      class="btn btn-outline-success btn-sm btn-block radio_text"
                      for="success-outlined"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-dot"
                        viewBox="0 0 16 16"
                      >
                        <circle cx="8" cy="8" r="8" />
                      </svg>{" "}
                      9:00 AM
                    </label>
                  </div>
                </Col>
                <Col md={3}>
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
                      class="btn btn-outline-success btn-sm btn-block radio_text"
                      for="success-outlined"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-dot"
                        viewBox="0 0 16 16"
                      >
                        <circle cx="8" cy="8" r="8" />
                      </svg>{" "}
                      9:00 AM
                    </label>
                  </div>
                </Col>
                <Col md={3}>
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
                      class="btn btn-outline-success btn-sm btn-block radio_text"
                      for="success-outlined"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-dot"
                        viewBox="0 0 16 16"
                      >
                        <circle cx="8" cy="8" r="8" />
                      </svg>{" "}
                      9:00 AM
                    </label>
                  </div>
                </Col>
                <Col md={3}>
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
                      class="btn btn-outline-success btn-sm btn-block radio_text"
                      for="success-outlined"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-dot"
                        viewBox="0 0 16 16"
                      >
                        <circle cx="8" cy="8" r="8" />
                      </svg>{" "}
                      9:00 AM
                    </label>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md={3}>
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
                      class="btn btn-outline-success btn-sm btn-block radio_text"
                      for="success-outlined"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-dot"
                        viewBox="0 0 16 16"
                      >
                        <circle cx="8" cy="8" r="8" />
                      </svg>{" "}
                      9:00 AM
                    </label>
                  </div>
                </Col>
                <Col md={3}>
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
                      class="btn btn-outline-success btn-sm btn-block radio_text"
                      for="success-outlined"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-dot"
                        viewBox="0 0 16 16"
                      >
                        <circle cx="8" cy="8" r="8" />
                      </svg>{" "}
                      9:00 AM
                    </label>
                  </div>
                </Col>
                <Col md={3}>
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
                      class="btn btn-outline-success btn-sm btn-block radio_text"
                      for="success-outlined"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-dot"
                        viewBox="0 0 16 16"
                      >
                        <circle cx="8" cy="8" r="8" />
                      </svg>{" "}
                      9:00 AM
                    </label>
                  </div>
                </Col>
                <Col md={3}>
                  <div
                    class="btn-group d-grid"
                    role="group"
                    aria-label="Radio button group"
                  >
                    <input
                      type="radio"
                      class="btn-check"
                      name="options-outlined"
                      id="success-outlined3"
                      autocomplete="off"
                      checked
                    />
                    <label
                      class="btn btn-outline-success btn-sm btn-block radio_text"
                      for="success-outlined3"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-dot"
                        viewBox="0 0 16 16"
                      >
                        <circle cx="8" cy="8" r="8" />
                      </svg>{" "}
                      9:00 AM
                    </label>
                  </div>
                </Col>
              </Row>

              <FormGroup className="text-center">
                <Button
                  color="primary"
                  className="button_text"
                  block
                  // outline
                >
                  Get your Appointment
                </Button>
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </Container>
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
          <Col md={6}>
            <Card body className="counter_card">
              <CardTitle className="text-white card_text" tag="h3">
                27+
              </CardTitle>
              <CardText className="text-white">years of experience</CardText>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
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
