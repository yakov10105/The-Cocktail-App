import React from 'react'
import { Nav, Navbar ,Container} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlassMartiniAlt } from '@fortawesome/free-solid-svg-icons'
import './Header.css'



const Header = () => {

    return (
        <Navbar className='navbar' expand="md">
            <Container>
                <Navbar.Brand href="/home">
                    <FontAwesomeIcon icon={faGlassMartiniAlt}/>
                    <Navbar.Text>  The Cocktail-Bar</Navbar.Text>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className='navbar-toggle' id="basic-navbar-nav">
                    
                    <Nav className="me-auto">
                        <Nav.Link className='nav-link' href='/random'>Get Random Cocktail</Nav.Link>
                        <Nav.Link className='nav-link' href='/search'>Search for Cocktail</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
