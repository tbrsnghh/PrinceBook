import React from 'react'
import Slider from 'react-slick'
import { Card, CardBody, CardLink, CardSubtitle, CardText, CardTitle } from 'reactstrap'

export default function OurStory() {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 2000,
        cssEase: "linear",
     
      
    }
    return (
        <>
                <h3 className='text-center font-bold m-4'>Some  Another</h3>
            <div className="slider-container overflow-hidden">
                <Slider {...settings}>

                   
                    <div>
                        <Card style={{ width: '18rem' }} >
                            <CardBody>
                                <CardTitle tag="h5">
                                    Card title
                                </CardTitle>
                        </CardBody>
                            <img  alt="Card cap" src="https://picsum.photos/318/180" width="100%" />
                            <CardBody>
                            <CardText>
                                    Some quick example text to build on the card title and make up the bulk of the card‘s content.
                                </CardText>
                    </CardBody>
                        </Card>
                    </div>
                    <div>
                    <Card style={{ width: '18rem' }} >
                            <CardBody>
                                <CardTitle tag="h5">
                                    Card title
                                </CardTitle>      
                                               </CardBody>
                            <img  alt="Card cap" src="https://picsum.photos/318/180" width="100%" />
                            <CardBody>
                                <CardText>
                                    Some quick example text to build on the card title and make up the bulk of the card‘s content.
                                </CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div>
                    <Card style={{ width: '18rem' }} >
                            <CardBody>
                                <CardTitle tag="h5">
                                    Card title
                                </CardTitle>
                            </CardBody>
                            <img  alt="Card cap" src="https://picsum.photos/318/180" width="100%" />
                            <CardBody>
                                <CardText>
                                    Some quick example text to build on the card title and make up the bulk of the card‘s content.
                                </CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div>
                    <Card style={{ width: '18rem' }} >
                            <CardBody>
                                <CardTitle tag="h5">
                                    Card title
                                </CardTitle>
                            </CardBody>
                            <img  alt="Card cap" src="https://picsum.photos/318/180" width="100%" />
                            <CardBody>
                                <CardText>
                                    Some quick example text to build on the card title and make up the bulk of the card‘s content.
                                </CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div>
                    <Card style={{ width: '18rem' }} >
                            <CardBody>
                                <CardTitle tag="h5">
                                    Card title
                                </CardTitle>
                            </CardBody>
                            <img  alt="Card cap" src="https://picsum.photos/318/180" width="100%" />
                            <CardBody>
                                <CardText>
                                    Some quick example text to build on the card title and make up the bulk of the card‘s content.
                                </CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div>
                    <Card style={{ width: '18rem' }} >
                            <CardBody>
                                <CardTitle tag="h5">
                                    Card title
                                </CardTitle>
                            </CardBody>
                            <img  alt="Card cap" src="https://picsum.photos/318/180" width="100%" />
                            <CardBody>
                                <CardText>
                                    Some quick example text to build on the card title and make up the bulk of the card‘s content.
                                </CardText>
                            </CardBody>
                        </Card>
                    </div>
                </Slider>
            </div>


        </>
    )
}
