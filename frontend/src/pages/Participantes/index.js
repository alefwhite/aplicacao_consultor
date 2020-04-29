import React from 'react';
import { Container, Row, Col, Table, Card, CardBody} from 'reactstrap';
import Header from '../../assets/components/Header';

 const Participantes = () => {  
    
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
                        <Col md="12" className="mt-5">                          
                            <Card>
                                <CardBody>
                                    <h2 className="mb-3 d-flex justify-content-center">Participantes</h2>
                                    <Row className="p-5 ml-5">
                                        <Col sm="6" className="mb-4">
                                            <h2 className="mb-4">Grupo 1</h2>
                                            <Table hover bordered>
                                                    <thead>
                                                        <tr>
                                                            <th>#</th>
                                                            <th>Username</th>
                                                            <th>E-mail</th>                                                            
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">1</th>
                                                            <td>Mark</td>
                                                            <td>Otto</td>                                                           
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">2</th>
                                                            <td>Jacob</td>
                                                            <td>Thornton</td>                                                            
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">3</th>
                                                            <td>Larry</td>
                                                            <td>the Bird</td>                                                          
                                                        </tr>
                                                    </tbody>
                                            </Table>
                                            
                                        </Col>
                                        <Col sm="6" className="mb-4">
                                            <h2 className="mb-4">Grupo 2</h2>
                                            <Table hover bordered>
                                            <thead>
                                                        <tr>
                                                            <th>#</th>
                                                            <th>Username</th>
                                                            <th>E-mail</th>                                                            
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">1</th>
                                                            <td>Mark</td>
                                                            <td>Otto</td>                                                           
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">2</th>
                                                            <td>Jacob</td>
                                                            <td>Thornton</td>                                                            
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">3</th>
                                                            <td>Larry</td>
                                                            <td>the Bird</td>                                                          
                                                        </tr>
                                                    </tbody>
                                            </Table>
                                            
                                        </Col>
                                        <Col sm="6" className="mt-2">
                                            <h2 className="mb-4">Grupo 3</h2>
                                            <Table hover bordered>
                                            <thead>
                                                        <tr>
                                                            <th>#</th>
                                                            <th>Username</th>
                                                            <th>E-mail</th>                                                            
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">1</th>
                                                            <td>Mark</td>
                                                            <td>Otto</td>                                                           
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">2</th>
                                                            <td>Jacob</td>
                                                            <td>Thornton</td>                                                            
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">3</th>
                                                            <td>Larry</td>
                                                            <td>the Bird</td>                                                          
                                                        </tr>
                                                    </tbody>
                                            </Table>
                                            
                                        </Col>
                                        <Col sm="6" className="mt-2">
                                            <h2 className="mb-4">Grupo 4</h2>
                                            <Table hover bordered>
                                            <thead>
                                                        <tr>
                                                            <th>#</th>
                                                            <th>Username</th>
                                                            <th>E-mail</th>                                                            
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">1</th>
                                                            <td>Mark</td>
                                                            <td>Otto</td>                                                           
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">2</th>
                                                            <td>Jacob</td>
                                                            <td>Thornton</td>                                                            
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">3</th>
                                                            <td>Larry</td>
                                                            <td>the Bird</td>                                                          
                                                        </tr>
                                                    </tbody>
                                            </Table>
                                            
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>                    
                </Container>
            </div>           
        </>
    );
 }

export default Participantes;