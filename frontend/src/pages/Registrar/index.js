import React, { useState } from 'react';
import  './style.css';
import { Link, useHistory } from 'react-router-dom';
import { Container, Row, Col, Form, Input, InputGroup, Card, CardBody, Button} from 'reactstrap';
import api from '../../service/api';
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
const Register = (props) => {  
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [nome, setNome] = useState('');
    const [tipo, setTipo] = useState(1);

    const history = useHistory();
    console.log(senha)
    console.log(email)
    

     async function handleRegister(e) {
        e.preventDefault();
        
        const data = {
            nome,
            email,
            senha,
            tipo_usuario: tipo
        }

        try {
            const response = await api.post('/usuario', data);

            if(response.status === 200) {                
                toastr.success("Cadastro efetuado com sucesso!");

                history.push('/');

                console.log(response);

            }

        } catch (error) {
            
        }
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
                                            Já tem uma conta? <Link to="/">Login</Link>
                                        </p>
                                        
                                        <InputGroup className="mb-3">
                                            <Input  type="select" onChange={e => setTipo(e.target.value)} value={tipo}>
                                                <option value={1}>Consultor?</option>
                                                <option value={2}>Participante?</option>
                                            </Input>
                                        </InputGroup>
                                        <InputGroup className="mb-3">
                                            <Input
                                                required 
                                                type="text" 
                                                placeholder="Nome"
                                                value={nome}
                                                onChange={e => setNome(e.target.value)}
                                            />
                                        </InputGroup>
                                        <InputGroup className="mb-3">
                                            <Input 
                                                required
                                                type="email" 
                                                placeholder="E-mail"
                                                value={email}
                                                onChange={e => setEmail(e.target.value)}
                                            />
                                        </InputGroup>
                                        <InputGroup className="mb-3">
                                            <Input
                                                required 
                                                type="password" 
                                                placeholder="Senha"
                                                value={senha}
                                                onChange={e => setSenha(e.target.value)}
                                            />
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