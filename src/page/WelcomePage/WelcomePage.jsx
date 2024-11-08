import { Container, Row, Col } from "react-bootstrap";

const WelcomePage = ({children}) => {
    return (

        <Container fluid className="wp-container">
            <Row className="h-100">
                <Col xs={12} md={8} className="d-flex align-items-center justify-content-center left-side">
                    <div>
                        <h1 className='header-wp'>Welcome to your perfect logistic assist!</h1>
                        <p className='text-wp'>We are glad to see you! Let's build the routes now!</p>
                    </div>
                </Col>
                <Col xs={12} md={4} className="d-flex align-items-center justify-content-center right-side">
                    {children}
                </Col>
            </Row>
        </Container>
        
    )
};


export default WelcomePage;