import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Table, Card, CardBody, Button} from 'reactstrap';
import Header from '../../assets/components/Header';
import retornaUsuarioLogado from '../../service/nome';
import api from '../../service/api';

 const Participantes = () => {  
    const [participantes, setParticipantes] = useState([]);

    useEffect(() => {
        ListarParticipantes();

    }, [participantes.id]);

    function ListarParticipantes() {
        api.get(`/`)
        .then(response => {
            setParticipantes(response.data);
            console.log(response.data)
        });
    }
     const recarregarParticipantes = (e) => {
        e.preventDefault();
        alert("Gerando grupo..")
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
                                    <h1>Bem vindo! - <span style={{fontSize: "0.8em"}}>{retornaUsuarioLogado().toUpperCase()}</span> </h1>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/>                                        
                                    </p>
                                    <Row>
                                        <Col md="12" className="mt-5">
                                            <Button outline color="success" size="lg" block onClick={recarregarParticipantes}>Dividir grupo novamente?</Button>
                                        </Col>
                                    </Row>
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