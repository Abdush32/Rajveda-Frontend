import React, { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'

const Index = () => {
    const [fields,setFields] = useState({})


const handlePhone = (phone,field_name) =>{
fields[field_name] = "+" + phone;


}


  return (
    <div>
<Container className='appointment_background'>
<Row className='mt-4 mb-4'>
    <Col md={6}>
        <div className='appointment-container-image'>
        <img src="/assets/img/doctor-appointment.png" className="appointment_image" alt="Rajveda" />
        </div>
    </Col>
    <Col md={6}>
<h1 className='appointment_booking_text mt-4'>Healthcare, without the headache</h1>

<Form>
<FormGroup>
    <Label for="name">
      Patient's Full Name
    </Label>
    <Input
      id="name"
      name="name"
      placeholder="Enter Full Name"
      type="text"
    />
  </FormGroup>
  <FormGroup>
    <Label for="name">
      Mobile Number
    </Label>
    <PhoneInput
    onlyCountries={["in"]}
    value={fields["phone"] ? fields["phone"] : ""}
    onChange={(phone) =>handlePhone(phone,"phone")}
    country="in"

    />
  </FormGroup>
  <Row>
    <Col md={6}><FormGroup>
    <Label for="name">
      Pack a Date
    </Label>
    <Input
      id="name"
      name="name"
      placeholder="Enter Full Name"
      type="date"
    />
  </FormGroup></Col>
    <Col md={6}><FormGroup>
    <Label for="name">
    Pack a Time
    </Label>
    <Input
      id="name"
      name="name"
      placeholder="Enter Full Name"
      type="time"
    />
  </FormGroup></Col>
  </Row>
  <FormGroup>
    <Label>Select Type of Consultation</Label>
    <Input
    className="mb-3"
    type="select"
  >
    <option>
     --- Choose the consultation ---
    </option>
    <option>
      appointment 1
    </option>
    <option>
      appointment 2
    </option>
    <option>
      appointment 3
    </option>
  </Input>
  </FormGroup>



  <FormGroup className='text-center'>
  <Button
    color="primary"
    className='button_text'
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

    </div>
  )
}

export default Index