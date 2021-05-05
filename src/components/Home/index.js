import react from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'

function Home() {
    return (
        <section>
            <div>
                <h1>
                    Art
                </h1>
                <Container>
                    <Row>
                        <Col xs={6} md={4}>
                          <Image src="../src/assets/brothers.JPG"/>
                        </Col>
                        <Col xs={6} md={4}>
                          <Image src="holder.js/171x180" roundedCircle />
                        </Col>
                        <Col xs={6} md={4}>
                          <Image src="holder.js/171x180" thumbnail />
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    )
}

export default Home;