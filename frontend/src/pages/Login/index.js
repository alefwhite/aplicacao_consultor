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

 const Login = () => {  
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const history = useHistory();


     async function handleLogin (e) {
        e.preventDefault();
        
        const data = {
            email,
            senha
        }

        try {
            const response = await api.post('/session', data);

            if(response.status === 200) {
                localStorage.setItem("usuario", JSON.stringify(response.data.usuario));
                localStorage.setItem("token", response.data.token); 

                toastr.success("Login efetuado com sucesso!");

                history.push('/home');

                console.log(response);

            }

        } catch (error) {
            toastr.error("Email ou senha incorreto!");
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
                                    <Form onSubmit={handleLogin}>
                                        <h1>Login</h1>
                                        <p>
                                            Entre com e-mail e senha para acessar. <Link to="/registrar">Criar conta?</Link>
                                        </p>
                                        <InputGroup className="mb-3">
                                            <Input 
                                                type="email" 
                                                placeholder="E-mail" 
                                                onChange={e => setEmail(e.target.value)}
                                                value={email}
                                            />
                                        </InputGroup>
                                        <InputGroup className="mb-3">
                                            <Input 
                                                type="password" 
                                                placeholder="Senha"
                                                onChange={e => setSenha(e.target.value)}
                                                value={senha}
                                            />
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