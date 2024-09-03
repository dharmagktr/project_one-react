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

function BlogPage(params) {

    return (
        <>
            <CustomNav />
            <Container>
                <Section style="mt-5">
                    <Text style="fw-bold fs-1 text-center " text="Latest News" />
                    <Text style="text-center text-secondary" text="There are many variations of passages of Lorem Ipsum available," />
                    <Text style="text-center text-secondary" text="but the majority have suffered alteration." />
                </Section>

                <Section style="mb-0">
                    <Row>
                        <CardTwo />
                    </Row>
                </Section>  
            </Container>

            <Footer />
        </>
    )
}

export default BlogPage