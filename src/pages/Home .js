import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNav from '../components/CustomNav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Text from '../components/Text';
import Images from "../components/Images";
import Section from "../Layout/Section";
import Container from 'react-bootstrap/Container';
import banner_img from "../assets/images/banner_img.jpg";
import navTabImages from "../assets/images/navTabaImage.jpg";
import NavTab from '../components/NavTab';
import Cards from '../components/Cards';
import { CardOne } from '../components/Cards';
import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import { CardTwo } from "../components/Cards";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Footer from '../Footer';







export const ContactUs = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_gxvs6xk', 'template_b59j253', form.current, {
          publicKey: 'bxd6YB78aXJvzQBME',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
  
    return (
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input className='ms-5 ' type="text" name="name" /><br />
        <label>phone</label>
        <input className='ms-5' type="tel" name="phone" /><br />
        <label>Email</label>
        <input className='ms-5' type="email" name="email" /><br />
        <label>Message</label>
        <textarea className='' name="message" /><br />
        <input className='ms-5' type="submit" value="Send" />
      </form>
    )
  };
  
  
  
  
  function Home() {
    const [loopData, setLoopData] = useState(0)
    const Nameloop = ["im Dharma", "i am a web developer", "ab", "kdjs"]
    const lengthData = loopData < Nameloop.length - 1
    let loopDatas = Nameloop[loopData]
    setInterval(() => {
      lengthData ? setLoopData(loopData + 1) : setLoopData(0)
    }, 4000);
  
  
    return (
      <>
        <CustomNav />
        <Container>
          <Section style="w-100 vh-100 d-lex align-items-center mx-3">
            <Row>
              <Col className="d-flex align-items-center" md={6}>
                <Section>
                  <Text text="WELCOME TO MY WORLD" />
                  <Text style="display-4 fw-bold mt-2" text="Hi, I'm Dharma" />
                  <Text style="display-4 fw-bold textColor my-2" text="Front-end Developer" />
                  {/* <Section>{loopDatas}</Section> */}
  
                  <Text style="display-4 fw-bold" text="Based in India." />
                </Section>
  
              </Col>
              <Col md={6} >
                <Images style="w-100 mt-3 mt-lg-0" links={banner_img} />
              </Col>
            </Row>
          </Section>
  
          <Section style="p-xl-5">
            <Row>
              <Col md={6} className='d-flex justify-content-center'>
                <Images style="w-75" links={navTabImages} />
              </Col>
              <Col md={6}>
                <Text style="display-3 fw-bold text-center my-3 " text="About Me" />
                <Text style="text-secondary fs-5" text=" There are many variations of passages of Lorem Ipsum available, but the majority have in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum," />
                <NavTab style="mt-5" text="hfdjkk" />
              </Col>
            </Row>
          </Section>
  
          <Section style="mt-4">
            <Text style="display-4 fw-bolder text-center" text="My Awesome Service" />
            <Text style="text-center fs_6 text-secondary my-2" text="There are many variations of passages of Lorem Ipsum available, but" />
            <Text style="text-center  fs_6 text-secondary" text="the majority have suffered alteration." />
          </Section>
  
          <Section>
            <Row>
              <Cards />
            </Row>
          </Section>
  
          <Section style="my-4">
            <Text style="display-3 fw-bold text-center" text="My Latest Project" />
            <Text style="text-center text-secondary fs_6" text="There are many variations of passages of Lorem Ipsum available, but the" />
            <Text style="text-center text-secondary fs_6" text="majority have suffered alteration." />
          </Section>
  
          <Section >
            <Row>
              <CardOne />
            </Row>
          </Section>
  
          <Section style="d-flex justify-content-center">
            <Button size="lg" variant="danger" className=''>VIEW MORE</Button>
          </Section>
  
          <Section style="mt-5">
            <Text style="fw-bold fs-1 text-center " text="Latest News" />
            <Text style="text-center text-secondary" text="There are many variations of passages of Lorem Ipsum available," />
            <Text style="text-center text-secondary" text="but the majority have suffered alteration." />
          </Section>
  
          <Section>
            <Row>
              <CardTwo />
            </Row>
          </Section>
  
          <Section>
            <Row>
              <Col md={6}>
                <Form className="w-75 my-3">
                  <Text style="display-3 fw-bold" text="Hire Me." />
                  <Text style="text-secondary" text="I am available for freelance work. Connect with me via phone:" />
                  <Text style="text-secondary" text="01923 088574 or email: admin@example.com" />
                  <Form.Group className="mb-4 my-4" controlId="formBasicPassword">
                    <Form.Label>Name</Form.Label>
                    <Form.Control className='bg-dark text-secondary border-0' type="text" placeholder="Name *" />
                  </Form.Group>
                  <Form.Group className="mb-3 " controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control className='bg-dark text-secondary border-0' type="email" placeholder="Enter email *" />
                  </Form.Group>
                  <Form.Group className="mb-4" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control className='bg-dark text-secondary border-0' type="password" placeholder="Password" />
                  </Form.Group>
                  <Form.Group className="mb-4" controlId="formBasicPassword">
                    <Form.Label>Message</Form.Label>
                    <Form.Control className='bg-dark text-secondary border-0' as="textarea" row={3} col={4} placeholder="Subject" />
                  </Form.Group>
                  <Button variant="danger" size="lg" className='px-5' type="submit">
                    Submit
                  </Button>
                </Form>
              </Col>
  
              <Col md={6}>
                <Section>
                  <Images style="w-100 mt-3 mt-lg-0" links={banner_img} />
                </Section>
              </Col>
            </Row>
          </Section>
  
          <Footer style="my-5" />
  
        </Container>
  
      </>
  
    );
  }
  
  export default Home;
  