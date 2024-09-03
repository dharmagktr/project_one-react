import CustomNav from "../components/CustomNav"
import Col from "react-bootstrap/Col"
import Row  from "react-bootstrap/Row"
import Section from "../Layout/Section"
import Text from "../components/Text"
import Images from "../components/Images"
import NavTab from "../components/NavTab"
import navTabImages from "../assets/images/navTabaImage.jpg";
import Footer from "../Footer"
import '../App.css';



function AboutPage(style, link) {
    
    return(
        <>
        <CustomNav />
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
        <Footer  style="mt-5"/>

        </>
    )
}

export default AboutPage