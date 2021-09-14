import { Row, Col, Card } from 'react-bootstrap'

import Details from './details'
import Skills from './skills'
import Education from './education'

function Resume() {
    return (
        <Row >
            <Col sm={3}>
                <Details />
                <Skills />
                <Education />
            </Col>
            <Col xs={1}>
            </Col>
            <Col xs={1}>
                <hr style={{ height: "100%", width: "5px", borderWidth: 0, color: "white", backgroundColor: "white" }} />
            </Col>
            <Col>
                <h1>Experience</h1>
            </Col>
        </Row>
    )
}

export default Resume