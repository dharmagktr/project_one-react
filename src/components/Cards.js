import Text from "./Text"
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "react-bootstrap/Card";
import Section from "../Layout/Section";
import Images from "./Images";
import ImageOne from "../assets/images/cardBgImage1.jpg";
import ImageTwo from "../assets/images/cardBgImage2.jpg";
import ImageThree from "../assets/images/cardBgImage3.jpg";
import ImageFour from "../assets/images/cardBgImage4.jpg";
import LastImgOne from "../assets/images/lastImageOne.jpg";
import LastImgTwo from "../assets/images/lastImageTwo.jpg";
import LastImgThree from "../assets/images/lastImageThree.jpg";


export const cardDataOne = [
    {
        Title: "Business Stratagy",
        About: "I through myself down among the tallgrass by the stream as i lie chose the earth.",
        colorr: "red",
        image: 'https://th.bing.com/th?id=OIP.ltCgGtzDWSGxsOWmytS-WgHaCP&w=350&h=106&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2'
    },
    {
        Title: "Website Development",
        About: "I through myself down among the tallgrass by the stream as i lie chose the earth.",
        colorr: "green",
        image: "https://pluspng.com/img-png/web-development-png-image-850.png"
    },
    {
        Title: "Marketing & reporting",
        About: "I through myself down among the tallgrass by the stream as i lie chose the earth.",
        image: "https://th.bing.com/th?id=OIP.K0TDPIHfCIvWAy5yZzZqugHaEx&w=311&h=200&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
        colorr: "blue",
    },
    {
        Title: "Mobile app development",
        About: "I through myself down among the tallgrass by the stream as i lie chose the earth.",
        image: "https://th.bing.com/th/id/OIP.VFTbhg1tD-QXi8UO-pKm1wHaFj?rs=1&pid=ImgDetMain",
        colorr: "yellow",
    },
    {
        Title: "Marketing & reporting",
        About: "I through myself down among the tallgrass by the stream as i lie chose the earth.",
        image: "https://th.bing.com/th/id/OIP.TcyQzhZxz4b9zpkihj3fYwEyDM?rs=1&pid=ImgDetMain",
        colorr: "purple",
    },
    {
        Title: "Mobile app development",
        About: "I through myself down among the tallgrass by the stream as i lie chose the earth.",
        image: "https://th.bing.com/th/id/OIP.L3yZp5q37KnKsP0tyjjY3QHaFf?rs=1&pid=ImgDetMain",
        colorr: "orange",
    }
]

const cardDataTwo = [
    {
        title: "Development",
        description: "Getting tickets to the big show",
        image: ImageOne
    },
    {
        title: "Development",
        description: "Getting tickets to the big show",
        image: ImageTwo
    },
    {
        title: "Development",
        description: "Getting tickets to the big show",
        image: ImageThree
    },
    {
        title: "Development",
        description: "Getting tickets to the big show",
        image: ImageFour
    },
    {
        title: "Development",
        description: "Getting tickets to the big show",
        image: ImageThree
    },
    {
        title: "Development",
        description: "Getting tickets to the big show",
        image: ImageFour
    }
]

const cardDataThree = [
    {
        title: "Development",
        description: "Getting tickets to the big show",
        image: LastImgOne
    },
    {
        title: "Development",
        description: "Getting tickets to the big show",
        image: LastImgTwo
    },
    {
        title: "Development",
        description: "Getting tickets to the big show",
        image: LastImgThree
    }
]


const cardMap = cardDataOne.map(a =>
    <Section style="col-md-4 mt-2 mt-md-4" >
        <Section >
            <Card className="p-5 my-3 mx-2 cardhover d-flex align-items-end" id="cardhover" style={{ backgroundImage: `url(${a.image})` }}>


                <div style={{ color: a.colorr }} className="h4 fs-3 fw-bolder">{a.Title}</div>
                <div className="fs-5">{a.About}</div>



            </Card>
        </Section>

    </Section>
)

const cardMapOne = cardDataTwo.map(b => (
    <>
        <Section style="col-md-4 text-center ">
            <Card className="p-5 my-3 my-md-5" style={{ background: `url(${b.image}) no-repeat` }}>
                <Section style="d-flex align-items-end">
                    <Section>
                        <div className="mt-6">{b.title}</div>
                        <div className="h2 text-white">{b.description}</div>
                        <button className="border-0 p-2 rounded-3 mt-3  ">VIEW DETAILS</button>
                    </Section>

                </Section>

            </Card>
        </Section>
    </>
))

const CardMapTwo = cardDataThree.map(c => (
    <Section style="col-md-4 text-center">
        <Card className="p-5 my-3 my-md-5 rounded-3 " style={{ background: `url(${c.image}) no-repeat` }}>
            <div className="mt-6 text-secondary">{c.title}</div>
            <div className="h1 text-white">{c.description}</div>
            <Section style="d-flex justify-content-center">
                <button className="mb-5 w-50 mt-4 p-2 rounded-3 border-0">VIEW DETAILS</button>
            </Section>
        </Card>
    </Section>
))

function Cards() {

    return (
        cardMap
    )
}

export function CardTwo() {
    return (
        CardMapTwo
    )
}

export function CardOne() {

    return (
        cardMapOne
    )
}

export default Cards