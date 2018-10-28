import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Button } from 'react-bootstrap';

const Header = (props) => {
    return (
        <Navbar fixedTop={true} inverse collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <a className="headerLogo" href="/">onBurrito</a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    <NavItem eventKey={1} href="/menu">
                        Menu
                </NavItem>
                    <NavItem eventKey={2} href="/nutrition">
                        Nutrition
                </NavItem>
                    <NavItem eventKey={3} href="/catering">
                        Catering
                </NavItem>
                    <NavItem eventKey={4} href="/faq">
                        FAQ
                </NavItem>
                </Nav>
                <Nav pullRight>
                    <NavItem eventKey={1} href="/user">
                        {props.isLoggedIn ?
                            <div className="headerAccount">
                                <span className="accountSpace">Account</span>
                                    <a href="/"><Button onClick={props.logout} bsStyle="danger">LOG OUT</Button></a>
                            </div> : null}
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;