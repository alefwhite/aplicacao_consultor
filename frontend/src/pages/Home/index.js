import React from 'react';
import  './style.css';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Input, InputGroup, Card, CardBody, Button, CardTitle, CardText, Label} from 'reactstrap';
import Header from '../../assets/components/Header';
import toastr from 'toastr';

toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": true,
    "progressBar": false,
    "positionClass": "toast-top-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5500",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
}

 const Home = () => {  
    
     const handleLogin = (e) => {
        e.preventDefault();
        alert("Login efetuado com sucesso..")
     }

    return (
        <>
            <div className="">
                <Header/>
                <Container>
                    <Row className="justify-content-center">
                        <Col md="12">
                            <Card>
                                <CardBody className="p-4">
                                    <h1>Bem vindo!</h1>
                                    <p>
                                        Coloque seu nome, e-mail e senha para criar uma conta.<br/>
                                        
                                    </p>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="12" className="mt-5 p-4">
                            <Card>
                                <CardBody>
                                    <Form>
                                        <h1 className=" d-flex justify-content-center">Mensagens</h1>                                      
                                        
                                        <InputGroup className="mt-3 p-5">
                                            <Label for="exampleDate">Username</Label>
                                            <Input 
                                                type="text" 
                                                className="ml-2 mr-4"
                                                placeholder="Digite o username desejado"
                                            />

                                            <Label for="exampleDate">Data</Label>
                                            <Input 
                                                className="ml-2 mr-4"
                                                type="date"
                                                name="date"
                                                id="exampleDate"
                                                placeholder=""
                                            />

                                            <Label for="exampleDate">Ordenar</Label>
                                            <Input type="select" className="ml-2">
                                                <option value={1}>Mais recentes</option>
                                                <option value={2}>Mais antigas</option>
                                            </Input>
                                            <Button className="ml-3" color="success">Filtrar</Button>
                                        </InputGroup>
                                        
                                        
                                    </Form>

                                    <Col md="12" className="mt-2">
                                        <Row>
                                            <Col sm="4" className="mb-3">
                                                <Card body>
                                                <CardTitle>Special Title Treatment</CardTitle>
                                                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                                <Button outline color="danger">Apagar</Button>
                                                </Card>
                                            </Col>
                                            <Col sm="4">
                                                <Card body>
                                                <CardTitle>Special Title Treatment</CardTitle>
                                                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                                <Button outline color="danger">Apagar</Button>
                                                </Card>
                                            </Col>
                                            <Col sm="4">
                                                <Card body>
                                                <CardTitle>Special Title Treatment</CardTitle>
                                                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                                <Button outline color="danger">Apagar</Button>
                                                </Card>
                                            </Col>                                            
                                        </Row>                        
                                    </Col>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>                    
                </Container>
            </div>           
        </>
    );
 }

export default Home;