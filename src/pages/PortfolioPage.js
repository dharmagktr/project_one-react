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

function PortfolioPage(params) {

    return (
        <>
            <CustomNav />
            <Section>
                <Text style="display-3 text-center mb-5" text="Portfolio" />
                <Section >
                    <Row>
                        <CardOne />
                    </Row>
                </Section>

                <Section style="d-flex justify-content-center">
                    <Button size="lg" variant="danger" className=''>VIEW MORE</Button>
                </Section>

                <Footer style="mt-5"/>
            </Section>

        </>
    )
}

export default PortfolioPage