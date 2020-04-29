import React from 'react';
import {Link} from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,   
    NavbarText,
    Button
  } from 'reactstrap';


export default function Header() {

    function Logout() {
        localStorage.clear();
    }
    
    return (
        <header>
        <Navbar color="light" light expand="md">
            <NavbarBrand href="/home" >Formare Tech</NavbarBrand>
            <NavbarToggler />
            <Collapse navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink href="/home">Home</NavLink>
                    </NavItem>                              
                    <NavItem>
                        <NavLink href="/minhasMensagens">Minhas-Mensagens</NavLink>
                    </NavItem>                              
                    <NavItem>
                        <NavLink href="/participantes">Participantes</NavLink>
                    </NavItem>                              
                </Nav>
                <NavbarText>  
                    <Link to="/" onClick={Logout}>
                        <Button color="link" size="lg">Sair</Button>
                    </Link>
                </NavbarText>
            </Collapse>
        </Navbar>            
        </header>
    );
}