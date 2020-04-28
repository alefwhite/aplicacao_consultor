import React from 'react';
import  './style.css';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Input, InputGroup, Card, CardBody, Button} from 'reactstrap';

 const Login = () => {  
    
     const handleLogin = (e) => {
        e.preventDefault();
        alert("Login efetuado com sucesso..")
     }

    return (
        <>
            <div className="mt-5 flex-row align-items-center">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="6">
                            <Card>
                                <CardBody>
                                    <Form onSubmit={handleLogin}>
                                        <h1>Login</h1>
                                        <p>
                                            Entre com e-mail e senha para acessar. <Link to="/registrar">Criar conta?</Link>
                                        </p>
                                        <InputGroup className="mb-3">
                                            <Input type="email" placeholder="E-mail"/>
                                        </InputGroup>
                                        <InputGroup className="mb-3">
                                            <Input type="password" placeholder="Senha"/>
                                        </InputGroup>
                                        <InputGroup>
                                            <Button outline color="primary" type="submit">Entrar</Button>
                                        </InputGroup>
                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>           
        </>
    );
 }

export default Login;