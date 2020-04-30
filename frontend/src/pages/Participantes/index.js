import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Table, Card, CardBody, Button} from 'reactstrap';
import Header from '../../assets/components/Header';
import retornaUsuarioLogado from '../../service/nome';
import api from '../../service/api';

 const Participantes = () => {  
    const [participantes, setParticipantes] = useState([]);
    const [grupoUm, setGrupoUm] = useState([]);
    const [grupoDois, setGrupoDois] = useState([]);
    const [grupoTres, setGrupoTres] = useState([]);
    const [grupoQuatro, setGrupoQuatro] = useState([]);

    useEffect(() => {
        api.get(`/participantes`)
        .then(response => {
            const quantidadePorGrupo = 29;
            let g1 = [];
            let g2 = [];
            let g3 = [];
            let g4 = [];
            
            setParticipantes(response.data);

            for(let i = 0; i < response.data.length; i++) {

                if(g1.length < quantidadePorGrupo) {
                    g1.push(response.data[i]);
                } else if(g2.length < quantidadePorGrupo) {
                    g2.push(response.data[i]);

                } else if(g3.length < quantidadePorGrupo) {
                    g3.push(response.data[i]);

                } else {
                    if(i < 117) {
                        g4.push(response.data[i]);
                    }
                }
            }

          setGrupoUm(g1);
          setGrupoDois(g2);
          setGrupoTres(g3);
          setGrupoQuatro(g4);

        });        

    }, []);

    async function ListarParticipantes() {
      await api.get(`/participantes`)
        .then(response => {
            const quantidadePorGrupo = 29;
            let g1 = [];
            let g2 = [];
            let g3 = [];
            let g4 = [];
            
            setParticipantes(response.data);

            for(let i = 0; i < response.data.length; i++) {

                if(g1.length < quantidadePorGrupo) {
                    g1.push(response.data[i]);
                } else if(g2.length < quantidadePorGrupo) {
                    g2.push(response.data[i]);

                } else if(g3.length < quantidadePorGrupo) {
                    g3.push(response.data[i]);

                } else {
                    if(i < 117) {
                        g4.push(response.data[i]);
                    }
                }
            }

            setGrupoUm(g1);
            setGrupoDois(g2);
            setGrupoTres(g3);
            setGrupoQuatro(g4);
            
            console.log("4",grupoQuatro.length)
            console.log("3",grupoTres.length)
            console.log("2",grupoDois.length)
            console.log("1",grupoUm.length)
        });        
    }

     async function recarregarParticipantes(e) { 
        e.preventDefault();
        await ListarParticipantes();
        console.log(participantes)
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
                                                        {
                                                            grupoUm.map(g1 => (
                                                                <tbody key={g1.id}>  
                                                                    <tr>
                                                                        <th scope="row">{g1.id}</th>
                                                                        <td>{g1.nome.toUpperCase()}</td>
                                                                        <td>{g1.email}</td>                                                           
                                                                    </tr>                                                                   
                                                                </tbody>
                                                            ))
                                                        }                                                    
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
                                                    {
                                                        grupoDois.map(g2 => (
                                                            <tbody  key={g2.id}>  
                                                                <tr>
                                                                    <th scope="row">{g2.id}</th>
                                                                    <td>{g2.nome.toUpperCase()}</td>
                                                                    <td>{g2.email}</td>                                                           
                                                                </tr>                                                                   
                                                            </tbody>
                                                        ))
                                                    }      
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
                                                    {
                                                        grupoTres.map(g3 => (
                                                            <tbody  key={g3.id}>  
                                                                <tr>
                                                                    <th scope="row">{g3.id}</th>
                                                                    <td>{g3.nome.toUpperCase()}</td>
                                                                    <td>{g3.email}</td>                                                           
                                                                </tr>                                                                   
                                                            </tbody>
                                                        ))
                                                    }      
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
                                                    {
                                                        grupoQuatro.map(g4 => (
                                                            <tbody  key={g4.id}>  
                                                                <tr>
                                                                    <th scope="row">{g4.id}</th>
                                                                    <td>{g4.nome.toUpperCase()}</td>
                                                                    <td>{g4.email}</td>                                                           
                                                                </tr>                                                                   
                                                            </tbody>
                                                        ))
                                                    }      
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