import { Container, Row, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './Header.scss'

function Header() {
    return (
        <header className="header">
            <Container >
                <Row className="justify-content-between">
                    <Col xs="auto">
                        <a
                            className="header__link header__title"
                            href="https://github.com/kientt2/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Homepage
                        </a>
                    </Col>
                    <Col xs="auto">
                        <NavLink 
                            exact
                            className="header__link"
                            to="/photos"
                            activeClassName="header__link--active"
                        >
                            Redux Project
                        </NavLink>
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

export default Header;
