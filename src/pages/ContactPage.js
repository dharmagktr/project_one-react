import CustomNav from "../components/CustomNav"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Section from "../Layout/Section"
import Text from "../components/Text"
import Images from "../components/Images"
import NavTab from "../components/NavTab"
import navTabImages from "../assets/images/navTabaImage.jpg";
import Footer from "../Footer"
import { CardOne } from "../components/Cards"
import { Button } from "react-bootstrap"
import '../App.css';
import { CardTwo } from "../components/Cards"
import Container from "react-bootstrap/Container"
import { Form } from "react-bootstrap"
import banner_img from "../assets/images/banner_img.jpg";


function ContactPage() {

    return (
        <>
            <CustomNav />
            <Container>
                <Section>
                    <Text style="display-4 fw-bold text-center mb-5" text="Contact" />
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
                </Section>
            </Container>
            <Footer style="my-5"/>
        </>
    )
}

export default ContactPage