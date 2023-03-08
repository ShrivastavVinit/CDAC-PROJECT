// import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card } from "react-bootstrap";

const Register = () => {
  return (
    <div>
      <br />
      <div>
        <Card>
          <Card.Header as="h5">
            Are you a Recruiter looking to hire?
          </Card.Header>
          <Card.Body>
            <Card.Title>
              Find the most suitable candidates here. Register Now!!!
            </Card.Title>
            <Card.Text>Click below to continue</Card.Text>
            <Button variant="success" href="/RegisterVendor">
              For Vendor
            </Button>
          </Card.Body>
        </Card>
      </div>
      <br />
      <br />
      <div>
        <Card>
          <Card.Header as="h5">
            Are you a Candidate looking for a job?
          </Card.Header>
          <Card.Body>
            <Card.Title>
              Find your dream job right here. Register Now!!!
            </Card.Title>
            <Card.Text>Click below to continue</Card.Text>
            <Button variant="success" href="/RegisterCustomer">
              For Customer
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Register;
