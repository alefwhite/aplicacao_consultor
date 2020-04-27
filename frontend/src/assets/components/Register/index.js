import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Input, InputGroup, Card, CardBody, Button} from 'reactstrap';
import useClass from '../../hooks/add-class-body';

 const Register = () => {  
    // const [tipoUsuario, settipoUsuario] = useState("");

    useClass('page-login');

     const handleRegister = (e) => {
        e.preventDefault();
        alert("Cadastro efetuado com sucesso..")
     }

    return (
        <>
            <div className="mt-5 flex-row align-items-center">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="6">
                            <Card>
                                <CardBody>
                                    <Form onSubmit={handleRegister}>
                                        <h1>Nova conta</h1>
                                        <p>
                                            Coloque seu nome, e-mail e senha para criar uma conta.<br/>
                                            Já tem uma conta? <Link to="/login">Login</Link>
                                        </p>
                                        
                                        <InputGroup className="mb-3">
                                            <Input type="select">
                                                <option value={1}>Consultor</option>
                                                <option value={2}>Participante</option>
                                            </Input>
                                        </InputGroup>
                                        <InputGroup className="mb-3">
                                            <Input type="text" placeholder="Nome"/>
                                        </InputGroup>
                                        <InputGroup className="mb-3">
                                            <Input type="email" placeholder="E-mail"/>
                                        </InputGroup>
                                        <InputGroup className="mb-3">
                                            <Input type="password" placeholder="Senha"/>
                                        </InputGroup>
                                        <InputGroup>
                                                <Button outline color="primary" type="submit">Cadastrar</Button>                                            
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

export default Register;