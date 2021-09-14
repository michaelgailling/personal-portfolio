import { Row, Col, Card } from 'react-bootstrap'

let linkStyle = {
    textDecoration: "none"
}

let rowStyling = {
    maxHeight: "95%",
    minHeight: "95%"
}

let colStyling = {
    maxHeight: "100%",
    minHeight: "100%"
}

let cardStyling = {
    backgroundColor: '#272727',
    borderColor: '#747474',
    transition: 'box-shadow .3s',
    maxHeight: "100%",
    minHeight: "100%"
}

let cardBody = {
    color: '#ff652f'
}

let portfolioCards = [
    {
        cardTitle: "Turboencabulator Surveys",
        cardText: [
            "Turboencabulator Surveys is a survey web app created as a group porject at Centennial College. It allows users to create surveys with custom form elements and output results in pdf reports.",
            "Developed with Express.js this application uses mongo DB to store user accounts, surveys, and results for later review."
        ],
        imageSource: "images/teFrontPage.png",
        externalUrl: "https://turboencabulator-survey.herokuapp.com/",
    }
]

function Home() {
    return (
            <Row style={rowStyling}>
                <Col style={colStyling}>
                    <a style={linkStyle} href="https://turboencabulator-survey.herokuapp.com/">
                        <Card style={cardStyling}>
                            
                            <Card.Img variant="top" src="images/teFrontPage.png" />
                            
                            <Card.Body style={cardBody}>

                                <Card.Title>
                                    Turboencabulator Surveys
                                </Card.Title>

                                <Card.Text>
                                    <p>
                                        Turboencabulator Surveys is a survey web app created as a group porject at Centennial College.
                                        It allows users to create surveys with custom form elements and output results in pdf reports.
                                    </p>

                                    <p>
                                        Developed with Express.js this application uses mongo DB to store user accounts, surveys, and results for later review.
                                    </p>

                                    <p>
                                        Link:
                                    </p>
                                    
                                    <p>
                                        https://turboencabulator-survey.herokuapp.com/
                                    </p>
                                </Card.Text>

                            </Card.Body>

                        </Card>
                    </a>
                </Col>
                <Col style={colStyling}>
                    <Card style={cardStyling}>
                        <Card.Img variant="top" src="images/placeHolder.jpg" />
                        <Card.Body style={{ color: '#ff652f' }}>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col style={colStyling}>
                    <Card style={cardStyling}>
                        <Card.Img variant="top" src="images/placeHolder.jpg" />
                        <Card.Body style={{ color: '#ff652f' }}>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
    )
}

export default Home