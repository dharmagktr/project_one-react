import CustomNav from "../components/CustomNav"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Section from "../Layout/Section"
import Text from "../components/Text"
import Images from "../components/Images"
import NavTab from "../components/NavTab"
import navTabImages from "../assets/images/navTabaImage.jpg";
import Footer from "../Footer"
import Cards from "../components/Cards"
import { Container } from "react-bootstrap"
import '../App.css';


function ServicePage(params) {

    return (
        <>
            <CustomNav />
            <Container>

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

                <Footer style="mt-5" />
            </Container>

        </>
    )
}

export default ServicePage