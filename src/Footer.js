import footerImg from "../src/assets/images/footerImg.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faFacebook } from "@fortawesome/free-brands-svg-icons"
function Footer() {
    
    return(
        <>
        <Container>
            <Row>
                <Col className="w-10" md={4}>
                <img src={footerImg}/>
                </Col>
                <Col md={4}>
                <p>
                <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                </p>
                </Col>
                <Col md={4}>
                <div className="fs-sm mt-4 text-secondar">Copyright © 2022 Rainbow-Themes. All Rights Reserved.</div>
                </Col>
            </Row>
        </Container>
        </>
    )
}
export default Footer